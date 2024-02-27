const asyncHandler = require("express-async-handler");
const { Council } = require("../models/council");
const { deleteClubByCouncilId } = require("./clubs.controllers");

const deleteCouncilById = asyncHandler(async(req,res)=>{
  const council_id = req.params.id ;
  try{
    deleteClubByCouncilId(req,res) ;
    await Council.destroy({where: {id: council_id}});
   
    res.status(200).json({ success: true, message: 'council deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

const deleteCouncilByUser_Id = asyncHandler(async(req,res)=>{
    const user_id = req.params.id ;
    try{
    
      await Council.destroy({where: {secretary: user_id}});
     
      res.status(200).json({ success: true, message: 'council deleted successfully'});
    }
    catch(error){
      res.status(500).json({success : false ,message : "error occured"}) ;
    }
  }) ;
module.exports = { deleteCouncilById, deleteCouncilByUser_Id };
