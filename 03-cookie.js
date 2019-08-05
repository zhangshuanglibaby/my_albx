/**
 * cookie基本特性
 *  1.只能存储字符串
 *  2.存储的大小有限制 ：2k左右
 *  3.存储在客户端,所以容易被劫持,不安全
 * 
 */
const queryString = require('querystring');
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('请访问http://127.0.0.1:3000');
});
app.get('/', (req, res) => {
  //判断是否有登录状态
  //2.获取之前可能存储的登录状态  返回值是islogin=true
  let mycookie = queryString.parse(req.headers.cookie);
  //利用querystring模块可以把键=值的格式转成对象
  //检测状态了
  if (mycookie.islogin && mycookie.islogin === 'true') {
    res.end('welcome back');
  } else {
    //如果第一次访问 ,显示:frist come
    //如果有登录状态,显示: welcome back
    //1.存储cookit数据,通过响应头的方式写入cookit
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8',
      'Set-Cookie': 'islogin=true'
    });
    res.end('frist come');
  }










})