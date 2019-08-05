
//引入第三方模块
const router = require('./02-router');
const bodyParser = require('body-parser');
const session = require('express-session');
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

//注册body-parser中间件
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//注册session中间件
app.use(session({
  //加盐
  secret : 'my_albx', //加密钥匙
  resave : false,
  saveUninitialized : false
}));

//设置导航守卫 --- 所有的请求都会经过这个中间件
app.use((req,res,next) => {
  //有三个页面是不需要登录的
  //1.登录页面
  //2.前台的三个页面
  //3.有登录状态
  if(req.url === '/admin/login' || req.url.indexOf('/admin') === -1 || req.session.isLogin && req.session.isLogin === 'true') {
    //下一步
    next();
  }else {
    //都重置路径
    res.redirect('/admin/login');
  }
});


//注册路由配置
app.use(router);