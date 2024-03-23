const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");
const { Expense } = require("./expense.js");
// Expense attachment table (contains additional information for expenses)
Expense_attachment = sequelize.define("Expense_attachment", {
  // primary key
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // foriegn key
  expense_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  // document related to expense
  file_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // path for the file
  file_path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Expense_attachment.belongsTo(Expense, {
  foreignKey: "expense_id",
});
Expense.hasOne(Expense_attachment, { foreignKey: "expense_id" });

module.exports = { Expense_attachment };
