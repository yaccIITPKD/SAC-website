const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");
const { User } = require("./user.js");
const { Thread } = require("./thread.js");

Comment = sequelize.define("Comment", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  thread_id: {
    type: DataTypes.INTEGER,
  },

  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

Comment.belongsTo(Thread, { foreignKey: "thread_id" });
Thread.hasMany(Comment, { foreignKey: "thread_id" });

Comment.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Comment, { foreignKey: "user_id" });

module.exports = { Comment };
