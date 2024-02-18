const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");
const { User } = require("./user.js");

Council = sequelize.define("Council", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  budget: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  secretary: {
    type: DataTypes.INTEGER,
  },
});

Council.belongsTo(User, { foreignKey: "secretary" });
User.hasOne(Council, { foreignKey: "secretary" });

module.exports = { Council };
