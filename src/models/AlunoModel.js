import Sequelize, { Model } from 'sequelize';

export default class Alunos extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      altura: Sequelize.FLOAT,
      peso: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
