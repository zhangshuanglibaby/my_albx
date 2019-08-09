//负责文件上传的请求

const formidable = require('formidable');
const path = require('path');

exports.uploadFile = (req, res) => {
  //利用formidable模块实现文件上传
  //创建对象
  let form = new formidable.IncomingForm();
  //设置表单域的编码
  form.encoding = 'utf-8';
  //设置上传文件存放的文件夹 --- 注意这个文件当前的位置
  form.uploadDir = __dirname + '/../uploads';
  //设置扩展名
  form.keepExtensions = true;
  //执行转换方法 -- 会转换请求中所包含的表单域数据
  form.parse(req,(err,fields,files) => {
    if(err) {
      res.json({code:400,msg:'上传失败'});
    }else {
      //获取文件名
      let fileName = path.basename(files.img.path)
      
      res.json({code:200,msg:'上传成功',img:fileName}); 
    }
    
  })

}