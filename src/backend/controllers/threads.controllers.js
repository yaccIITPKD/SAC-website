const asyncHandler = require("express-async-handler");

const { Thread } = require("../models/thread");

// find all attributes from table
const fetchAllThreads = asyncHandler(async (req, res) => {
  const userData = await Thread.findAll();
  res.json(userData);
});

// find one attribute from table based on id.
const fetchThreadById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const userData = await Thread.findByPk(id);
  res.json(userData);
});

const deleteThreadById = asyncHandler(async(req,res)=>{
  const Thread_id = req.params.id ;
  try{
  
    await Thread.destroy({where: {id: Thread_id}});
   
    res.status(200).json({ success: true, message: 'Thread deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

const deleteThreadByUser_Id = asyncHandler(async(req,res)=>{
  const User_id = req.params.id ;
  try{
  
    await Thread.destroy({where: {user_id: User_id}});
   
    res.status(200).json({ success: true, message: 'Thread deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

const deleteThreadByClub_Id = asyncHandler(async(req,res)=>{
  const Club_id = req.params.id ;
  try{
  
    await Thread.destroy({where: {club_id: Club_id}});
   
    res.status(200).json({ success: true, message: 'Thread deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

module.exports = { fetchAllThreads, fetchThreadById ,deleteThreadById, deleteThreadByUser_Id ,deleteThreadByClub_Id};
