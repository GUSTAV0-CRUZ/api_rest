import Sequelize, { Model } from 'sequelize';

export default class Picture extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Originalname não pode ta vazio',
          },
        },
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Filename não pode ta vazio',
          },
        },
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'picture',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Alunos, { foreignKey: 'id_aluno' });
  }
}
