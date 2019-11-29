require('dotenv').config();
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const models = require('./models');
const logger = require('./utils/logger.util');

// Route Imports
const directorRoutes = require('./routes/director.route');
const movieRoutes = require('./routes/movie.route');

const app = express();
const PORT = 8080;
const { log } = console;

// Express Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging using Morgan
app.use(
  morgan('dev', {
    stream: fs.createWriteStream('./logs/request/access.log', {
      encoding: 'utf-8',
      flags: 'a',
    }),
  })
);

// Routes Registeration
app.use('/api/directors', directorRoutes);
app.use('/api/movies', movieRoutes);
app.use('*', (req, res) => {
  logger.error(`404 Page Not Found`);
  res.status(404).send('404 Page Not Found');
});

models.sequelize.sync().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      log(err);
    } else {
      log(`Server started at port ${PORT}`);
    }
  });
});
