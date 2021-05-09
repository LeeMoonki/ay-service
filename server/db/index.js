const mysql = require('mysql');
let pool = null

try {
  pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DATABASE,
  });
} catch (e) {
  console.log('create pool error :', e);
}

module.exports = pool;
