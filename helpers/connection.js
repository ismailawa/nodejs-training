const mysql = require('mysql2/promise');
const config = require('../config/config');

const connection = async () => {
  try {
    const conn = await mysql.createConnection(config.db);

    await conn.connect();
    await conn.query(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER(11) PRIMARY KEY AUTO_INCREMENT, name VARCHAR(20) NOT NULL, email VARCHAR(50) NOT NULL UNIQUE,phone VARCHAR(20) NOT NULL, address VARCHAR(100) NOT NULL)'
    );
    await conn.query(
      'CREATE TABLE IF NOT EXISTS courses (id INTEGER(11) PRIMARY KEY AUTO_INCREMENT, title VARCHAR(50) NOT NULL UNIQUE, code VARCHAR(10) NOT NULL UNIQUE,credit_unit FLOAT(2,1) NOT NULL)'
    );
    console.log('Dabase connected successfully');
    return conn;
  } catch (error) {
    console.log('error' + error);
  }
};

module.exports = connection;
