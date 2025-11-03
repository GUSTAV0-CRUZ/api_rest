import AlunoModel from '../models/AlunoModel';

class HomeControllers {
  async index(req, res) {
    const alunos = await AlunoModel.findAll();
    const alunosMap = alunos.map((aluno) => {
      const {
        id, nome, sobrenome, email, idade, altura, peso,
      } = aluno.dataValues;
      return {
        id, nome, sobrenome, email, idade, altura, peso,
      };
    });
    res.json(alunosMap);
  }

  async create(req, res) {
    try {
      const userNew = await AlunoModel.create(req.body);
      res.json(userNew);
    } catch (e) {
      const erros = e.errors.map((erro) => erro.message);
      res.json(erros);
      console.log(e);
    }
  }
}

export default new HomeControllers();
