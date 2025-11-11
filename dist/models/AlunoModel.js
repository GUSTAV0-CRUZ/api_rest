"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Alunos extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
        defaultValue: '',
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
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
        validate: {
          min: {
            args: [3],
            msg: 'Idade precisa estar entre 3 e 130',
          },
          max: {
            args: [130],
            msg: 'Idade precisa estar entre 3 e 130',
          },
          isInt: {
            msg: 'Precisa ser um número inteiro',
          },
        },
        allowNull: false,
        msg: 'Idade inválida',
      },
      altura: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'Altura inválido',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
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

  static associate(models) {
    this.hasMany(models.Picture, { foreignKey: 'id_aluno' });
  }
} exports.default = Alunos;
