$(() => {
  /**
   * 需求
   * 分类目录页的分类数据动态加载请求
   * 分类目录页的分类数编辑
   * 分类目录页的分类添加请求
   */

  //分类目录页的分类数据动态加载请求
  $.ajax({
    type: 'get',
    url: '/getAllCate',
    dataType: 'json',
    success: (res) => {
      // console.log(res);
      let html = template('cateListTemp', res);
      $('tbody').html(html);
    }
  });


  //分类目录页的分类数编辑原始数据展现
  $('tbody').on('click','.btn-edit',function() {
    let data = $(this).data();
    // console.log(data);
    $('#name').val(data.name);
    $('#slug').val(data.slug);
    $('#add').hide();
    $('#edit').show();
    //还需要设置id的隐藏域的值--后面编辑提交的时候需要用
    $('#id').val(data.id);
  });


  //分类目录页的分类数编辑提交
  $('#edit').on('click',e =>{
    e.preventDefault();
    let data = $('form').serialize();
    // console.log(data); 
    $.ajax({
      type : 'post',
      url : '/editCateById',
      data,
      success :(res) =>{
        // console.log(res);
        if(res.code === 200) {
          alert(res.msg);
        }else {
          $('.alert-danger').show(500).delay(3000).hide(500);
          $('.alert-danger >span').text(res.msg);
        }
      }
    })
  });

  //分类目录页的分类添加
  $('#add').on('click',e => {
    e.preventDefault();
    let data = $('form').serialize();
    // console.log(data);
    $.ajax({
      type : 'post',
      url : '/addCate',
      data,
      success : (res) => {
        if(res.code === 200) {
          alert(res.msg);
        }else {
          $('.alert-danger').show(500).delay(3000).hide(500);
          $('.alert-danger >span').text(res.msg);
        }
      }
    })
  })








});