//处理分类数据的动态加载并返回结果

//引入第三方模块
const cateModel = require('../models/cateModel');

exports.getAllCate = (req, res) => {
  cateModel.getAllCate((err, result) => {
    if (err) {
      res.json({code:400,msg:'查询数据失败'});
    }else {
      res.json({
        code:200,
        msg:'查询数据成功',
        data : result
      })
    }
  })
}