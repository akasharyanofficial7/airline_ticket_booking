("use strict");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: "cityId",
        onDelete: "CASCADE",
      });
    }
  }

  Airport.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      cityId: { type: DataTypes.INTEGER, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Airport",
    }
  );

  return Airport;
};
