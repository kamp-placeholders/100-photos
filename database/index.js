const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: "172.17.0.2",
  user: "root",
  database: "gallery"
});
