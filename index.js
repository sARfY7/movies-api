require('dotenv').config();
const express = require('express');
const { connection } = require('./db/connection.db');

// Route Imports
const directorRoutes = require('./routes/director.route');
const movieRoutes = require('./routes/movie.route');

const app = express();
const PORT = 8080;
const { log } = console;

// Express Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Registeration
app.use('/api/directors', directorRoutes);
app.use('/api/movies', movieRoutes);

app.listen(PORT, (err) => {
  if (err) {
    log(err);
  } else {
    log(`Server started at port ${PORT}`);
    connection.connect((dbConnectionError) => {
      if (dbConnectionError) {
        log(dbConnectionError.sqlMessage);
        process.exit(1);
      } else {
        log('Database connection established.');
      }
    });
  }
});
