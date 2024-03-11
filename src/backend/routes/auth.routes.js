const express = require("express");
const router = express.Router();
const passport = require("passport");

//routes 

const {successRedirect, failureRedirect} = {successRedirect: 'http://localhost:3000/users/', failureRedirect: '/login'};

router.get('/google', 
  
  passport.authenticate('google', {
    scope: [ 'email', 'profile'],

  }),
);

router.get("/google/callback",
  
  passport.authenticate("google", {
    
    successRedirect: successRedirect,    
    failureRedirect: failureRedirect 

  }),

);

module.exports = router;