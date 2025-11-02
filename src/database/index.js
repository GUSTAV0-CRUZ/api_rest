import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import AlunoModel from '../models/AlunoModel';
import userModel from '../models/UserModel';

const models = [AlunoModel, userModel];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
