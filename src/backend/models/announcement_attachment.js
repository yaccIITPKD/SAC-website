const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");
const { Announcement } = require("./announcement.js");

Announcement_attachment = sequelize.define("Announcement_attachment", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  announcement_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  file_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  file_path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Announcement_attachment.belongsTo(Announcement, {
  foreignKey: "announcement_id",
});
Announcement.hasOne(Announcement_attachment, { foreignKey: "announcement_id" });

module.exports = { Announcement_attachment };
