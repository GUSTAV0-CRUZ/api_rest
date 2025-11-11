"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _PictureModel = require('../models/PictureModel'); var _PictureModel2 = _interopRequireDefault(_PictureModel);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('picture');

class Picture {
  create(req, res) {
    console.log('picture create');
    return upload(req, res, async (error) => {
      if (error) return res.status(200).json({ error: [error.code] });
      try {
        const { filename, originalname, url } = req.file;
        const { id_aluno } = req.body;
        const picture = await _PictureModel2.default.create({
          filename, originalname, id_aluno, url,
        });
        return await res.status(200).json(picture);
      } catch (e) {
        return res.status(400).json({ errors: ['erro ao tentar salvar imagem'] });
      }
    });
  }
}

exports. default = new Picture();
