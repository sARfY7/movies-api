const { Director } = require('../models');

const { log } = console;

const createDirector = (req, res) => {
  const { directorName } = req.body;
  Director.create({ name: directorName })
    .then((directorCreated) => {
      res.status(201).json(directorCreated);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const readDirector = (req, res) => {
  const { id } = req.params;
  Director.findByPk(id)
    .then((director) => {
      res.status(200).json(director);
    })
    .catch((err) => {
      res.status(500).json(err);
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
  Director.update({ name: newDirectorName }, { returning: true, where: { id } })
    .then((updatedDirector) => {
      res.status(200).json(updatedDirector);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const deleteDirector = (req, res) => {
  const { id } = req.params;
  Director.destroy({ where: { id } })
    .then((deletedDirector) => {
      res.status(200).json(deletedDirector);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  createDirector,
  readDirector,
  readAllDirectors,
  updateDirector,
  deleteDirector,
};
