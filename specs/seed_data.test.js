const seed_data = require('../data_generator/seed_data.js');
const mysql = require('mysql');

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
  expect(seed_data.insertPhotoRow()).stringContaining('INSERT')
});

