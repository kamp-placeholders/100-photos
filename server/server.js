var express = require('express');
var path = require('path');
var morgan = require('morgan');
var db = require('../data_generator/index.js').db;

// db.connect();

var PORT = 3002;
var app = express()
app.use(morgan('dev'));

//TODO: make this path reletive!
app.use(express.static('./client/dist'));

app.get('/api/photos', function (req, res) {
  res.status(200).send('here ya gooooo')
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})