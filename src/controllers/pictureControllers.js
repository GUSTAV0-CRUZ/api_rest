import multer from 'multer';
import multerConfig from '../config/multerConfig';
import PictureModel from '../models/PictureModel';

const upload = multer(multerConfig).single('picture');

class Picture {
  create(req, res) {
    console.log('picture create');
    return upload(req, res, async (error) => {
      if (error) return res.status(200).json({ error: [error.code] });
      try {
        const { filename, originalname } = req.file;
        const { id_aluno } = req.body;
        const picture = await PictureModel.create({ filename, originalname, id_aluno });
        return await res.status(200).json(picture);
      } catch (e) {
        return res.status(400).json({ errors: ['erro ao tentar criar imagem'] });
      }
    });
  }
}

export default new Picture();
