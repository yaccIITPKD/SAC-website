const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/folder', require('./routes/user'));

app.listen(port, () => {
    console.log(`connected to port ${port}`);
})