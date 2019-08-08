//处理文章页面的请求和返回结果

const postsModel = require('../models/postsModel');

exports.getAllPost = (req, res) => {
  //接收请求的参数
  let obj = req.query;
  //调用数据模块
  postsModel.getAllPost(obj, (err, result) => {
    if (err) {
      res.json({
        code: 400,
        msg: '查询不到数据'
      });
    } else {
      res.json({
        code: 200,
        msg : '成功查询到数据',
        data : result
      })
    }
  })
}