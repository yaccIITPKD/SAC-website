const asyncHandler = require("express-async-handler");
const { User } = require("../models/user");

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


module.exports = { fetchAllUsers, fetchUsersById ,createUser ,createBulkUsers, updateUser };
