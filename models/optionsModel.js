//这个模块负责设置的所有数据操作


const conn = require('../utils/myconn');
/**
 * 由于设置这块的数据操作都是在同一页的
 * 新增导航菜单实际上是修改这一页id是9的数据内容
 * 
 * 思路是
 * 1.先查询原始数据
 * 2.把原始数据转成数组
 * 3.把接收的参数放到数组里面
 * 4.把数组转成字符串
 * 5.把字符串重新存进数据库
 */

exports.addNewMenu = (data,callback) => {
  let sql = 'select value from `options` where id = 9'; 
  conn.query(sql,(err,result) => {
    if(err) {
      callback(err);
    }else {
      let arr = JSON.parse(result[0].value);
      arr.push(data);
      let jsonStr = JSON.stringify(arr);
      let sql = 'UPDATE `options` set `value` = ? where id = 9';
      conn.query(sql,[jsonStr],err1 => {
        if(err1) {
          console.log(err1);
          callback(err1);
        }else {
          callback(null);
        }
      })
    }
  })
}