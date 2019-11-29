const { Movie } = require('../models');

const { log } = console;

const createMovie = (req, res) => {
  const {
    movieTitle,
    movieDescription,
    movieRuntime,
    movieGenre,
    movieRating,
    movieMetascore,
    movieVotes,
    movieEarning,
    movieDirectorId,
    movieActor,
    movieYear,
  } = req.body;
  const movie = {
    title: movieTitle,
    description: movieDescription,
    runtime: movieRuntime,
    genre: movieGenre,
    rating: movieRating,
    metascore: movieMetascore,
    votes: movieVotes,
    earning: movieEarning,
    directorId: movieDirectorId,
    actor: movieActor,
    year: movieYear,
  };
  Movie.create(movie)
    .then((createdMovie) => {
      res.status(201).json(createdMovie);
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

const readMovie = (req, res) => {
  const { id } = req.params;
  Movie.findByPk(id)
    .then((movie) => {
      if (movie) {
        res.status(200).json(movie);
      } else {
        throw new Error('Movie not found');
      }
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

const readAllMovies = (req, res) => {
  Movie.findAll()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const updateMovie = (req, res) => {
  const { id } = req.params;
  const {
    newMovieTitle,
    newMovieDescription,
    newMovieRuntime,
    newMovieGenre,
    newMovieRating,
    newMovieMetascore,
    newMovieVotes,
    newMovieEarning,
    newMovieDirectorId,
    newMovieActor,
    newMovieYear,
  } = req.body;
  const newMovie = {
    title: newMovieTitle,
    description: newMovieDescription,
    runtime: newMovieRuntime,
    genre: newMovieGenre,
    rating: newMovieRating,
    metascore: newMovieMetascore,
    votes: newMovieVotes,
    earning: newMovieEarning,
    directorId: newMovieDirectorId,
    actor: newMovieActor,
    year: newMovieYear,
  };
  Movie.update(newMovie, { where: { id } })
    .then((updatedMovie) => {
      if (updatedMovie[0] === 1) {
        res.status(200).json({ message: 'Movie updated successfully' });
      } else {
        throw new Error('Movie not found');
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

const deleteMovie = (req, res) => {
  const { id } = req.params;
  Movie.destroy({ where: { id } })
    .then((deletedMovie) => {
      if (deletedMovie) {
        res.status(200).json({ message: 'Movie deleted successfully' });
      } else {
        throw new Error('Movie not found');
      }
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
};

module.exports = {
  createMovie,
  readMovie,
  readAllMovies,
  updateMovie,
  deleteMovie,
};
