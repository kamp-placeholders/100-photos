const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: "172.17.0.2",
  // password: "yourpassword",
  user: "root",
  database: "gallery"
});
