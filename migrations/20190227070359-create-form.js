

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Forms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    formid: {
      type: Sequelize.STRING,
    },
    formname: {
      type: Sequelize.STRING,
    },
    fieldsandresponses: {
      type: Sequelize.JSONB,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Forms'),
};
