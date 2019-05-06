DROP DATABASE IF EXISTS noted_db;

CREATE DATABASE noted_db;

USE noted_db;

CREATE TABLE tables 
(
  id INT NOT NULL AUTO_INCREMENT,
  title  VARCHAR(255) NOT NULL,
  txt TEXT NOT NULL,
  PRIMARY KEY(id)

);
