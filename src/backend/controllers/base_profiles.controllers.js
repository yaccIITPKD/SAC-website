const asyncHandler = require("express-async-handler");
const {Base_profile} = require("../models/base_profile");
const { deleteAnnouncementByUser_Id } = require("./announcements.controllers");
const { deleteUserByBase_profileId } = require("./users.controllers");
const { deleteClubByBase_profileId } = require("./clubs.controllers");

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
module.exports = {deletebase_profileById};
