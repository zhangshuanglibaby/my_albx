//这个页面负责处理数据
/**
 * 要查询获取全部数据
 * 要查询筛选的数据
 * 要查count关键词获取总数据 -- 数字
 * 增加数据 -- insert into 利用?占位符
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
  let cateSql = ` and category_id = ${obj.cate}`;
  let statusSql = ` and posts.\`status\` = '${obj.status}'`;
  //检测有筛选状态,
  if(obj.cate && obj.cate !== 'all') {
    sql += cateSql;
  }
  if(obj.status && obj.status !== 'all') {
    sql += statusSql;
  }
  //如无筛选状态,则是分页的默认数据
  sql += ` ORDER BY id DESC
          LIMIT ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`;
  conn.query(sql,(err,result) => {
    if(err) {
      callback(err);
    }else {
      //再执行一次查询总记录 -- 获取数字
      let sql = `SELECT COUNT(*) as ctn FROM posts
                JOIN users on posts.user_id = users.id
                JOIN categories on posts.category_id = categories.id
                where 1 = 1 `;
      //也要判断筛选后的总页数
      if(obj.cate && obj.cate !== 'all') {
        sql += cateSql;
      }
      if(obj.status && obj.status !== 'all') {
        sql += statusSql;
      }
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
};


//添加文章数据
exports.addPost = (data,callback) => {
  //参数是请求的数据--由于请求的数据不会带有用户的id,浏览数,点赞数
  //需要在前面手动设置 --- 用户的id根据session来获取
  // let sql = `insert into posts values(null,'${data.slug}','${data.title}',
  // '${data.feature}','${data.created}','${data.content}','${data.views}',
  // '${data.likes}','${data.status}', '${data.user_id}','${data.category_id}')`;
  let sql = `insert into posts set ?`
  conn.query(sql,data,(err,result) => {
    if(err) {
      console.log(err);
      callback(err);
    }else {
      callback(null);
    }
  })
};

//根据id获取文章数据
exports.getPostById = (id,callback) => {
  let sql = 'SELECT * FROM posts WHERE id =' + id;
  conn.query(sql,(err,result) => {
    if(err) {
      console.log(err);
      callback(err);
    }else {
      callback(null,result[0]);
    }
  })
};

//编辑文章数据
exports.editPostById = (obj,callback) => {
  let sql = 'UPDATE posts set ? where id = ?';
  conn.query(sql,[obj,obj.id],err => {
    if(err) {
      console.log(err);
      callback(err);
    }else {
      callback(null);
    }
  })
};

//删除文章数据
exports.delPostById = (id,callback) => {
  let sql = 'DELETE FROM posts WHERE id =' + id;
  conn.query(sql,err => {
    if(err) {
      console.log(err);
      callback(err);
    }else {
      callback(null);
    }
  })

}








