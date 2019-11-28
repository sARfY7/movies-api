'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'Movie',
    {
      title: {
        type: DataTypes.STRING,
        validate: { notNull: true, notEmpty: true },
      },
      description: {
        type: DataTypes.TEXT,
        validate: { notNull: true, notEmpty: true },
      },
      runtime: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          notEmpty: true,
          isInt: true,
        },
      },
      genre: {
        type: DataTypes.STRING,
        validate: { notNull: true, notEmpty: true },
      },
      rating: DataTypes.FLOAT,
      metascore: {
        type: DataTypes.STRING,
        validate: { notNull: true, notEmpty: true },
      },
      votes: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          notEmpty: true,
          isInt: true,
        },
      },
      earning: {
        type: DataTypes.STRING,
        validate: { notNull: true, notEmpty: true },
      },
      actor: {
        type: DataTypes.STRING,
        validate: { notNull: true, notEmpty: true },
      },
      year: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          notEmpty: true,
          isInt: true,
        },
      },
      directorId: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          notEmpty: true,
          isInt: true,
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
