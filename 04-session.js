/**
 * session的特性
 *  1.它能存储任意类型的数据
 *  2.它的存储大小理论上没有限制
 *  3.他是存储在服务端的,相对更安全
 */

const session = require('express-session');
const express = require('express');
const app = express();
app.listen(3001, () => {
    console.log('请访问 http://127.0.0.1:3001');
});

//添加session中间件
app.use(session({
    //加盐
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false //强制没有初始化的session保存到stroage里面
}));

app.get('/', (req, res) => {
    // console.log(req.session);  //返回的是一个对象
    // res.end();
    if (req.session.islogin) {
        res.end('welcome back')
    } else {
        req.session.islogin = 'true';
        req.session.currentUser = {
            name: 'jack',
            age: 12
        };
        console.log(req.session);
        res.end('frist come');
    }

})