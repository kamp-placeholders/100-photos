const express = require('express');
const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const db = require('../database/index.js');
const mysql = require('mysql');

var PORT = 3002;
var app = express()

db.connect();

app.use(morgan('dev'));
app.use(parser.json());

app.use(express.static('./client/dist'));

app.get('/api/photos', function (req, res) {
   db.query('SELECT * FROM photos;', (err, photos) => {
     if(err){
       console.log(err);
       return; 
     } 
     res.status(200).send(photos);
   });
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})