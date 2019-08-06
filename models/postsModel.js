//这个页面负责处理数据

//引入数据
const conn = require('../utils/myconn')
exports.getAllPost = (obj,callback) => {
  //limit关键词可以实现分页效果
  //obj参数必须要有两个值
  //obj.pageSize - 一个页面可以显示多少条内容
  //obj.pageNum - 当前的页面数
  //执行sql语句
  let sql = `SELECT posts.*,users.nickname,categories.\`name\`
            FROM posts
            JOIN users on posts.user_id = users.id
            JOIN categories on posts.category_id = categories.id
            LIMIT ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`;
  conn.query(sql,(err,result) => {
    if(err) {
      callback(err);
    }else {
      callback(null,result);
    }
  })
}

