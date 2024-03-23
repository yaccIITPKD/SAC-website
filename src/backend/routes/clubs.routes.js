const express = require("express");
const router = express.Router();

const {
  fetchAllClubs,
  fetchClubById,
} = require("../controllers/clubs.controllers");

router.route("/").get(fetchAllClubs);

router.route("/:id").get(fetchClubById);

module.exports = router;
