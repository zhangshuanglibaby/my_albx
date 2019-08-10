//处理文章页面的请求和返回结果

const postsModel = require('../models/postsModel');
const moment = require('moment');


//处理获取所有文章数据
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
};

//处理添加文章请求
exports.addPost = (req,res) => {
  //接受请求的数据
  let data = req.body;
  //设置浏览数,点赞数,用户的id -- 要根据数据库的名称
  data.views = 0;
  data.likes = 0;
  data.id = null;
  data.user_id = req.session.currentUser.id;
  // console.log(data);
  //调用数据模块
  postsModel.addPost(data,err => {
    if(err) {
      res.json({code : 400, msg : '添加文章失败'});
    }else {
      res.json({code : 200,msg : '添加文章成功'});
    }
  }) 

};

//处理编辑时根据id返回原始数据
exports.getPostById = (req,res) => {
  //接收参数
  let id = req.query.id;
  //调用数据模块
  postsModel.getPostById(id,(err,result) => {
    if(err) {
      res.json({code:400,msg:'查询失败'});
    }else {
      //转化格式时间
      result.created = moment(result.created).format('YYYY-MM-DDTHH:mm')
      res.json({code:200,msg:'查询成功',data:result});
    }
  })

};

//处理编辑文章请求
exports.editPostById = (req,res) => {
  //接收参数
  let obj = req.body;
  //调用数据模块
  postsModel.editPostById(obj,err => {
    if(err) {
      res.json({code:400,msg:'编辑文章失败'});
    }else {
      res.json({code:200,msg:'编辑文章成功'});
    }
  })
};

//处理删除文章请求
exports.delPostById = (req,res) => {
  //获取参数
  let id = req.query.id;
  //调用数据模块
  postsModel.delPostById(id,err => {
    if(err) {
      res.json({code:400,msg:'删除失败'});
    }else {
      res.json({code:200,msg:'删除成功'});
    }
  })
}



