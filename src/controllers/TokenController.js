import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import UserModel from '../models/UserModel';

async function passwordIsValid(password, passwordHash) {
  const aproved = await bcryptjs.compare(password, passwordHash);
  return aproved;
}

class Token {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({ errors: ['Credenciais inválida'] });
    }

    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ errors: ['Usuario não existe'] });
    }

    if (!await passwordIsValid(password, user.password_hash)) {
      return res.status(401).json({ errors: ['Senha inválida'] });
    }

    const { id } = user;
    const token = jsonwebtoken.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.status(200).json({ jsonWebToken: token });
  }
}

export default new Token();
