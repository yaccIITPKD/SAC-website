const passport = require("passport");
const { User } = require("../models/user");
const { AuthUser } = require("../controllers/auth.controllers");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const callbackURL = "http://localhost:3000/temp/auth/callback";

passport.use(new GoogleStrategy({
    
        clientID: "824598628654-fbflvg5hfgjp4l87bkle5nmirbq0pjic.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback   : true

    },
    
    
    AuthUser

));

//
passport.serializeUser(function(user, done) {
    done(null, user.id); 
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    // User.findByPk(id, function(err, user) {
        done(null, id);
    // });
});