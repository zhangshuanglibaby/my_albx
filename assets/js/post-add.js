/**
 * 实现图片上传请求
 * 分类动态数据加载请求
 * 使用富文本框
 * 添加文章成功
 */

$(() => {
  //图片上传请求 --- 要在点击按钮后就实现
  $('#feature').on('change', function () {
    //获取当前文件数据
    let file = this.files[0];
    //把文件转成文件流
    let fd = new FormData();
    fd.append('pic', file);
    //发送ajax
    $.ajax({
      type: 'post',
      url: '/uploadFile',
      data: fd,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: (res) => {
        // console.log(res);
        if (res.code === 200) {
          //更改图片路径
          $('.thumbnail').attr('src', '../../uploads/' + res.fileName);
          //实现预览
          $('.thumbnail').show();
          //要更改图片隐藏域的值--用于后面提交要收集信息
          $('#featureSrc').val(res.fileName);
        } else {
          $('.alert-danger').show(500).delay(3000).hide(500);
          $('.alert-danger>span').text(res.msg);
        }
      }
    })
  });


  //分类动态数据加载
  $.ajax({
    type: 'get',
    url: '/getAllCate',
    dataType: 'json',
    success: (res) => {
      // console.log(res);
      if (res.code === 200) {
        let html = '';
        res.data.forEach(e => {
          html += ` <option value="${e.id}">${e.name}</option>`;
          $('#category').html(html);
        });
      }
    }
  });


  //使用富文本框替换文本域
  CKEDITOR.replace('content');


  /**
   * 需求: 实现编辑操作
   *1.跳转到编辑页面,根据id,发送请求获取原始数据
    2.点击编辑完成,发送请求编辑成功
    编辑和添加流程一样,区别在于编辑是带有参数的
   */



  //实现文章的编辑数据显示
  let id = path.getUrlParams(location.search).id;
  // console.log(id);
  if (id) {
    $.ajax({
      type: 'get',
      url: '/getPostById?id=' + id,
      success: (res) => {
        console.log(res);
        $('#title').val(res.data.title);
        $('#content').val(res.data.content);
        $('#slug').val(res.data.slug);
        $('.thumbnail').attr('src', '../../uploads/' + res.data.feature).show();
        $('#status').val(res.data.status);
        $('#created').val(res.data.created);
        //编辑的时候,也是设置隐藏域,后面提交的时候需要
        $('#featureSrc').val(res.data.feature);
        $('#id').val(res.data.id);
      }
    });
  };

  //封装ajax
  function opt(url) {
    //收集数据
    let data = $('.row').serialize();
    //发送ajax
    $.ajax({
      type: 'post',
      url: url,
      data,
      dataType: 'json',
      success: (res) => {
        // console.log(res);
        if (res.code === 200) {
          alert(res.msg);
          location.href = '/admin/posts';
        } else {
          alert(res.msg);
        }
      }
    })
  }

  //添加/编辑文章请求
  $('.btn-save').on('click', e => {
    e.preventDefault();
    //富文本框和文本域同步
    CKEDITOR.instances.content.updateElement();
    //文章的编辑和文章的添加是一样的 -- 区别在于参数
    if (id) {
      opt('/editPostById');
    } else {
      opt('/addPost');
    }
  });









})