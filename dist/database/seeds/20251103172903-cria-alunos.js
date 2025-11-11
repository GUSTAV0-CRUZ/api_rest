"use strict";module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('alunos', [
      {
        nome: 'teste',
        sobrenome: 'tes',
        email: 'teste100@gmail.com',
        idade: 17,
        altura: 0,
        peso: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'teste2',
        sobrenome: 'tes2',
        email: 'teste102@gmail.com',
        idade: 17,
        altura: 0,
        peso: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'test3',
        sobrenome: 'tes3',
        email: 'teste103@gmail.com',
        idade: 17,
        altura: 0,
        peso: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: () => {},
};
