const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const threads = require('../models/threads');

// find all attributes from table
const getAllFromthreads = asyncHandler(async (req, res) => {
  const userData = await threads.findAll();
  res.json(userData);
});

// find one attribute from table based on id.
const fetchOneDataFromAnnouncement async = (req, res) => {
  const id = req.params.id;
  const userData = await threads.findByPk(id);
  res.json(userData);
};
