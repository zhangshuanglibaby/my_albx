
$(() => {
  /**
   * 需求
   * 分类目录页的分类数据动态加载请求
   * 分类目录页的分类数编辑
   * 分类目录页的分类添加请求
   * 分类目录的删除
   *  1.单条删除
   *  2.批量删除
   */

  //分类目录页的分类数据动态加载请求
  function init() {
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
  };
  init();


  //分类目录页的分类数编辑原始数据展现
  $('tbody').on('click', '.btn-edit', function () {
    let data = $(this).data();
    $('.col-md-4 h2').text('编辑分类目录');
    // console.log(data);
    $('#name').val(data.name);
    $('#slug').val(data.slug);
    $('#add').hide();
    $('#edit').show();
    //还需要设置id的隐藏域的值--后面编辑提交的时候需要用
    $('#id').val(data.id);
  });


  //分类目录页的分类数编辑提交
  $('#edit').on('click', e => {
    e.preventDefault();
    let data = $('form').serialize();
    // console.log(data); 
    $.ajax({
      type: 'post',
      url: '/editCateById',
      data,
      success: (res) => {
        // console.log(res);
        if (res.code === 200) {
          alert(res.msg);
          $('#name').val('');
          $('#slug').val('');
          $('#id').val('');
          $('#add').show();
          $('#edit').hide();
          init();
        } else {
          $('.alert-danger').show(500).delay(3000).hide(500);
          $('.alert-danger >span').text(res.msg);
        }
      }
    })
  });


  //分类目录页的分类添加
  $('#add').on('click', e => {
    e.preventDefault();
    let data = $('form').serialize();
    // console.log(data);
    $.ajax({
      type: 'post',
      url: '/addCate',
      data,
      success: (res) => {
        if (res.code === 200) {
          alert(res.msg);
          //添加完毕后把值设为空
          $('#name').val('');
          $('#slug').val('');
          init();
        } else {
          $('.alert-danger').show(500).delay(3000).hide(500);
          $('.alert-danger >span').text(res.msg);
        }
      }
    })
  });


//封装发送删除请求的ajax
function delInit(params) {
  $.ajax({
    type: 'get',
    url: '/delCateById',
    data : params,
    dataType: 'json',
    success: (res) => {
      if (res.code === 200) {
        alert('删除成功');
        //重新加载数据
        $('.btn-batchDel').hide(300);
        init();
      } else {
        $('.alert-danger').show(500);
        $('.alert-danger > span').text(res.msg);
      }
    }
  })
}


  //实现单条数据删除 -- 事件委托
  $('tbody').on('click', '.btn-del', function () {
    if (!confirm('确认删除吗?')) {
      return;
    }
    let id = $(this).data('id');
    delInit({id});
  });


  //分类目录的分类删除
  //实现全选
  $('.ckAll').click(function () {
    let status = $(this).prop('checked');
    $('.ckSingle').prop('checked', status);
    //显示批量删除字眼
    $('.btn-danger').fadeIn(200);
  });

  //实现单击复选框 -- 利用事件委托
  $('tbody').click('.ckSingle', function () {
    //用一个变量记录点击的复选框的数量
    let cnt = $('.ckSingle:checked').length;
    let length = $('tbody').children('tr').length;
    if (cnt > 1) {
      //则显示批量删除
      $('.btn-danger').fadeIn(200);
    }
    if (cnt === length) {
      //则代表全选了
      $('.ckAll').prop('checked', true);
    }
  });

  //实现批量删除
  $('.btn-batchDel').click(() => {
    if (!confirm('确认删除吗?')) {
      return;
    }
    let ckSingleList = $('.ckSingle:checked'); //伪数组
    // console.log(ckSingleList)
    //遍历循环获取id
    let ids = [];
    for (let i = 0; i < ckSingleList.length; i++) {
      ids.push(ckSingleList[i].dataset['id']);
    }
    ids = ids.join(',');
    delInit({id:ids});

  })











});