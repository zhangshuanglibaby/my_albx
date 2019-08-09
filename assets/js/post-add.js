$('#feature').on('change', function () {
  //获取当前的文件数据
  let file = this.files[0];
  //利用FormData把文件转成文件流
  let fd = new FormData();
  fd.append('img', file);
  //发送ajax
  $.ajax({
    type : 'post',
    url : '/uploadFile',
    data  :fd,
    contentType : false,
    processData : false,
    dataType : 'json',
    success : (res) => {
      console.log(res);
      //实现预览功能
      if(res.code === 200) {
        $('.thumbnail').attr('src','../../uploads/' + res.img).show();
      }else {
        $('.alert-danger').show(500).delay(3000).hide(500);
        $('.alert-danger>span').text(res.msg);
      }
    }
  })  
})