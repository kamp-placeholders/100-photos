DROP database IF EXISTS gallery; 

CREATE database gallery;

USE gallery; 

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(255),
  restaurant_id VARCHAR(255),
  description VARCHAR(255), 
  date VARCHAR(255), 
  source VARCHAR(255)
);

 
