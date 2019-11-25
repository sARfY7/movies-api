/* eslint-disable comma-dangle */
const _ = require('underscore');
const connection = require('../db/connection.db');

const { log } = console;

const defaultColumnValues = {
  primaryKey: false,
};

let primaryKeyCol = null;

const createTable = (tableName, tableSchema) => {
  let tableSchemaString = '';
  const tableSchemaWithDefaults = { ...tableSchema };

  Object.keys(tableSchema).forEach((col) => {
    if (tableSchema[col].primaryKey) {
      primaryKeyCol = col;
    }
    tableSchemaWithDefaults[col] = _.defaults(
      tableSchema[col],
      defaultColumnValues
    );
    tableSchemaString += `${col} ${tableSchema[col].type},`;
  });
  if (primaryKeyCol) {
    tableSchemaString += `PRIMARY KEY(${primaryKeyCol})`;
  } else {
    tableSchemaString = tableSchemaString.slice(
      0,
      tableSchemaString.length - 1
    );
  }
  connection.query(
    `CREATE TABLE IF NOT EXISTS ${tableName} (${tableSchemaString})`,
    (error, results) => {
      if (error) {
        log(error);
      } else {
        log(results);
      }
    }
  );
};

module.exports = { createTable };
