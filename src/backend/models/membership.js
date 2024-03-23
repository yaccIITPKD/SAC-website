const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");
const { User } = require("./user.js");
const { Club } = require("./club.js");

Membership = sequelize.define(
  "Membership",
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    club_id: {
      type: DataTypes.INTEGER,
    },
    joined_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    role: {
      type: DataTypes.ENUM({
        values: ['Mentor', 'Participant']
      }),
      defaultValue: 'Participant',
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["user_id", "club_id"],
        primaryKey: true,
      },
    ],
  },

);

Membership.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Membership, { foreignKey: "user_id" });

Membership.belongsTo(Club, { foreignKey: "club_id" });
Club.hasMany(Membership, { foreignKey: "club_id" });

module.exports = { Membership };
