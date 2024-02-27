const asyncHandler = require("express-async-handler");

const { Club } = require("../models/club");

// find all attributes from table
const fetchAllClubs = asyncHandler(async (req, res) => {
  const userData = await Club.findAll();
  res.json(userData);
});

// find one attribute from table based on id.
const fetchClubById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const userData = await Club.findByPk(id);
  res.json(userData);
});

// Insert one club
const createClub = asyncHandler(async (req, res) => {
  const clubData = req.body;

  // Create a new club in the database
  const newClub = await Club.create(clubData);
  res.json(newClub);
});

// Bulk insert clubs
const createBulkClubs = asyncHandler(async (req, res) => {
  const clubsData = req.body; 

  // Bulk create clubs in the database
  const newClubs = await Club.bulkCreate(clubsData);
  res.json(newClubs);
});


// Update an existing club
const updateClub = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const club = await Club.findByPk(id);
    if (club) {
      const updatedClub = await club.update(updatedData);
      res.json(updatedClub);
    } else {
      console.log("Club not found");
      res.status(404).json({ error: "Club not found" });
    }
  } catch (error) {
    console.error("Error updating club:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = { fetchAllClubs, fetchClubById  , createClub , createBulkClubs , updateClub};
