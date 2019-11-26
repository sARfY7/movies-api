/* eslint-disable comma-dangle */
const { connection } = require('../db/connection.db');

const getLastInsertId = (cb) => {
  const countQuery = 'SELECT COUNT(Rank) AS lastInsertId FROM movies';
  connection.query(countQuery, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results[0].lastInsertId);
    }
  });
};

const create = (movie, cb) => {
  getLastInsertId((err, lastInsertId) => {
    const {
      Title,
      Description,
      Runtime,
      Genre,
      Rating,
      Metascore,
      Votes,
      // eslint-disable-next-line camelcase
      Gross_Earning_in_Mil,
      // eslint-disable-next-line camelcase
      Director_Id,
      Actor,
      Year,
    } = movie;
    const nextId = lastInsertId + 1;
    // eslint-disable-next-line operator-linebreak
    const insertQuery =
      'INSERT INTO movies VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(
      insertQuery,
      [
        nextId,
        Title,
        Description,
        Runtime,
        Genre,
        Rating,
        Metascore,
        Votes,
        // eslint-disable-next-line camelcase
        Gross_Earning_in_Mil,
        // eslint-disable-next-line camelcase
        Director_Id,
        Actor,
        Year,
      ],
      (error, results) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, results);
        }
      }
    );
  });
};

const readById = (movieId, cb) => {
  const selectQuery = 'SELECT * FROM movies WHERE Rank = ?';
  connection.query(selectQuery, [movieId], (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results[0]);
    }
  });
};

const read = (cb) => {
  const selectQuery = 'SELECT * FROM movies';
  connection.query(selectQuery, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

const updateById = (movieId, newMovie, cb) => {
  let updateString = '';
  Object.keys(newMovie).forEach((field) => {
    updateString += `${field} = '${newMovie[field]}',`;
  });
  updateString = updateString.slice(0, updateString.length - 1);
  const updateQuery = `UPDATE movies SET ${updateString} WHERE Rank = ?`;
  connection.query(updateQuery, [movieId], (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

const deleteById = (movieId, cb) => {
  const deleteQuery = 'DELETE FROM movies WHERE Rank = ?';
  connection.query(deleteQuery, [movieId], (error, results) => {
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
