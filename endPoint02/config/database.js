const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sampleAPI"
})

module.exports = conn;