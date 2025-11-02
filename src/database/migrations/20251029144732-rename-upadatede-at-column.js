module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn('alunos', 'upadated_at', 'updated_at');
  },

  async down(queryInterface) {
    await queryInterface.renameColumn('alunos', 'updated_at', 'upadated_at');
  },
};
