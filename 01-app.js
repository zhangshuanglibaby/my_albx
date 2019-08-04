
//引入用户模块
const router = require('./02-router');
//搭建服务器
const express = require('express');
const app = express();
app.listen(8080, () => {
  console.log('the server is running http://127.0.0.1:8080');
});

//注册托管静态资源中间件
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

//配置ejs模板引擎
app.set('view engine','ejs');

//设置ejs模板文件查询的默认目录配置
app.set('views',__dirname + '/views');


//注册路由配置
app.use(router);