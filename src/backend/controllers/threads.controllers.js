const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const threads = require('../models/threads');

const getAllFromthreads = asyncHandler(async (req, res) => {
  const userData = await threads.findAll();
  res.json(userData);
});

// fetchone for a table : 
const fetchOneDataFromAnnouncement async = (req, res) => {
  const id = req.params.id;
  const userData = await threads.findByPk(id);
  res.json(userData);
};
