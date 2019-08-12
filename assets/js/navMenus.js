$(() => {

  //动态生成导航菜单数
  $.ajax({
    type : 'get',
    url : '/getAllMenu',
    dataType :'json',
    success : (res) =>{
      console.log(res);
      if(res.code === 200) {
        let html = template('navMenusTemp',res);
        $('tbody').html(html);
      }
    }
  })











  $('.btn-add').on('click',e => {
    e.preventDefault();
    //收集数据
    let data = $('form').serialize();
    $.ajax({
      type : 'post',
      url : '/addNewMenu',
      data,
      dataType : 'json',
      success :(res) => {
        // console.log(res);
        if(res.code === 200) {
          alert(res.msg);
          $('#text').val('');
          $('#title').val('');
          $('#href').val('');
        }else  {
          $('.alert-danger').show(500);
          $('.alert-danger > span').text(res.msg);
        } 
      }
    })
  });
})