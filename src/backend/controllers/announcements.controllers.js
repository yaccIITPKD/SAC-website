const express = require("express");
const asyncHandler = require("express-async-handler");
const { Announcements } = require("../model");

const router = express.Router();

// to fetch all announcements
const fetchAllAnnouncements = asyncHandler(async (req, res) => {
	// using findAll method in sequelize
	const rows = await Announcements.findAll();
	res.json(rows);
});

const getRequest_AllAnnouncements = (path) => {
	router.get(path, fetchAllAnnouncements);
};

const fetchAnnouncementId = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const rows = await Announcements.findByPk(id);
	res.json(rows);
});

const getRequest_AnnouncementId = (path) => {
	router.get(path, fetchAnnouncementId);
};

module.exports = { getRequest_AllAnnouncements, getRequest_AnnouncementId };
