const asyncHandler = require("express-async-handler");
const { Announcement_attachment } = require("../models/Announcement_attachment");


const deleteAnnouncement_attachmentById = asyncHandler(async(req,res)=>{
  const Announcement_attachment_id = req.params.id ;
  try{
    await Announcement_attachment.destroy({where: {id: Announcement_attachment_id }});
   
    res.status(200).json({ success: true, message: 'Attachments deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

const deleteAnnouncement_attachmentByAnnouncement_Id = asyncHandler(async(req,res)=>{
  const Announcement_id = req.params.id ;
  try{
    await Announcement_attachment.destroy({where: {announcement_id: Announcement_id }});
   
    res.status(200).json({ success: true, message: 'Attachments deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;




module.exports = {deleteAnnouncement_attachmentById, deleteAnnouncement_attachmentByAnnouncement_Id};
