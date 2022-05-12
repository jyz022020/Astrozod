<<<<<<< HEAD
DROP DATABASE IF EXISTS astrozod;

CREATE DATABASE astrozod;
=======
DROP DATABASE IF EXISTS astroZod_db;
CREATE DATABASE astroZod_db;

USE astroZod_db;

CREATE TABLE chineseZodiac(
  id INTEGER NOT NULL,
  animal_name VARCHAR(30) NOT NULL
);

CREATE TABLE zodiacSign(
  id INTEGER NOT NULL,
  stars_name VARCHAR(30) NOT NULL
);

>>>>>>> feature/user.js
