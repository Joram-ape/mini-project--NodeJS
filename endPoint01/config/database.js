const mysql = require("mysql2");

// create connection
let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "miniDB",
});

module.exports = conn;
