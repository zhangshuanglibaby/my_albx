/*
    需要实现发送默认分页展现数据的请求
    实现点击分页数展现数据的请求
    分类数据的动态加载的请求
    点击数据筛选展现数据的请求
 */

$(() => {
  let pageNum = 1;
  let pageSize = 1;
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
      dataType : 'json',
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
  };


  //分类数据的动态加载
  $.ajax({
    type : 'get',
    url : '/getAllCate',
    dataType : 'json',
    success : (res) => {
      console.log(res);
      let html = `<option value="all">所有状态</option>`;
      //遍历数组,动态生成结构
      res.data.forEach(e => {
        html += `<option value="${e.id}">${e.name}</option>`;
        $('.cateSelector').html(html);
      });
    }
  });


  //实现点击筛选展现数据的请求 --- 注册点击事件
  $('.btn-select').on('click',e => {
    e.preventDefault();
    //获取分类值和状态值 --- 利用对象方式存储
    let obj = {
      cate : $('.cateSelector').val(),
      status : $('.statusSelector').val()
    }
    //调用重新加载数据
    init(obj);
  })


})