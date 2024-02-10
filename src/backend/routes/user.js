const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/announcements', async(req, res)=>{

    try {
        
        const all_announcements = await pool.query("SELECT * FROM todo");
        res.json(all_announcements.rows);

    } catch (error) {
        
        console.log(error.message);
        res.status(404).send("NOT FOUND");

    }

})

module.exports = router