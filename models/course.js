'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsToMany(models.User, { through: 'UserCourses' });
    }
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
