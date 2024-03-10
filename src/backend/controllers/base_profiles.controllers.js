const asyncHandler = require("express-async-handler");
const { Base_profile} = require("../models/base_profile");
const { deleteAnnouncementByUser_Id } = require("./announcements.controllers");
const { deleteUserByBase_profileId } = require("./users.controllers");
const { deleteClubByBase_profileId } = require("./clubs.controllers");


// Insert one base_profile
const createBase_profile = asyncHandler(async (req, res) => {
    const base_profileData = req.body;
  
    // Create a new base_profile in the database
    const newBase_profile = await Base_profile.create(base_profileData);
    res.json(newBase_profile);
  });
  
  // Bulk insert base_profiles
const createBulkBase_profiles = asyncHandler(async (req, res) => {
  const base_profilesData = req.body; 

  // Bulk create base_profiles in the database
  const newBase_profiles = await Base_profile.bulkCreate(base_profilesData);
  res.json(newBase_profiles);
});
  
  
  // Update an existing base_profile
const updateBase_profile = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const base_profile = await Base_profile.findByPk(id);
    if (base_profile) {
      const updatedBase_profile = await base_profile.update(updatedData);
      res.json(updatedBase_profile);
    } else {
      console.log("Base_profile not found");
      res.status(404).json({ error: "Base_profile not found" });
    }
  } catch (error) {
    console.error("Error updating base_profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const deletebase_profileById = asyncHandler(async(req,res)=>{
  const base_profileid = req.params.id ;
  try{
    deleteAnnouncementByUser_Id(req,res) ;
    deleteUserByBase_profileId(req,res) ;
    deleteClubByBase_profileId(req,res) ;
    await Base_profile.destroy({where: {id: base_profileid}});

    res.status(200).json({ success: true, message: 'profile deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;
module.exports = {createBase_profile , createBulkBase_profiles , updateBase_profile, deletebase_profileById};
