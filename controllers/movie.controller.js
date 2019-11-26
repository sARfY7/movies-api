const Movie = require('../models/movie.model');

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
    Title: movieTitle,
    Description: movieDescription,
    Runtime: movieRuntime,
    Genre: movieGenre,
    Rating: movieRating,
    Metascore: movieMetascore,
    Votes: movieVotes,
    Gross_Earning_in_Mil: movieEarning,
    Director_Id: movieDirectorId,
    Actor: movieActor,
    Year: movieYear,
  };
  Movie.create(movie, (err, movieCreated) => {
    if (err) {
      log(err);
    } else {
      res.status(201).json(movieCreated);
    }
  });
};

const readMovie = (req, res) => {
  const { id } = req.params;
  Movie.readById(id, (err, movie) => {
    if (err) {
      log(err);
    } else {
      res.status(200).json(movie);
    }
  });
};

const readAllMovies = (req, res) => {
  Movie.read((err, movies) => {
    if (err) {
      log(err);
    } else {
      res.status(200).json(movies);
    }
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
    Title: newMovieTitle,
    Description: newMovieDescription,
    Runtime: newMovieRuntime,
    Genre: newMovieGenre,
    Rating: newMovieRating,
    Metascore: newMovieMetascore,
    Votes: newMovieVotes,
    Gross_Earning_in_Mil: newMovieEarning,
    Director_Id: newMovieDirectorId,
    Actor: newMovieActor,
    Year: newMovieYear,
  };
  Movie.updateById(id, newMovie, (err, updatedMovie) => {
    if (err) {
      log(err);
    } else {
      res.status(200).json(updatedMovie);
    }
  });
};

const deleteMovie = (req, res) => {
  const { id } = req.params;
  Movie.deleteById(id, (err, deletedMovie) => {
    if (err) {
      log(err);
    } else {
      res.status(200).json(deletedMovie);
    }
  });
};

module.exports = {
  createMovie,
  readMovie,
  readAllMovies,
  updateMovie,
  deleteMovie,
};
