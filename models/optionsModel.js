//这个模块负责设置的所有数据操作


const conn = require('../utils/myconn');

/**添加导航菜单
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
};

//获取导航菜单的所有数据
exports.getAllMenu = (callback => {
  let sql = 'SELECT value from `options` WHERE id = 9';
  conn.query(sql,(err,result) => {
    if(err) {
      console.log(err);
      callback(err);
    }else {
      callback(null,result[0].value);
    }
  })
})


//返回网站数据
exports.getSite = (callback) =>{
  let sql = 'SELECT value FROM `options`';
  conn.query(sql,(err,result) =>{
    if(err) {
      console.log(err);
      callback(err);
    }else {
      callback(null,result);
    }
  })
};

//编辑网站设置
exports.setSite = (data,callback) => {
   //用于记录循环到的次数
   let cnt = 0;
  //由于不确定修改了哪些值,可以利用遍历对象的方法
  for(var key in data) {
    let sql = 'UPDATE `options` set value = ? WHERE `key` = ?'
    conn.query(sql,[data[key],key],err => {
      if(err) {
        console.log(err);
        callback(err);
        //如果一旦有错误,既可以马上停止循环
        return;
      }else {
        cnt++;
        //循环到最后一个才返回结果值
        if(cnt === 6) {
          callback(null);
        } 
      }
    })
  }
};