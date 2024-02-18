const asyncHandler = require("express-async-handler");

const { Club } = require("../models/club");

// find all attributes from table
const fetchAllClubs = asyncHandler(async (req, res) => {
  const userData = await Club.findAll();
  res.json(userData);
});

// find one attribute from table based on id.
const fetchClubById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const userData = await Club.findByPk(id);
  res.json(userData);
});

module.exports = { fetchAllClubs, fetchClubById };
