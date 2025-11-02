import UserModel from '../models/UserModel';

class User {
  async create(req, res) {
    try {
      const userCriado = await UserModel.create(req.body);
      const { id, nome, email } = userCriado;
      res.json({ id, nome, email });
    } catch (e) {
      res.status(400).json({
        errors: [e.errors.map((erro) => (erro.message))],
      });
    }
  }

  // async index(req, res) {
  //   try {
  //     const lista = await UserModel.findAll();
  //     res.json(lista);
  //   } catch (e) {
  //     res.status(400).json({
  //       errors: [e.errors.map((erro) => (erro.message))],
  //     });
  //   }
  // }

  // async show(req, res) {
  //   try {
  //     const user = await UserModel.findByPk(req.params.id);
  //     if (!user) {
  //       res.status(400).json({ errors: ['Usuario não encontrado'] });
  //       return;
  //     }
  //     res.json(user);
  //   } catch (e) {
  //     res.status(400).json({
  //       errors: [e.errors.map((erro) => (erro.message))],
  //     });
  //   }
  // }

  async update(req, res) {
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
