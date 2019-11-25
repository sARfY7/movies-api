/* eslint-disable comma-dangle */
const _ = require('underscore');
const connection = require('../db/connection.db');

const { log } = console;

const createForeignKeyConstraint = (
  tableName,
  foreignKeyField,
  referenceTableName,
  referenceTableField
) => {
  connection.query(
    `ALTER TABLE ${tableName} ADD CONSTRAINT fk_${tableName}_${foreignKeyField}_${referenceTableName}_${referenceTableField} FOREIGN KEY(${foreignKeyField}) REFERENCES ${referenceTableName}(${referenceTableField}) ON DELETE CASCADE ON UPDATE CASCADE`,
    (error, results) => {
      if (error) {
        log(error);
      } else {
        log(results);
      }
    }
  );
};

module.exports = { createForeignKeyConstraint };
