const connection = require('../db/connection.db');

const { log } = console;

const uploadJson = (jsonFile, tableName) => {
  const values = [];
  let fieldString = '';
  Object.keys(jsonFile[0]).forEach((field) => {
    fieldString += `${field},`;
  });
  fieldString = fieldString.slice(0, fieldString.length - 1);
  jsonFile.forEach((record) => {
    const recordValues = [];
    Object.keys(record).forEach((field) => {
      recordValues.push(record[field]);
    });
    values.push(recordValues);
  });
  connection.query(
    `INSERT INTO ${tableName}(${fieldString}) VALUES ?;`,
    [values],
    (error, results) => {
      if (error) {
        log(error);
      } else {
        log(results);
      }
    }
  );
};

module.exports = { uploadJson };
