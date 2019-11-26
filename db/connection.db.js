/* eslint-disable comma-dangle */
const Sequelize = require('sequelize');

const connection = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

module.exports = { connection };
