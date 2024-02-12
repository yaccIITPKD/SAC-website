const express = require("express");

const router = express.Router();

// where is the database connection ?
const pool = require("db");

// for fetching
router.get("/:table", async (req, res) => {
	const table = req.params.table;

	try {
		const { rows } = await pool.query(`select * from ${table}`);
		res.json(rows);
	} catch (error) {
		// is console log required
		res.status(500).json({ message: "Server Error" });
	}
});

router.get("/:table/:id_name_in_table/:id", async (req, res) => {
	const table = req.params.table;
	const id_name_in_table = req.params.id_name_in_table;
	const id_to_fetch = req.params.id;

	try {
		const { rows } = await pool.query(
			`select * from ${table} where ${table}.${id_name_in_table} = ${id_to_fetch}`
		);
		if (rows.length === 0) {
			return res.status(404).json({ message: "resource not found" });
		} else {
			return res.json(rows[0]);
		}
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
});

module.exports = router;
