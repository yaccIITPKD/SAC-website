/* ------ INSTRUCTIONS -----------*/
/* see this kind of comments to note the major changes this code requires. */

const express = require('express');
const router = express.Router();

const Announcement = require('../models/announcement');
const User = require('../models/user');
const Clubs = require('../models/clubs');
const Threads = require('../models/threads');

// we can pass one of the above reqs as req in the functions. 
// this is fetchAll of Announcement. 

/* 
  
 * In Models, the function fetchAll() needs to be defined. There we can 
   actually do the database queries. I think/what I have seen is to seperate querying 
   the database and routing from controllers. 

 * If the above function is working, we can use the same function code for fetching all 
   the data from other models. 

*/

const fetchAllDataFromAnnouncement async = (req, res) => {
  try {
    // we have to define fetch all function in models. 
    const AnnouncementData = await Announcement.fetchAll();
    res.json(AnnouncementData);
  } catch(error) {
    res.status(500).send('Internal Server Error');
  }
};

// fetchone for a table : 
/* Instructions for fetchOne is same as that of fetchAll. */

const fetchOneDataFromAnnouncement async = (req, res) => {
  try {
    // we have to define fetch all function in models. 
    const userId = req.params.id; // Extract user ID from route parameters
    const AnnouncementData = await Announcement.fetchOne(id);
    res.json(AnnouncementData);
  } catch(error) {
    res.status(500).send('Internal Server Error');
  }
};
