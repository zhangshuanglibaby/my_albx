const mysql = require('mysql');
let conn = mysql.createConnection({
  host : '127.0.0.1',
  user : 'root',
  password : 'root',
  //把时间格式化
  // dateStrings : String,
  database : 'baixiu'
});

module.exports = conn;