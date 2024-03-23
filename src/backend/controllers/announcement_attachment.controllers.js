const asyncHandler = require("express-async-handler");

const { Announcement_attachment} = require("../models/announcement_attachment");

// Insert one announcement_attachment
const createAnnouncement_attachment = asyncHandler(async (req, res) => {
    const announcement_attachmentData = req.body;
  
    // Create a new announcement_attachment in the database
    const newAnnouncement_attachment = await Announcement_attachment.create(announcement_attachmentData);
    res.json(newAnnouncement_attachment);
  });
  
  // Bulk insert announcement_attachments
  const createBulkAnnouncement_attachments = asyncHandler(async (req, res) => {
    const announcement_attachmentsData = req.body; 
  
    // Bulk create announcement_attachments in the database
    const newAnnouncement_attachments = await Announcement_attachment.bulkCreate(announcement_attachmentsData);
    res.json(newAnnouncement_attachments);
  });
  
  
  // Update an existing announcement_attachment
  const updateAnnouncement_attachment = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
  
    try {
      const announcement_attachment = await Announcement_attachment.findByPk(id);
      if (announcement_attachment) {
        const updatedAnnouncement_attachment = await announcement_attachment.update(updatedData);
        res.json(updatedAnnouncement_attachment);
      } else {
        console.log("Announcement_attachment not found");
        res.status(404).json({ error: "Announcement_attachment not found" });
      }
    } catch (error) {
      console.error("Error updating announcement_attachment:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

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




module.exports = {createAnnouncement_attachment , createBulkAnnouncement_attachments,
                  updateAnnouncement_attachment, deleteAnnouncement_attachmentById, deleteAnnouncement_attachmentByAnnouncement_Id};
