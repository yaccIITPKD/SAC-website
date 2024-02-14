const express = require("express");

const router = express.Router();

// need to edit the path
const pool = require("db");

// :table is the name of the table
router.get("/:table", async (req, res) => {
	const table = req.params.table;

	try {
		const { rows } = await pool.query(`select * from ${table}`);
		res.json(rows);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
});

// :table is the name of the table
// :id_column_name is the name of column which has the primary key in the table
// :id is the primary key of the row which we require

router.get("/:table/:id_column_name/:id", async (req, res) => {
	const table = req.params.table;
	const id_column_name = req.params.id_column_name;
	const id_to_fetch = req.params.id;

	try {
		const { rows } = await pool.query(
			`select * from ${table} where ${table}.${id_column_name} = ${id_to_fetch}`
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

// exporting the router
module.exports = router;
