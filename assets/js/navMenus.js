$(() => {

  //动态生成导航菜单数
  function init() {
    $.ajax({
      type : 'get',
      url : '/getAllMenu',
      dataType :'json',
      success : (res) =>{
        // console.log(res);
        if(res.code === 200) {
          let html = template('navMenusTemp',res);
          $('tbody').html(html);
        }
      }
    })
  };
  init();
  

//添加导航菜单
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
          init();
        }else  {
          $('.alert-danger').show(500);
          $('.alert-danger > span').text(res.msg);
        } 
      }
    })
  });

//删除导航菜单 -- 利用事件委托
$('tbody').on('click','.btn-del',function() {
  if(!confirm('确认删除吗?')) {
    return;
  }
  let index = $(this).data('index');
  //发送ajax
  $.ajax({
    type : 'get',
    url : '/delMenuByIndex?index=' + index,
    dataType :'json',
    success : (res) =>{
      // console.log(res);
      if(res.code === 200) {
        alert(res.msg);
        init();
      }
    }
  })
})

})