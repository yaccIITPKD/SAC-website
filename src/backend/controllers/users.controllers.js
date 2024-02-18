const asyncHandler = require("express-async-handler");
const { User } = require("../models/user");

// to fetch all rows from users
const fetchAllUsers = asyncHandler(async (req, res) => {
  // using findAll method in sequelize
  const rows = await User.findAll();
  res.json(rows);
});

// to fetch a row from users using primary key
const fetchUsersById = asyncHandler(async (req, res) => {
  // assuming that id is passed as a parameter in request
  const id = req.params.id;
  // using findByPk method in sequelize
  const rows = await User.findByPk(id);
  res.json(rows);
});

module.exports = { fetchAllUsers, fetchUsersById };
