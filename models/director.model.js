/* eslint-disable comma-dangle */
const { connection } = require('../db/connection.db');

const getLastInsertId = (cb) => {
  const countQuery = 'SELECT COUNT(Id) AS lastInsertId FROM directors';
  connection.query(countQuery, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results[0].lastInsertId);
    }
  });
};

const create = (directorName, cb) => {
  getLastInsertId((err, lastInsertId) => {
    const nextId = lastInsertId + 1;
    const insertQuery = 'INSERT INTO directors VALUES (?, ?)';
    connection.query(insertQuery, [nextId, directorName], (error, results) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, results);
      }
    });
  });
};

const readById = (directorId, cb) => {
  const selectQuery = 'SELECT * FROM directors WHERE Id = ?';
  connection.query(selectQuery, [directorId], (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results[0]);
    }
  });
};

const read = (cb) => {
  const selectQuery = 'SELECT * FROM directors';
  connection.query(selectQuery, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

const updateById = (directorId, newDirectorName, cb) => {
  const updateQuery = 'UPDATE directors SET Name = ? WHERE Id = ?';
  connection.query(
    updateQuery,
    [newDirectorName, directorId],
    (error, results) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, results);
      }
    }
  );
};

const deleteById = (directorId, cb) => {
  const deleteQuery = 'DELETE FROM directors WHERE Id = ?';
  connection.query(deleteQuery, [directorId], (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {
  create,
  readById,
  read,
  updateById,
  deleteById,
};
