'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, {});
    }
  }
  Profile.init(
    {
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Profile',
    }
  );
  return Profile;
};
