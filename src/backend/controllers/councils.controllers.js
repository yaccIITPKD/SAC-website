const asyncHandler = require("express-async-handler");
const { Council} = require("../models/council");

// Insert one council
const createCouncil = asyncHandler(async (req, res) => {
    const councilData = req.body;
  
    // Create a new council in the database
    const newCouncil = await Council.create(councilData);
    res.json(newCouncil);
  });
  
  // Bulk insert councils
  const createBulkCouncils = asyncHandler(async (req, res) => {
    const councilsData = req.body; 
  
    // Bulk create councils in the database
    const newCouncils = await Council.bulkCreate(councilsData);
    res.json(newCouncils);
  });
  
  
  // Update an existing council
  const updateCouncil = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
  
    try {
      const council = await Council.findByPk(id);
      if (council) {
        const updatedCouncil = await council.update(updatedData);
        res.json(updatedCouncil);
      } else {
        console.log("Council not found");
        res.status(404).json({ error: "Council not found" });
      }
    } catch (error) {
      console.error("Error updating council:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  
  
  module.exports = {createCouncil , createBulkCouncils , updateCouncil};
  