'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      dob: DataTypes.DATE,
      profileImage: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'User',
      tableName: 'users',
    }
  );
  return User;
};
