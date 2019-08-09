/**
 * 实现图片上传请求
 * 分类动态数据加载请求
 * 使用富文本框
 * 添加文章成功
 */

$(() => {
  //图片上传请求 --- 要在点击按钮后就实现
  $('#feature').on('change',function() {
    //获取当前文件数据
    let file = this.files[0];
    //把文件转成文件流
    let fd = new FormData();
    fd.append('pic',file);
    //发送ajax
    $.ajax({
      type : 'post',
      url : '/uploadFile',
      data : fd,
      contentType : false,
      processData : false,
      dataType : 'json',
      success : (res) => {
        // console.log(res);
        if(res.code === 200) {
          //更改图片路径
          $('.thumbnail').attr('src','../../uploads/' + res.fileName);
          //实现预览
          $('.thumbnail').show();
          //要更改图片隐藏域的值--用于后面提交要收集信息
          $('#featureSrc').val(res.fileName);
        }else {
          $('.alert-danger').show(500).delay(3000).hide(500);
          $('.alert-danger>span').text(res.msg);
        }
      }
    })
  });


  //分类动态数据加载
  $.ajax({
    type : 'get',
    url : '/getAllCate',
    dataType : 'json',
    success : (res) => {
      // console.log(res);
      if(res.code === 200) {
        let html = '';
        res.data.forEach(e => {
          html +=` <option value="${e.id}">${e.name}</option>`;
          $('#category').html(html);
        });
      }
    }
  });


  //使用富文本框替换文本域
  CKEDITOR.replace('content');

  //添加文章请求
  $('.btn-save').on('click',e => {
    e.preventDefault();
    //富文本框和文本域同步
    CKEDITOR.instances.content.updateElement();
    //收集数据
    let data = $('.row').serialize();
    //发送ajax
    $.ajax({
      type : 'post',
      url : '/addPost',
      data,
      dataType :'json',
      success : (res) => {
        // console.log(res);
        if(res.code === 200) {
          location.href = '/admin/posts';
        }else {
          alert(res.msg);
        }
      }
    })
  })
  
})