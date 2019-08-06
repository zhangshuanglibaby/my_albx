$('.btnLogin').on('click',() => {
  //获取数据
  let data = $('.login-wrap').serialize();
  // console.log(data);
  //发送ajax
  $.ajax({
    type : 'post',
    url : '/loginCheck',
    data,
    dataType : 'json',
    success : (res) => {
      console.log(res);
      if(res.code === 400) {
        //弹出错误信息框
        $('.alert-danger').show(200).delay(2000).hide(500);
        $('.alert-danger>span').text(res.msg);
      }else {
        //正确则跳转页面
        location.href = '/admin/index';
      }
    }
  })
})