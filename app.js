import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import alunosRoutes from './src/routes/alunosRoutes';
import usersRouter from './src/routes/usersRoutes';
import tokenRouter from './src/routes/tokenRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/aluno/', alunosRoutes);
    this.app.use('/user/', usersRouter);
    this.app.use('/token/', tokenRouter);
  }
}

export default new App().app;
