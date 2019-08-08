//处理分类数据的动态加载 --- 操作数据库
//引入数据库
const conn = require('../utils/myconn');

exports.getAllCate = (callback) => {
  let sql = `SELECT * FROM categories`;
  conn.query(sql,(err,result) => {
    if(err) {
      callback(err);
    }else {
      callback(null,result);
    }
  })
}