const express = require("express");
const router =  express.Router();

const {fetchAllAnnouncements, fetchAnnouncementById} = require("../controllers/announcements.controllers");

//routes for fetching all announcements and announcement by id
router.route("/announcements").get(fetchAllAnnouncements);
router.route("/announcements/:id").get(fetchAnnouncementById);

module.exports = router;