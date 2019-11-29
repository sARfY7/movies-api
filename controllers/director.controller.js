const { Director } = require('../models');

const { log } = console;

const createDirector = (req, res) => {
  const { directorName } = req.body;
  Director.create({ name: directorName })
    .then((directorCreated) => {
      res.status(201).json(directorCreated);
    })
    .catch((err) => {
      if (err.name) {
        if (err.name === 'SequelizeValidationError') {
          const errors = [];
          err.errors.forEach((error) => {
            errors.push(error.message);
          });
          const errorObj = {
            name: 'ValidationError',
            errors,
          };
          res.status(400).json(errorObj);
        } else {
          res.status(500).json(err);
        }
      } else {
        res.status(500).json(err);
      }
    });
};

const readDirector = (req, res) => {
  const { id } = req.params;
  Director.findByPk(id)
    .then((director) => {
      if (director) {
        res.status(200).json(director);
      } else {
        throw new Error('Director not found');
      }
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
};

const readAllDirectors = (req, res) => {
  Director.findAll()
    .then((directors) => {
      res.status(200).json(directors);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const updateDirector = (req, res) => {
  const { id } = req.params;
  const { newDirectorName } = req.body;
  Director.update({ name: newDirectorName }, { where: { id } })
    .then((updatedDirector) => {
      if (updatedDirector[0]) {
        res.status(200).json(updatedDirector);
      } else {
        throw new Error('Director not found');
      }
    })
    .catch((err) => {
      if (err.name) {
        if (err.name === 'SequelizeValidationError') {
          const errors = [];
          err.errors.forEach((error) => {
            errors.push(error.message);
          });
          const errorObj = {
            name: 'ValidationError',
            errors,
          };
          res.status(400).json(errorObj);
        } else {
          res.status(500).json(err.message);
        }
      } else {
        res.status(500).json(err.message);
      }
    });
};

const deleteDirector = (req, res) => {
  const { id } = req.params;
  Director.destroy({ where: { id } })
    .then((deletedDirector) => {
      if (deletedDirector) {
        res.status(200).json(deletedDirector);
      } else {
        throw new Error('Director not found');
      }
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
};

module.exports = {
  createDirector,
  readDirector,
  readAllDirectors,
  updateDirector,
  deleteDirector,
};
