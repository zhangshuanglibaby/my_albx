//这个页面完成数据的增删改查
//引入数据库
const mysql = require('mysql');
let conn = mysql.createConnection({
  host : '127.0.0.1',
  user : 'root',
  password : 'root',
  database : 'baixiu'
});

exports.getDataByEmail = (email,callback) => {
  //参数是接收数据的邮箱
  let sql = `select * from users where email = '${email}'`;
  conn.query(sql,(err,result) => {
    if(err) {
      //返回错误结果
      callback(err);
    }else {
      //查询的result返回的是结果集[数组]
      //结果可能是一条数据或undefined
    callback(null,result[0]);
    }
  })
}


