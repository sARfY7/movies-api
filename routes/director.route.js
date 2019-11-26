const express = require('express');

const router = express.Router();

// Controller Import
const {
  createDirector,
  readDirector,
  readAllDirectors,
  updateDirector,
  deleteDirector,
} = require('../controllers/director.controller');

router
  .post('/', createDirector)
  .get('/', readAllDirectors)
  .get('/:id', readDirector)
  .put('/:id', updateDirector)
  .delete('/:id', deleteDirector);

module.exports = router;
