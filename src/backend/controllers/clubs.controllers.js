const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const {Clubs} = require('../models/Clubs');

// find all attributes from table
const fetchAllClubs = asyncHandler(async (req, res) => {
  const userData = await Clubs.findAll();
  res.json(userData);
});

// find one attribute from table based on id.
const fetchClubById async = (req, res) => {
  const id = req.params.id;
  const userData = await Clubs.findByPk(id);
  res.json(userData);
};
