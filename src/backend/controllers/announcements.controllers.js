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
  const rows = await Announcements.findByPk(id);
  res.json(rows);
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
module.exports = { fetchAllAnnouncements, fetchAnnouncementById, deleteAnnouncementById , deleteAnnouncementByUser_Id};
