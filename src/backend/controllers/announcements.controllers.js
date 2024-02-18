const express = require("express");
const asyncHandler = require("express-async-handler");
const { Announcements } = require("../model");

// to fetch all announcements
const fetchAllAnnouncements = asyncHandler(async (req, res) => {
	// using findAll method in sequelize
	const rows = await Announcements.findAll();
	res.json(rows);
});

const fetchAnnouncementId = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const rows = await Announcements.findByPk(id);
	res.json(rows);
});

module.exports = { fetchAllAnnouncements, fetchAnnouncementId };
