require('dotenv').config();
const mysql = require('msql2');

const connection = mysql.createConnection({
  host: `${process.env(DB_HOST)}`,
  user: `${process.env(USER)}`,
  database: `${process.env(DB_NAME)}`,
  password: `${process.env(PASSWORD)}`
});

// connection.connect();
module.exports = connection;