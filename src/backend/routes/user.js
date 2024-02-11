const express = require('express');
const router = express.Router();

router.get('/announcements', async(req, res)=>{

    try {
        
        const all_ancs = await pool.query("SELECT * FROM announcements");
        res.json(all_ancs.rows);

    } catch (error) {
        
        console.log(error.message);
        res.status(423).send("Currently unavailable");

    }

})

router.get('/announcements/:id', async(req, res)=>{

    try {
        
        const { id } = req.params;
        const ancs_id = await pool.query("SELECT * FROM announcements WHERE id = $1", [id]);
        res.json(ancs_id.rows[0]);

    } catch (error) {
        
        console.log(error.message);
        res.status(404).send("NOT FOUND");

    }

})

router.get('/users', async(req, res)=>{

    try {
        
        const users = await pool.query("SELECT * FROM users");
        res.json(users.rows);

    } catch (error) {
        
        console.log(error.message);
        res.status(401).send("Authentication required");

    }

})

router.get('/users/:id', async(req, res)=>{

    try {
        
        const { id } = req.params;
        const users = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        res.json(users.rows[0]);

    } catch (error) {
        
        console.log(error.message);
        res.status(404).send("NOT FOUND");

    }

})


module.exports = router;