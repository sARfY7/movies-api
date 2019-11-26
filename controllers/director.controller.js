const Director = require('../models/director.model');

const { log } = console;

const createDirector = (req, res) => {
  const { directorName } = req.body;
  Director.create(directorName, (err, directorCreated) => {
    if (err) {
      log(err);
    } else {
      res.status(201).json(directorCreated);
    }
  });
};

const readDirector = (req, res) => {
  const { id } = req.params;
  Director.readById(id, (err, director) => {
    if (err) {
      log(err);
    } else {
      res.status(200).json(director);
    }
  });
};

const readAllDirectors = (req, res) => {
  Director.read((err, directors) => {
    if (err) {
      log(err);
    } else {
      res.status(200).json(directors);
    }
  });
};

const updateDirector = (req, res) => {
  const { id } = req.params;
  const { newDirectorName } = req.body;
  Director.updateById(id, newDirectorName, (err, updatedDirector) => {
    if (err) {
      log(err);
    } else {
      res.status(200).json(updatedDirector);
    }
  });
};

const deleteDirector = (req, res) => {
  const { id } = req.params;
  Director.deleteById(id, (err, deletedDirector) => {
    if (err) {
      log(err);
    } else {
      res.status(200).json(deletedDirector);
    }
  });
};

module.exports = {
  createDirector,
  readDirector,
  readAllDirectors,
  updateDirector,
  deleteDirector,
};
