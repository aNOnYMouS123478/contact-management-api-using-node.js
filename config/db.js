const { Sequelize } = require('sequelize');
require('dotenv').config(); // Ensure this line is present

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT || 'sqlite',
  storage: process.env.DB_STORAGE || './data/database.sqlite', // SQLite file will be here
});

module.exports = sequelize;

