const seed_data = require('../data_generator/seed_data.js');
const mysql = require('mysql');
// seed_data.insertPhotoRow()
// seed_data.populatePhotosTable()
// seed_data.randomImage()

//before these tests run, the db will have to be initialized...

const db = mysql.createConnection({
  user: "root",
  password: "yourpassword",
  database: "gallery"
});

beforeAll(() => {
  return db.connect();
});

afterAll(() => {
  return db.end();
});

test('randomImage() should produce a number less than or equal to 100', () => {
  expect(Number(seed_data.randomImage())).toBeLessThanOrEqual(100);
});

test('insertPhotoRow() should create a SQL query', () => {
  expect().stringContaining('INSERT');
});

