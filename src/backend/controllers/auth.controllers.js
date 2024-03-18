const asyncHandler = require("express-async-handler");


function AuthUser(req, accessToken, refreshToken, profile, done) {
    // Perform any necessary logic, such as storing user data, before calling 'done'
    return done(null, profile);
}

module.exports = { AuthUser };