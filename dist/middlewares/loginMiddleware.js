"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _UserModel = require('../models/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);

exports. default = async (req, res, next) => {
  console.log('middleware');
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ errors: ['Login required'] });

    const [, token] = authorization.split(' ');
    const dadosUser = await _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dadosUser;
    const checkDados = await _UserModel2.default.findOne({ where: { email } });
    if (!checkDados) {
      return res.status(401).json({ errors: ['Token expirado'] });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({ errors: ['Token inválido ou expirado'] });
  }
};
