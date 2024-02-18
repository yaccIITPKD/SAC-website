const express = require("express");
const router = express.Router();

// Import other router files
const userRoutes = require("./users.routes");
const threadRoutes = require("./threads.routes");
const announcementRoutes = require("./announcements.routes");
const clubRoutes = require("./clubs.routes");

// Use the routers
router.use("/users", userRoutes);
router.use("/threads", threadRoutes);
router.use("/announcements", announcementRoutes);
router.use("/clubs", clubRoutes);

module.exports = router;
