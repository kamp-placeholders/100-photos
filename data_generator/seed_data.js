const faker = require('faker');
const mysql = require('mysql');
const zeroFill = require('zero-fill');
const db = require('../database/index.js');

db.connect();

var randomImage = function () {
  var num = Math.floor(Math.random() * 100) + 1;
  return zeroFill(3, num);
}

var insertPhotoRow = function () {
  let imageName = randomImage();
  let url = `https://s3-us-west-1.amazonaws.com/placeholders.carousel.photos/00${imageName}.jpg`;
  // let restaurant_id = Math.floor(Math.random() * 100) + 1;
  let restaurant_id = 1;
  let description = faker.lorem.sentence();
  let date = faker.date.past().toString();
  let source = faker.lorem.words();

  var query = `INSERT INTO photos (url, restaurant_id, description, date, source) VALUES (
  '${url}', '${restaurant_id}', '${description}', '${date}', '${source}');`

  return query;
}

var populatePhotosTable = function () {
  for (var i = 0; i < 100; i++) {
    var query = insertPhotoRow();

    db.query(query, (err) => {
      if (err) {
        console.log(err);
      }
      return;
    })
  }
}

populatePhotosTable();

module.exports.db = db;

