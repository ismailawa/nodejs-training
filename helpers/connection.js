const mysql = require('mysql2');
const config = require('../config/config');

const connection = mysql.createConnection(config.db);

connection.connect((error) => {
  if (error) {
    console.log(`Connection to Dabase failed with error: ${error.message}`);
  } else {
    console.log(`Connection successfully`);
    connection.query(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER(11) PRIMARY KEY AUTO_INCREMENT, name VARCHAR(20) NOT NULL, email VARCHAR(50) NOT NULL,phone VARCHAR(20) NOT NULL, address VARCHAR(100) NOT NULL)',
      (err, result) => {
        if (err) {
          console.log(`Create database failed: ${err.message}`);
        } else {
          console.log(`Create database successfull: ${result}`);
        }
      }
    );
  }
});

module.exports = connection;
