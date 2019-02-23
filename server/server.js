const express = require('express');
const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const db = require('../database/index.js');
const mysql = require('mysql');
const cors = require('cors');
const SqlString = require('sqlstring');

var PORT = 3002;
var app = express();

db.connect();

app.use(morgan('dev'));
app.use(parser.json());
app.use(cors());

app.use(express.static('./client/dist'));

app.get('/photos/:restaurantId', function (req, res) {
  var id = Number(req.params.restaurantId); 
  getPhotosById(id, (error, data) => {
    if(error) {
      console.log(error);
      return;
    }
    res.set('font-src','none')
    res.status(200).send(data);
  });
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})


//*********************** MODEL ****************************

const getPhotosById = (id, callback) => {
  var escapedId = SqlString.escape(id);
  db.query(`SELECT * FROM photos WHERE restaurant_id = ${escapedId};`, (err, photos) => {
    if(err){
      callback(err);
      return; 
    } 
    callback(null, photos)
   });
}
