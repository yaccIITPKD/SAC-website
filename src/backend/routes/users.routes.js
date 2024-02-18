const express = require("express");
const router =  express.Router();

const {fetchAllUsers, fetchUsersById} = require("../controllers/users.controllers");

//routes for fetching all users and user by id
router.route("/users").get(fetchAllUsers);
router.route("/users/:id").get(fetchUsersById);

module.exports = router;