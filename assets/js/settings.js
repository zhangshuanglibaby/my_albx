$(() => {
  /**
   * 这里返回数据的数据利用模板引擎去添加
   */
  $.ajax({
    type : 'get',
    url : '/getSite',
    dataType : 'json',
    success : (res) => {
      if(res.code === 200) {
        // console.log(res);
        let html = template('siteListTemp',res);
        $('form').html(html);
      }
    }
  });


  //网站设置 -- 事件委托
  $('form').on('click','.btn-save',e => {
    e.preventDefault();
   let data = $('form').serialize();
    // console.log(data);
    $.ajax({
      type : 'post',
      url : '/setSite',
      data,
      dataType : 'json',
      success : (res) => {
        console.log(res);
        if(res.code === 200) {
          alert(res.msg);
        }else {
          $('.alert-danger').show(500);
          $('.alert-danger > span').text(res.msg);
        }
      }
    })
  });
})