const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Yash9627#@#",
  database: "fitcare",
  port: 3307
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
    return;
  }

  console.log("MySQL Connected");
});

module.exports = db;