import AlunoModel from '../models/AlunoModel';

class HomeControllers {
  async index(req, res) {
    console.log('Home index');
    try {
      const alunos = await AlunoModel.findAll();
      const alunosMap = alunos.map((aluno) => {
        const {
          id, nome, sobrenome, email, idade, altura, peso,
        } = aluno.dataValues;
        return {
          id, nome, sobrenome, email, idade, altura, peso,
        };
      });
      return res.json(alunosMap);
    } catch (e) {
      if (!e.errors) return res.json({ errors: ['Error não identificado'] });
      const erros = e.errors.map((erro) => erro.message);
      return res.json(erros);
    }
  }

  async create(req, res) {
    console.log('Home create');
    try {
      const userNew = await AlunoModel.create(req.body);
      const {
        id, nome, sobrenome, email, idade, altura, peso,
      } = userNew;
      return res.json({
        id, nome, sobrenome, email, idade, altura, peso,
      });
    } catch (e) {
      if (!e.errors) return res.json({ errors: ['Error não identificado'] });
      const erros = e.errors.map((erro) => erro.message);
      return res.json(erros);
    }
  }

  async show(req, res) {
    console.log('Home show');
    try {
      const user = await AlunoModel.findByPk(req.params.id);
      if (!user) return res.json({ errors: ['Usuário não encontrado'] });
      const {
        id, nome, sobrenome, email, idade, altura, peso,
      } = user;
      return res.json({
        id, nome, sobrenome, email, idade, altura, peso,
      });
    } catch (e) {
      if (!e.errors) return res.json({ errors: ['Error não identificado'] });
      const erros = e.errors.map((erro) => erro.message);
      return res.json(erros);
    }
  }

  async update(req, res) {
    console.log('Home update');
    try {
      const user = await AlunoModel.findByPk(req.params.id);
      if (!user) return res.json({ errors: ['Usuário não encontrado'] });
      const userUpdate = await user.update(req.body);
      const {
        id, nome, sobrenome, email, idade, altura, peso,
      } = userUpdate;
      return res.json({
        id, nome, sobrenome, email, idade, altura, peso,
      });
    } catch (e) {
      if (!e.errors) return res.json({ errors: ['Error não identificado'] });
      const erros = e.errors.map((erro) => erro.message);
      return res.json(erros);
    }
  }

  async delete(req, res) {
    console.log('Home delete');
    try {
      const user = await AlunoModel.findByPk(req.params.id);
      if (!user) return res.json({ errors: ['Usuário não encontrado'] });
      user.destroy();
      const {
        id, nome, sobrenome, email, idade, altura, peso,
      } = user;
      return res.json({
        id, nome, sobrenome, email, idade, altura, peso,
      });
    } catch (e) {
      if (!e.errors) return res.json({ errors: ['Error não identificado'] });
      const erros = e.errors.map((erro) => erro.message);
      return res.json(erros);
    }
  }
}

export default new HomeControllers();
