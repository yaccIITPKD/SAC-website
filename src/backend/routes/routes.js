const express = require("express");
const router =  express.Router();

const {fetchAllDataFromAnnouncement, fetchOneDataFromAnnouncement , fetchAllUsers, fetchOneUser} = require("../controllers");

router.route("/announcements").get(fetchAllDataFromAnnouncement);
router.route("/announcements/:id").get(fetchOneDataFromAnnouncement);

router.route("/users").get(fetchAllUsers);
router.route("/users/:id").get(fetchOneUser);

module.exports = router;