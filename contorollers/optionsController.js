//这个模块负责设置的所有业务请求和返回结果

const optionsModel = require('../models/optionsModel');


//处理设置操作的添加导航菜单
exports.addNewMenu = (req, res) => {
  //接收参数
  let data = req.body;
  data.icon = 'fa fa-gift';
  //调用数据模块
  optionsModel.addNewMenu(data,(err) => {
    if(err) {
      res.json({code:400,msg:'添加失败'});
    }else {
      res.json({code:200,msg:'添加成功'});
    }
  });
};


//处理获取所有导航菜单数据
exports.getAllMenu = (req,res) => {
  //调用数据模块
  optionsModel.getAllMenu((err,result) => {
    if(err) {
      console.log(err);
      res.json({code:400,msg:'数据查询失败'});
    }else {
      let data = JSON.parse(result);
      res.json({code:200,msg:'数据查询成功',data});
    }
  })
}




//处理设置操作的返回网站数据
exports.getSite = (req,res) =>{
  //调用数据模块
  optionsModel.getSite((err,result) => {
    if(err) {
      res.json({code:400,msg:'查询数据失败'});
    }else {
      res.json({code:200,msg:'查询数据成功',data:result});
    }
  })
};


//处理设置操作的网站设置
exports.setSite = (req,res) => {
  //获取参数
  let data = req.body;
  
  //由于复选框显示的结果是on,需要对它特别的设置
  if(data.comment_status) {
    data.comment_status = 1;
  }else {
    data.comment_status = 0;
  }

  if(data.comment_reviewed) {
    data.comment_reviewed = 1;
  }else {
    data.comment_reviewed = 0;
  }
  //调用数据模块
  optionsModel.setSite(data,err => {
    if(err) {
      res.json({code:400,msg:'网站设置失败'});
    }else {
      res.json({code:200,msg:'网站设置成功'});
    }
  })
};