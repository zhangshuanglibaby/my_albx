//这个页面负责处理数据

//引入数据
const conn = require('../utils/myconn')
exports.getAllPost = (callback) => {
  //执行sql语句
  let sql = `SELECT posts.*,users.nickname,categories.\`name\`
            FROM posts
            JOIN users on posts.user_id = users.id
            JOIN categories on posts.category_id = categories.id`;
  conn.query(sql,(err,result) => {
    if(err) {
      callback(err);
    }else {
      callback(null,result);
    }
  })
}

