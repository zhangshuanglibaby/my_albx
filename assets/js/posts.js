/*
    需要实现发送默认分页展现数据的请求
    实现点击分页数展现数据的请求
    分类数据的动态加载的请求
    点击数据筛选展现数据的请求
 */

 $(() => {
   $.ajax({
     type : 'get',
     url : '/getAllPost',
     //设置分页的参数
     data : {
       pageNum : 1,
       pageSize : 4
     },
     success : (res) => {
       console.log(res);
       if(res.code === 200) {
         //使用模板引擎
        let html =  template('temp',res.data);
        $('tbody').html(html);
       }
     }
   })
 })