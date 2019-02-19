const express = require('express');
const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const db = require('../database/index.js');
const mysql = require('mysql');
const cors = require('cors');

var PORT = 3002;
var app = express();

db.connect();

app.use(morgan('dev'));
app.use(parser.json());
app.use(cors());

app.use(express.static('./client/dist'));

app.get('/api/photos/:restaurantId', function (req, res) {
  var id = req.params.restaurantId; 
  getPhotosById( id, (error, data) => {
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
  db.query(`SELECT * FROM photos WHERE restaurant_id = ${id};`, (err, photos) => {
    if(err){
      callback(err);
      return; 
    } 
    callback(null, photos)
   });
}