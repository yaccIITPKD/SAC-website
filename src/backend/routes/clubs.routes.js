const express = require('express');
const router =  express.Router();


const { fetchAllClubs, fetchClubId } = require("../controllers/clubs.controllers")

router.route("/").get(fetchAllClubs);

router.route("/:id").get(fetchClubId);


module.exports = router;