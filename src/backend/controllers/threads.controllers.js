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

// Insert one thread
const createThread = asyncHandler(async (req, res) => {
  const threadData = req.body;

  // Create a new thread in the database
  const newThread = await Thread.create(threadData);
  res.json(newThread);
});

// Bulk insert threads
const createBulkThreads = asyncHandler(async (req, res) => {
  const threadsData = req.body; 

  // Bulk create threads in the database
  const newThreads = await Thread.bulkCreate(threadsData);
  res.json(newThreads);
});


// Update an existing thread
const updateThread = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const thread = await Thread.findByPk(id);
    if (thread) {
      const updatedThread = await thread.update(updatedData);
      res.json(updatedThread);
    } else {
      console.log("Thread not found");
      res.status(404).json({ error: "Thread not found" });
    }
  } catch (error) {
    console.error("Error updating thread:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = { fetchAllThreads, fetchThreadById ,createThread ,createBulkThreads, updateThread };
