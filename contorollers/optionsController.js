//这个模块负责设置的所有业务请求和返回结果

const optionsModel = require('../models/optionsModel');

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
}