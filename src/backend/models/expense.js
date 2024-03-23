const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");
const { Club } = require("./club.js");

// expense table 
Expense = sequelize.define("Expense", {
  // primary key 
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // club id (foreign key)
  club_id: {
    type: DataTypes.INTEGER ,
    allowNull: false,
  },

  amount: {
    type: DataTypes.INTEGER ,
    allowNull: false,
  },
  // description for what the expense will be used
  description: {
    type: DataTypes.STRING ,
    allowNull: false,
  },
  
  date : {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

Expense.belongsTo(Club, { foreignKey: "club_id" });
Club.hasMany(Expense, { foreignKey: "club_id" });

module.exports = { Expense };
