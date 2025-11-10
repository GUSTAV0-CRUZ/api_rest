import AlunoModel from '../models/AlunoModel';
import Picture from '../models/PictureModel';

class AlunoControllers {
  async index(req, res) {
    console.log('aluno index');
    try {
      const alunos = await AlunoModel.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'altura', 'peso'],
        order: [['id', 'DESC'], [Picture, 'id', 'DESC']],
        include: {
          model: Picture,
          attributes: ['id', 'originalname', 'filename'],
        },
      });
      return res.status(200).json(alunos);
    } catch (e) {
      if (!e.errors) return res.status(400).json({ errors: ['Error não identificado'] });
      const erros = e.errors.map((erro) => erro.message);
      return res.status(400).json(erros);
    }
  }

  async create(req, res) {
    console.log('aluno create');
    try {
      const userNew = await AlunoModel.create(req.body);
      const {
        id, nome, sobrenome, email, idade, altura, peso,
      } = userNew;
      return res.status(200).json({
        id, nome, sobrenome, email, idade, altura, peso,
      });
    } catch (e) {
      if (!e.errors) return res.status(400).json({ errors: ['Error não identificado'] });
      const erros = e.errors.map((erro) => erro.message);
      return res.status(400).json(erros);
    }
  }

  async show(req, res) {
    console.log('aluno show');
    try {
      const user = await AlunoModel.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'altura', 'peso'],
        order: [['id', 'DESC'], [Picture, 'id', 'DESC']],
        include: {
          model: Picture,
          attributes: ['id', 'originalname', 'filename'],
        },
      });
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });
      return res.status(200).json(user);
    } catch (e) {
      if (!e.errors) return res.status(400).json({ errors: ['Error não identificado'] });
      const erros = e.errors.map((erro) => erro.message);
      return res.status(400).json(erros);
    }
  }

  async update(req, res) {
    console.log('aluno update');
    try {
      const user = await AlunoModel.findByPk(req.params.id);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });
      const userUpdate = await user.update(req.body);
      const {
        id, nome, sobrenome, email, idade, altura, peso,
      } = userUpdate;
      return res.status(200).json({
        id, nome, sobrenome, email, idade, altura, peso,
      });
    } catch (e) {
      if (!e.errors) return res.json({ errors: ['Error não identificado'] });
      const erros = e.errors.map((erro) => erro.message);
      return res.status(400).json(erros);
    }
  }

  async delete(req, res) {
    console.log('aluno delete');
    try {
      const user = await AlunoModel.findByPk(req.params.id);
      if (!user) return res.json({ errors: ['Usuário não encontrado'] });
      user.destroy();
      return res.status(200).json({
        deletado: true,
      });
    } catch (e) {
      if (!e.errors) return res.json({ errors: ['Error não identificado'] });
      const erros = e.errors.map((erro) => erro.message);
      return res.status(400).json(erros);
    }
  }
}

export default new AlunoControllers();
