const asyncHandler = require("express-async-handler");
const { User } = require("../models/user");
const { deleteCouncilByUser_Id } = require("./council.controllers");
const { deleteMembershipByUser_Id } = require("./memberships.controllers");
const { deleteThreadByUser_Id } = require("./threads.controllers");
const { deleteCommentByUser_Id } = require("./comments.controllers");

// to fetch all rows from users
const fetchAllUsers = asyncHandler(async (req, res) => {
  // using findAll method in sequelize
  const rows = await User.findAll();
  res.json(rows);
});

// to fetch a row from users using primary key
const fetchUsersById = asyncHandler(async (req, res) => {
  // assuming that id is passed as a parameter in request
  const id = req.params.id;
  // using findByPk method in sequelize
  const rows = await User.findByPk(id);
  res.json(rows);
});

const deleteUserById = asyncHandler(async(req,res)=>{
  const user_id = req.params.id ;
  try{
    deleteCouncilByUser_Id(req,res) ;
    deleteMembershipByUser_Id(req,res) ;
    deleteThreadByUser_Id(req,res) ;
    deleteCommentByUser_Id(req,res) ;
    await User.destroy({where: {id: user_id}});
   
    res.status(200).json({ success: true, message: 'profile deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

const deleteUserByBase_profileId = asyncHandler(async(req,res)=>{
  const Base_profile_id = req.params.id ;
  try{
   
    await User.destroy({where: {base_profile_id: Base_profile_id}});
   
    res.status(200).json({ success: true, message: 'profile deleted successfully'});
  }
  catch(error){
    res.status(500).json({success : false ,message : "error occured"}) ;
  }
}) ;

module.exports = { fetchAllUsers, fetchUsersById ,deleteUserById, deleteUserByBase_profileId };
