const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 1000,
    host: "localhost",
    user: "root",
    password: "",
    database: "newdb",
});

export default pool;
