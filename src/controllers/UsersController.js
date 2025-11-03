import UserModel from '../models/UserModel';

class User {
  async create(req, res) {
    console.log(req.body);
    console.log('user create');
    try {
      const userCriado = await UserModel.create(req.body);
      const { id, nome, email } = userCriado;
      res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      res.status(400).json({
        errors: [e.errors.map((erro) => (erro.message))],
      });
    }
  }

  async update(req, res) {
    console.log('user update');
    try {
      const user = await UserModel.findByPk(req.userId);
      if (!user) {
        res.status(400).json({ errors: ['Usuario não encontrado'] });
        return;
      }
      if (user.nome === req.body.nome && user.email === req.body.email) {
        res.status(400).json({ errors: ['Usuario sem alterações'] });
        return;
      }
      const userUpdate = await user.update(req.body);
      const { id, nome, email } = userUpdate;
      res.json({ id, nome, email });
    } catch (e) {
      res.status(400).json({
        errors: [e.errors.map((erro) => (erro.message))],
      });
    }
  }

  async delete(req, res) {
    console.log('user delete');
    try {
      const user = await UserModel.findByPk(req.userId);
      if (!user) {
        res.status(400).json({ errors: ['Usuario não encontrado'] });
        return;
      }
      if (user === req.body) {
        res.status(400).json({ errors: ['Usuario sem alterações'] });
        return;
      }
      await user.destroy();
      const { id, nome, email } = user;
      res.json({ id, nome, email });
    } catch (e) {
      res.status(400).json({
        errors: [e.errors.map((erro) => (erro.message))],
      });
    }
  }
}

export default new User();
