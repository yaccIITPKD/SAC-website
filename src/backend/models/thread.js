const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");
const { User } = require("./user.js");
const { Club } = require("./club.js");

Thread = sequelize.define("Thread", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  club_id: {
    type: DataTypes.INTEGER,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

Thread.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Thread, { foreignKey: "user_id" });

Thread.belongsTo(Club, { foreignKey: "club_id" });
Club.hasMany(Thread, { foreignKey: "club_id" });

module.exports = { Thread };
