const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const router = require('./routes/home.routes');

const { sequelize } = require('./models/database')
sequelize.sync({ alter: true });


const app = express();
app.use(router)

// Start the server 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}/`);
});
