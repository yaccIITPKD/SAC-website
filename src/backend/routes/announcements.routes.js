const express = require("express");
const router = express.Router();

const {
  fetchAllAnnouncements,
  fetchAnnouncementById,
} = require("../controllers/announcements.controllers");

//routes for fetching all announcements and announcement by id
router.route("/").get(fetchAllAnnouncements);
router.route("/:id").get(fetchAnnouncementById);

module.exports = router;
