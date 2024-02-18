const express = require('express');
const router =  express.Router();


const { fetchAllThreads, fetchThreadId } = require("../controllers/threads.controllers")

router.route("/").get(fetchAllThreads);

router.route("/:id").get(fetchThreadId);


module.exports = router;