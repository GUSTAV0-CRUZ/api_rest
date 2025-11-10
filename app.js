import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import { resolve } from 'path';

import alunosRoutes from './src/routes/alunosRoutes';
import usersRouter from './src/routes/usersRoutes';
import tokenRouter from './src/routes/tokenRoutes';
import pictureRouter from './src/routes/pictureRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/aluno/', alunosRoutes);
    this.app.use('/user/', usersRouter);
    this.app.use('/token/', tokenRouter);
    this.app.use('/picture/', pictureRouter);
  }
}

export default new App().app;
