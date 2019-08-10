//处理分类数据的动态加载 --- 操作数据库
//引入数据库
const conn = require('../utils/myconn');

//获取所分类数据
exports.getAllCate = (callback) => {
  let sql = `SELECT * FROM categories`;
  conn.query(sql,(err,result) => {
    if(err) {
      callback(err);
    }else {
      callback(null,result);
    }
  })
};

//根据id编辑分类目录
exports.editCateById = (obj,callback) => {
  let sql = 'UPDATE categories set ? WHERE id = ? ' ;
  conn.query(sql,[obj,obj.id],(err) =>{
    if(err) {
      console.log(err);
      callback(err);
    }else {
      callback(null);
    }
  })
};

//添加分类
exports.addCate = (obj,callback) => {
  let sql ='insert into categories set ? ';
  conn.query(sql,obj,err => {
    if(err) {
      console.log(err);
      callback(err);
    }else {
      callback(null);
    }
  })
};

//删除分类
exports.delCateById = (id,callback) => {
  let sql = 'DELETE FROM categories WHERE id =' + id;
  conn.query(sql,err => {
    if(err) {
      console.log(err);
      callback(err);
    }else {
      callback(null);
    }
  })
};

//修改分类
exports.editCateById = (obj,callback) => {
  let sql = 'UPDATE categories set ? where id = ?';
  conn.query(sql,[obj,obj.id],err => {
    if(err) {
      console.log(err);
      callback(err);
    }else {
      callback(null);
    }
  })
};

//添加分类
exports.addCate = (obj,callback) => {
  let sql = 'INSERT INTO categories set ?';
  conn.query(sql,obj,err => {
    if(err) {
      console.log(err);
      callback(err);
    }else {
      callback(null);
    }
  })
}