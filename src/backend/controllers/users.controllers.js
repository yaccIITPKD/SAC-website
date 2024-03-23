const asyncHandler = require("express-async-handler");
const { User } = require("../models/user");
const { deleteCouncilByUser_Id } = require("./councils.controllers");
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

// Insert one user
const createUser = asyncHandler(async (req, res) => {
  const userData = req.body;

  // Create a new user in the database
  const newUser = await User.create(userData);
  res.json(newUser);
});

// Bulk insert users
const createBulkUsers = asyncHandler(async (req, res) => {
  const usersData = req.body; 

  // Bulk create users in the database
  const newUsers = await User.bulkCreate(usersData);
  res.json(newUsers);
});


// Update an existing user
const updateUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const user = await User.findByPk(id);
    if (user) {
      const updatedUser = await user.update(updatedData);
      res.json(updatedUser);
    } else {
      console.log("User not found");
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
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

module.exports = { fetchAllUsers, fetchUsersById, createUser ,createBulkUsers, updateUser, deleteUserById, deleteUserByBase_profileId };
