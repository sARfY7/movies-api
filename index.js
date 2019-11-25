/* eslint-disable comma-dangle */
require('dotenv').config();
const fs = require('fs');
const { createTable } = require('./functions/createTable');
const {
  createForeignKeyConstraint,
} = require('./functions/createForeignKeyConstraint');
const { uploadJson } = require('./functions/uploadJson');

// uploadJson(
//   JSON.parse(fs.readFileSync('./data/directors.json').toString()),
//   'directors'
// );

// uploadJson(
//   JSON.parse(fs.readFileSync('./data/movies.json').toString()),
//   'movies'
// );
