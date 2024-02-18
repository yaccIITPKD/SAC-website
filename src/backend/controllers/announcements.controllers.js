const express = require("express");
const asyncHandler = require("express-async-handler");
const { Announcements } = require("../models/announcements");

// to fetch all announcements
const fetchAllAnnouncements = asyncHandler(async (req, res) => {
	// using findAll method in sequelize
	const rows = await Announcements.findAll();
	res.json(rows);
});

// to fetch a single row using primary key
const fetchAnnouncementById = asyncHandler(async (req, res) => {
	// assuming that id is passed as a parameter in request
	const id = req.params.id;
	// using findByPk method in sequelize
	const rows = await Announcements.findByPk(id);
	res.json(rows);
});

module.exports = { fetchAllAnnouncements, fetchAnnouncementById };
