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
      console.log(res);
      let html = template('cateListTemp', res);
      $('tbody').html(html);
    }
  });


  //分类目录页的分类数编辑
  $('tbody').on('click','.btn-edit',function() {
    
  })








});