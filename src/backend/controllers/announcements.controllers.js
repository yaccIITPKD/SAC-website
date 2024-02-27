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
  const rows = await Announcement.findByPk(id);
  res.json(rows);
});

// Insert one announcement
const createAnnouncement = asyncHandler(async (req, res) => {
  const announcementData = req.body;

  // Create a new announcement in the database
  const newAnnouncement = await Announcement.create(announcementData);
  res.json(newAnnouncement);
});

// Bulk insert announcements
const createBulkAnnouncements = asyncHandler(async (req, res) => {
  const announcementsData = req.body; 

  // Bulk create announcements in the database
  const newAnnouncements = await Announcement.bulkCreate(announcementsData);
  res.json(newAnnouncements);
});


// Update an existing announcement
const updateAnnouncement = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const announcement = await Announcement.findByPk(id);
    if (announcement) {
      const updatedAnnouncement = await announcement.update(updatedData);
      res.json(updatedAnnouncement);
    } else {
      console.log("Announcement not found");
      res.status(404).json({ error: "Announcement not found" });
    }
  } catch (error) {
    console.error("Error updating announcement:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports = { fetchAllAnnouncements, fetchAnnouncementById , createAnnouncement , createBulkAnnouncements , updateAnnouncement};
