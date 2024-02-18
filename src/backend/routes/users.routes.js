const express = require("express");
const router = express.Router();

const {
  fetchAllUsers,
  fetchUsersById,
} = require("../controllers/users.controllers");

//routes for fetching all users and user by id
router.route("/").get(fetchAllUsers);
router.route("/:id").get(fetchUsersById);

module.exports = router;
