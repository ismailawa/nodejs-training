'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {}
  }
  Course.init(
    {
      title: DataTypes.STRING,
      code: DataTypes.STRING,
      creditUnit: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Course',
      tableName: 'courses',
    }
  );
  return Course;
};
