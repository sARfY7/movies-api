'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'Movie',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Title cannot be null' },
          notEmpty: { msg: 'Title cannot be empty' },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: 'Description cannot be null' },
          notEmpty: { msg: 'Description cannot be empty' },
        },
      },
      runtime: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Runtime cannot be null' },
          notEmpty: { msg: 'Runtime cannot be empty' },
          isInt: { msg: 'Runtime should be a valid integer' },
        },
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Genre cannot be null' },
          notEmpty: { msg: 'Genre cannot be empty' },
        },
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: { msg: 'Rating cannot be null' },
          notEmpty: { msg: 'Rating cannot be empty' },
        },
      },
      metascore: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Metascore cannot be null' },
          notEmpty: { msg: 'Metascore cannot be empty' },
        },
      },
      votes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Votes cannot be null' },
          notEmpty: { msg: 'Votes cannot be empty' },
          isInt: { msg: 'Votes should be a valid integer' },
        },
      },
      earning: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Earning cannot be null' },
          notEmpty: { msg: 'Earning cannot be empty' },
        },
      },
      actor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Actor cannot be null' },
          notEmpty: { msg: 'Actor cannot be empty' },
        },
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Year cannot be null' },
          notEmpty: { msg: 'Year cannot be empty' },
          isInt: { msg: 'Year should be a valid integer' },
        },
      },
      directorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Director ID cannot be null' },
          notEmpty: { msg: 'Director ID cannot be empty' },
          isInt: { msg: 'Director ID should be a valid integer' },
        },
      },
    },
    {}
  );
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsTo(models.Director, {
      foreignKey: 'directorId',
    });
  };
  return Movie;
};
