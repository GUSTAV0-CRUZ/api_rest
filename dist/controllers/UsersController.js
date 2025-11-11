"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _UserModel = require('../models/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);

class User {
  async create(req, res) {
    console.log(req.body);
    console.log('user create');
    try {
      const userCriado = await _UserModel2.default.create(req.body);
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
      const user = await _UserModel2.default.findByPk(req.userId);
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
      const user = await _UserModel2.default.findByPk(req.userId);
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

exports. default = new User();
