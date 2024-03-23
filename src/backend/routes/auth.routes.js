const express = require("express");
const router = express.Router();
const passport = require("passport");

//routes 

const {successRedirect, failureRedirect} = {
  successRedirect: 'http://localhost:3000/users/', 
  failureRedirect: '/login'
};

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

router.post('/logout', async (req, res) =>{

  req.session = null;
  req.logout();
  res.redirect('/users'); // change it

})

module.exports = router;