const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");
const { User } = require("./user.js");

//Announcement
Announcement = sequelize.define("Announcement", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

Announcement.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Announcement, { foreignKey: "user_id" });

module.exports = { Announcement };
