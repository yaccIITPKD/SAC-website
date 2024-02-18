const express = require("express");
const router = express.Router();

const {
  fetchAllThreads,
  fetchThreadById,
} = require("../controllers/threads.controllers");

router.route("/").get(fetchAllThreads);

router.route("/:id").get(fetchThreadById);

module.exports = router;
