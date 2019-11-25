const fs = require('fs');

const { log } = console;
const movies = JSON.parse(fs.readFileSync('./data/moviesData.json').toString());
const directors = JSON.parse(
  fs.readFileSync('./data/directors.json').toString()
);
const extractedMovies = [];

const findDirectorIdByName = (directorName) => {
  for (let i = 0; i < directors.length; i += 1) {
    if (directors[i].Name === directorName) {
      return directors[i].Id;
    }
  }
  return -1;
};

movies.forEach((movie) => {
  const directorId = findDirectorIdByName(movie.Director);
  extractedMovies.push({
    Rank: movie.Rank,
    Title: movie.Title,
    Description: movie.Description,
    Runtime: movie.Runtime,
    Genre: movie.Genre,
    Rating: movie.Rating,
    Metascore: movie.Metascore,
    Votes: movie.Votes,
    Gross_Earning_in_Mil: movie.Gross_Earning_in_Mil,
    Director_Id: directorId,
    Actor: movie.Actor,
    Year: movie.Year,
  });
});

fs.writeFile('./data/movies.json', JSON.stringify(extractedMovies), () => {
  log('Movies extracted to "movies.json" file in "data" directory!');
});
