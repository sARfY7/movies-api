'use strict';
module.exports = (sequelize, DataTypes) => {
  const Director = sequelize.define(
    'Director',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Name cannot be null' },
          notEmpty: { msg: 'Name cannot be empty' },
        },
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
