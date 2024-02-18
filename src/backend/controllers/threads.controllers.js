const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const {Threads} = require('../models/threads');

// find all attributes from table
const fetchAllThreads = asyncHandler(async (req, res) => {
  const userData = await Threads.findAll();
  res.json(userData);
});

// find one attribute from table based on id.
const fetchThreadById async = (req, res) => {
  const id = req.params.id;
  const userData = await Threads.findByPk(id);
  res.json(userData);
};
