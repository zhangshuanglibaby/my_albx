//这个页面完成所有与客户相关的业务操

const userModel = require('../models/userModel');

exports.loginCheck = (req,res) => {
  //接收邮箱和密码
  let data = req.body;
  // console.log(data);
  //调用获取数据库邮箱的方法
  userModel.getDataByEmail(data.email,(err,result) => {
    if(err) {
      //返回报错结果
      res.json({code:400,msg:'服务器异常'});
    }else {
      //服务器正常,检测邮箱
      if(result) {
        //再进行密码匹配验证
        if(data.password === result.password) {
          //登录成功,设置状态保持
          req.session.isLogin = 'true';
          req.session.currentUser = result;
          //返回结果
          res.json({code:200,msg:'登录成功'});
        }else {
          //返回结果
          res.json({code:400,msg:'密码错误'});
        }
      }else {
        //返回结果
        res.json({code:400,msg:'用户名错误'});
      }
    }
  })
}