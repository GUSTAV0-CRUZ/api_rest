import jsonwebtoken from 'jsonwebtoken';
import UserModel from '../models/UserModel';

export default async (req, res, next) => {
  console.log('middleware');
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ errors: ['Login required'] });

    const [, token] = authorization.split(' ');
    const dadosUser = await jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dadosUser;
    const checkDados = await UserModel.findOne({ where: { email } });
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
