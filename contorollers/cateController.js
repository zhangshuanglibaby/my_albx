//处理分类数据的动态加载并返回结果

//引入第三方模块
const cateModel = require('../models/cateModel');


//获取所有的分类
exports.getAllCate = (req,res) =>{
  //调用数据模块
  cateModel.getAllCate((err,result) => {
    if(err) {
      res.json({code : 400, msg : '查询不到数据'});
    }else {
      res.json({
        code : 200,
        msg : '成功查询到数据',
        data : result
      })
    }
  })
};

//编辑分类
exports.editCateById = (req,res) => {
  //接收参数
  let obj = req.body;
  //调用数据模块
  cateModel.editCateById(obj,err => {
    if(err) {
      res.json({code:400,msg:'分类编辑失败'});
    }else {
      res.json({code:200,msg:'分类编辑成功'});
    }
  })
};

//添加分类
exports.addCate = (req,res) => {
  //接收参数
  let obj = req.body;
  obj.id = null;
  //调用数据模块
  cateModel.addCate(obj,err => {
    if(err) {
      res.json({code:400,msg:'分类添加失败'});
    }else {
      res.json({code:200,msg:'分类添加成功'});
    }
  })
};

//删除分类
exports.delCateById = (req,res) => {
  //接收参数
  let id = req.query;
  //调用数据模块
  cateModel.delCateById(id,err => {
    if(err) {
      res.json({code:400,msg:"删除失败"});
    }else {
      res.json({code:200,msg:'删除成功'});
    }
  })
}



