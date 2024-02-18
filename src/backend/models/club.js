const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");
const { Council } = require("./council.js");
const { Base_profile } = require("./base_profile.js");

Club = sequelize.define("Club", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  base_profile_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  budget: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  councilId: { // Add a new column for the foreign key
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

Club.belongsTo(Base_profile, { foreignKey: "id" });
Club.belongsTo(Council, { foreignKey: "councilId" });
Council.hasMany(Club);


module.exports = { Club };
