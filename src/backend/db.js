const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "786923",
    host : "localhost",
    port : 5432,
    database : "SAC"
});

module.exports = pool;