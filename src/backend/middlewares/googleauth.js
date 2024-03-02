const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const AuthUser = require("../controllers/users.controllers");

// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
// const callbackURL = ""; 

passport.use(new GoogleStrategy({
    
        clientID: "824598628654-fbflvg5hfgjp4l87bkle5nmirbq0pjic.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "https://localhost:3000/users/auth/callback",
        passReqToCallback   : true

    },
    
    AuthUser,

));


module.exports = passport;