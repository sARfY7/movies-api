const mysql = require('mysql');

const { log } = console;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
});

connection.connect((err) => {
  if (err) {
    log(err);
  } else {
    log('Connected to MySQL Database!');
  }
});

module.exports = connection;
