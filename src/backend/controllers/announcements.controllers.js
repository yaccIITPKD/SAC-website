const asyncHandler = require("express-async-handler");
const { Announcement } = require("../models/announcement");
const { deleteAnnouncement_attachmentByAnnouncement_Id } = require("./announcement_attachment.controllers");

// to fetch all announcements
const fetchAllAnnouncements = asyncHandler(async (req, res) => {
  // using findAll method in sequelize
  const rows = await Announcement.findAll();
  res.json(rows);
});//TODO: Add attachements to the announcement

// to fetch a single row using primary key
const fetchAnnouncementById = asyncHandler(async (req, res) => {
  // assuming that id is passed as a parameter in request
  const id = req.params.id;
  // using findByPk method in sequelize
  const rows = await Announcement.findByPk(id);
  res.json(rows);
});

// Insert one announcement
const createAnnouncement = asyncHandler(async (req, res) => {
  const announcementData = req.body;

  // Create a new announcement in the database
  const newAnnouncement = await Announcement.create(announcementData);
  res.json(newAnnouncement);
});

// Bulk insert announcements
const createBulkAnnouncements = asyncHandler(async (req, res) => {
  const announcementsData = req.body; 

  // Bulk create announcements in the database
  const newAnnouncements = await Announcement.bulkCreate(announcementsData);
  res.json(newAnnouncements);
});


// Update an existing announcement
const updateAnnouncement = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const announcement = await Announcement.findByPk(id);
    if (announcement) {
      const updatedAnnouncement = await announcement.update(updatedData);
      res.json(updatedAnnouncement);
    } else {
      console.log("Announcement not found");
      res.status(404).json({ error: "Announcement not found" });
    }
  } catch (error) {
    console.error("Error updating announcement:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const deleteAnnouncementById = asyncHandler(async(req,res)=>{
  const Announcement_id = req.params.id ;
  try{
    deleteAnnouncement_attachmentByAnnouncement_Id(req,res) ;
    await Announcement.destroy({where: {id: Announcement_id }});
    res.status(200).json({ success: true, message: 'Announcement deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

const deleteAnnouncementByUser_Id = asyncHandler(async(req,res)=>{
  const base_profile_id = req.params.id ;
  try{
   
    await Announcement.destroy({where: {user_id: base_profile_id }});
    res.status(200).json({ success: true, message: 'Announcement deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;
module.exports = {fetchAllAnnouncements, fetchAnnouncementById , createAnnouncement , createBulkAnnouncements , updateAnnouncement, deleteAnnouncementById , deleteAnnouncementByUser_Id};
