const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const router = require('./routes/home.routes');
const session = require('express-session');
const passport = require('passport');
require('./middlewares/googleauth');


const { sequelize } = require('./models/database')
sequelize.sync({ alter: true });

const app = express();

app.use(session({
  secret: 'ASecret Key',
  resave: false,
  saveUninitialized: true,
  // store: 'toanappropriateplace', 
  cookie: {
      maxAge: 3 * 60 * 60 * 24
  }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(router)

// Start the server 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}/`);
});
