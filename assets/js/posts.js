$(() => {
//发送获取数据的ajax
  $.ajax({
    type : 'get',
    url : '/getAllPost',
    success : function(res) {
      console.log(res);
      if(res.code === 200) {
        //使用模板渲染方法
        let html = template('temp',res);
        $('tbody').html(html);
      }
    }
  })
})