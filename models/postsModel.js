//这个页面负责处理数据
/**
 * 要查询获取全部数据
 * 要查询筛选的数据
 * 要查count关键词获取总数据 -- 数字
 */
//多条件查询可以添加守恒 -- 可以利用and连接

//引入数据
const conn = require('../utils/myconn');

//obj是查询分页的参数
//obj.pageNum - 当前的页数
//obj.pageSize - 页面可显示的数据
//obj.cate - 分类的id
//obj.status - 发布的状态
exports.getAllPost = (obj,callback) => {
  let sql = `SELECT posts.*,users.nickname,categories.\`name\`
              FROM posts
              JOIN users on posts.user_id = users.id
              JOIN categories on posts.category_id = categories.id
              WHERE 1 = 1 `;
  //检测有筛选状态,
  if(obj.cate && obj.cate !== 'all') {
    sql += ` and category_id = ${obj.cate}`;
  }
  if(obj.status && obj.status !== 'all') {
    sql += ` and posts.\`status\` = '${obj.status}'`;
  }
  //如无筛选状态,则是分页的默认数据
  sql += ` ORDER BY id DESC
          LIMIT ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`;
  conn.query(sql,(err,result) => {
    if(err) {
      callback(err);
    }else {
      //再执行一次查询总记录 -- 获取数字
      let sql = `SELECT COUNT(*) as ctn FROM posts`;
      conn.query(sql,(err2,result2) =>{
        if(err2) {
          callback(err2);
        }else {
          //把第一次的结果和第二次结果利用对象的方式返回
          callback(null,{data : result, total : result2[0].ctn});
        }
      })
    }
  })
}