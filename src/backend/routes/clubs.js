const express = require('express');
const router =  express.Router();


// Function names to be updated later
const { AllClubs, ClubById } = require("../controllers/clubs")

router.route("/").get(AllClubs);

router.route("/:id").get(ClubById);


module.exports = router;