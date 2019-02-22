const mysql = require('mysql');

module.exports = mysql.createConnection({
  user: "root",
  password: "yourpassword",
  database: "gallery"
});
