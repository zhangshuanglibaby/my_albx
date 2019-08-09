//负责上传文件的请求和返回结果
//使用formidable模块来实现文件上传
const formidable = require('formidable');
const path = require('path');

exports.uploadFile = (req, res) => {
  //1.创建文件上传对象
  let form = new formidable.IncomingForm();
  //2.配置编码
  form.encoding = 'utf-8';
  //3.配置文件存储目录
  form.uploadDir = __dirname + '/../uploads';
  //4配置是否保留扩展名
  form.keepExtensions = true;
  //5.调用方法实现上传
  form.parse(req,(err,fields,files) => {
    //返回图片路径和图片名称
    // console.log(files);
    //获取图片名称 --- 利用path模块
    fileName = path.basename(files.pic.path);
    if(err) {
      console.log(err);
      res.json({code:400,msg:'上传失败'});
    }else {
      res.json({
        code : 200,
        msg : '上传成功',
        fileName
      })
    }
  })
}