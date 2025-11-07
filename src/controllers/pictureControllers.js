import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('picture');

class Picture {
  async create(req, res) {
    return upload(req, res, (error) => {
      if (error) return res.json({ error: [error.code] });
      return res.json(req.file);
    });
  }
}

export default new Picture();
