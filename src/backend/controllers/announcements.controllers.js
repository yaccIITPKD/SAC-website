const asyncHandler = require("express-async-handler");
const { Announcement } = require("../models/announcement");

// to fetch all announcements
const fetchAllAnnouncements = asyncHandler(async (req, res) => {
  // using findAll method in sequelize
  const rows = await Announcement.findAll();
  res.json(rows);
});//TODO: Add attachements to the announcement

// to fetch a single row using primary key
const fetchAnnouncementById = asyncHandler(async (req, res) => {
  // assuming that id is passed as a parameter in request
  const id = req.params.id;
  // using findByPk method in sequelize
  const rows = await Announcements.findByPk(id);
  res.json(rows);
});

module.exports = { fetchAllAnnouncements, fetchAnnouncementById };
