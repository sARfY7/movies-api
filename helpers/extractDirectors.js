const fs = require('fs');

const { log } = console;
const movies = JSON.parse(fs.readFileSync('./data/movies.json').toString());
const directors = [];

const directorExists = (arrOfDirectors, directorName) => {
  for (let i = 0; i < arrOfDirectors.length; i += 1) {
    if (directorName === arrOfDirectors[i].Name) {
      return true;
    }
  }
  return false;
};

let id = 1;
movies.forEach((movie) => {
  if (!directorExists(directors, movie.Director)) {
    directors.push({ Id: id, Name: movie.Director });
    id += 1;
  }
});

fs.writeFile('./data/directors.json', JSON.stringify(directors), () => {
  log('Directors extracted to "directors.json" file in "data" directory.');
});
