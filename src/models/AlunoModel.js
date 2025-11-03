import Sequelize, { Model } from 'sequelize';

export default class Alunos extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 20],
            msg: 'Nome precisa estar entre 3 e 20 caracteres',
          },
        },
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 20],
            msg: 'Sobrenome precisa estar entre 3 e 20 caracteres',
          },
        },
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: {
          args: [true],
          msg: 'Email existente',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
        allowNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          min: {
            args: [3],
            msg: 'Precisa estar entre 3 e 130',
          },
          max: {
            args: [130],
            msg: 'Precisa estar entre 3 e 130',
          },
          isInt: {
            msg: 'Precisa ser um número inteiro',
          },
        },
        allowNull: false,
        msg: 'Idade inválida',
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'Altura inválido',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'Peso inválido',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
