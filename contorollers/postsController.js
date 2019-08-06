//处理文章页面的请求和返回结果

const postsModel = require('../models/postsModel');
const moment = require('moment');
exports.getAllPost = (req,res) => {
  //获取请求的数据
  let obj = req.query;
  //调用模块数据
  postsModel.getAllPost(obj,(err,result) => {
    //返回结果
    if(err) {
      res.json({code:400,msg:'查询不到数据'});
    }else {
      //转换时间格式
      for(let i = 0; i < result.length; i++) {
        //moment()不给参数则获取的是当前的时间
        result[i].created = moment(result[i].created).format('YYYY-MM-DD HH:mm:ss');
      }
      res.json({code:200,msg:'查询到数据',data:result});
    }
  })
}