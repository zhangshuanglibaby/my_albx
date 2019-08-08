/*
    需要实现发送默认分页展现数据的请求
    实现点击分页数展现数据的请求
    分类数据的动态加载的请求
    点击数据筛选展现数据的请求
 */

$(() => {
  let pageNum = 1;
  let pageSize = 2;
  function init(search) {
    $.ajax({
      type: 'get',
      url: '/getAllPost',
      //设置分页的参数
      data: {
        pageNum: pageNum,
        pageSize: pageSize,
        ...search
      },
      success: (res) => {
        console.log(res);
        if (res.code === 200) {
          //使用模板引擎
          let html = template('temp', res.data);
          $('tbody').html(html);
          //调用分页函数 总页数 = 总数据/每页可显示的数据
          setPage(Math.ceil(res.data.total / pageSize));
        }
      }
    })
  };
  init();

  //执行分页函数
  function setPage(total) {
    $('.pagination').bootstrapPaginator({
      //设置版本号
      bootstrapMajorVersion: 3,
      //显示第几页
      currentPage : pageNum,
      //总页数
      totalPages : total,
      //单击操作按钮时,实行该函数
      onPageClicked : (event,originalEvent,type,page) => {
        //page就是当前点击的页面
        pageNum = page;
        //重新调用加载数据的方法
        init();
      }
    })
  }

})