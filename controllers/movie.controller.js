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
      res.status(500).json(err);
    });
};

const readMovie = (req, res) => {
  const { id } = req.params;
  Movie.findByPk(id)
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch((err) => {
      res.status(500).json(err);
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
  Movie.update(newMovie, { returning: true, where: { id } })
    .then((updatedMovie) => {
      res.status(200).json(updatedMovie);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const deleteMovie = (req, res) => {
  const { id } = req.params;
  Movie.destroy({ where: { id } })
    .then((deletedMovie) => {
      res.status(200).json(deletedMovie);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  createMovie,
  readMovie,
  readAllMovies,
  updateMovie,
  deleteMovie,
};
