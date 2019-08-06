//处理文章页面的请求和返回结果

const postsModel = require('../models/postsModel');

exports.getAllPost = (req,res) => {
  //获取请求的数据
  let obj = req.query;
  //调用模块数据
  postsModel.getAllPost(obj,(err,result) => {
    //返回结果
    if(err) {
      res.json({code:400,msg:'查询不到数据'});
    }else {
      res.json({code:200,msg:'查询到数据',data:result});
    }
  })
}