const express = require("express");
const router = express.Router();
const passport = require("../middlewares/googleauth");

const {
  fetchAllUsers,
  fetchUsersById,
} = require("../controllers/users.controllers");


//routes for fetching all users and user by id
router.route("/").get(fetchAllUsers);
router.route("/:id").get(fetchUsersById);

//routes 

router.get('/auth', 
  
  passport.authenticate('google', {
    scope: [ 'email', 'profile' ]      // what is needed?
  }),

);

router.get("/auth/callback",
  
  passport.authenticate("google", {
    
    successRedirect: '/',     // to where exactly?
    failureRedirect: '/login' // to where exactly?

  }),
  
);

module.exports = router;