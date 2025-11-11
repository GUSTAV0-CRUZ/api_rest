"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _UserModel = require('../models/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);

async function passwordIsValid(password, passwordHash) {
  const aproved = await _bcryptjs2.default.compare(password, passwordHash);
  return aproved;
}

class Token {
  async create(req, res) {
    console.log('token create');
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({ errors: ['Credenciais inválida'] });
    }

    const user = await _UserModel2.default.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ errors: ['Usuario não existe'] });
    }

    if (!await passwordIsValid(password, user.password_hash)) {
      return res.status(401).json({ errors: ['Senha inválida'] });
    }

    const { id } = user;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.status(200).json({ jsonWebToken: token });
  }
}

exports. default = new Token();
