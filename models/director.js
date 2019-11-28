'use strict';
module.exports = (sequelize, DataTypes) => {
  const Director = sequelize.define(
    'Director',
    {
      name: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notNull: true,
        notEmpty: true,
      },
    },
    {}
  );
  Director.associate = function(models) {
    // associations can be defined here
    Director.hasMany(models.Movie, {
      foreignKey: 'directorId',
    });
  };
  return Director;
};
