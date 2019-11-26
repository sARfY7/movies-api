const express = require('express');

const router = express.Router();

// Controller Import
const {
  createMovie,
  readMovie,
  readAllMovies,
  updateMovie,
  deleteMovie,
} = require('../controllers/movie.controller');

router
  .post('/', createMovie)
  .get('/', readAllMovies)
  .get('/:id', readMovie)
  .put('/:id', updateMovie)
  .delete('/:id', deleteMovie);

module.exports = router;
