const asyncHandler = require("express-async-handler");
const { deleteMembershipByClub_Id } = require("./membership.controllers");
const { deleteThreadByClub_Id } = require("./threads.controllers");
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

const deleteClubById = asyncHandler(async(req,res)=>{
  const Club_id = req.params.id ;
  try{
    deleteMembershipByClub_Id(req,res) ;
    deleteThreadByClub_Id(req,res) ;
    await Club.destroy({where: {id: Club_id}});
   
    res.status(200).json({ success: true, message: 'club deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

const deleteClubByBase_profileId = asyncHandler(async(req,res)=>{
  const Base_profile_id = req.params.id ;
  try{
   
    await Club.destroy({where: {base_profile_id : Base_profile_id}});
   
    res.status(200).json({ success: true, message: 'club deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

const deleteClubByCouncilId = asyncHandler(async(req,res)=>{
  const council_id = req.params.id ;
  try{
   ;
    await Club.destroy({where: {council: council_id}});
   
    res.status(200).json({ success: true, message: 'club deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

module.exports = { fetchAllClubs, fetchClubById, deleteClubById, deleteClubByBase_profileId, deleteClubByCouncilId };
