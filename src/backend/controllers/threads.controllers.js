const asyncHandler = require("express-async-handler");

const { Thread } = require("../models/thread");

// find all attributes from table
const fetchAllThreads = asyncHandler(async (req, res) => {
  const userData = await Thread.findAll();
  res.json(userData);
});

// find one attribute from table based on id.
const fetchThreadById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const userData = await Thread.findByPk(id);
  res.json(userData);
});

module.exports = { fetchAllThreads, fetchThreadById };
