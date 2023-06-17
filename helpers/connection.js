const mysql = require('mysql2');
const config = require('../config/config');

const connection = mysql.createConnection(config.db);

connection.connect((error) => {
  if (error) {
    console.log(`Connection to Dabase failed with error: ${error.message}`);
  } else {
    console.log(`Connection successfully`);
    connection.query(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER(11) PRIMARY KEY AUTO_INCREMENT, name VARCHAR(20) NOT NULL, email VARCHAR(50) NOT NULL UNIQUE,phone VARCHAR(20) NOT NULL, address VARCHAR(100) NOT NULL)',
      (err, result) => {
        if (err) {
          console.log(`Create users table failed: ${err.message}`);
        } else {
          console.log(
            `Users table created successfull: ${result.affectedRows}`
          );
        }
      }
    );
    connection.query(
      'CREATE TABLE IF NOT EXISTS courses (id INTEGER(11) PRIMARY KEY AUTO_INCREMENT, title VARCHAR(50) NOT NULL UNIQUE, code VARCHAR(10) NOT NULL UNIQUE,credit_unit FLOAT(2,1) NOT NULL)',
      (err, result) => {
        if (err) {
          console.log(`Create courses table failed: ${err.message}`);
        } else {
          console.log(
            `Course table created successfull: ${result.affectedRows}`
          );
        }
      }
    );
  }
});

module.exports = connection;
