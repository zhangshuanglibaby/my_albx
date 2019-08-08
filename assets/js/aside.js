$(() => {
  //实现导航菜单合理的展开和合并
  //通过判断路由的名称 --- 设置类名和属性
  //获取路由名称 --- 要检测是否有带参数的
  //获取元素
  let menuPosts = $('#menu-posts');
  let menuSettings = $('#menu-settings');
  //调用获取路由名称的方法
  let routerName = path.getRouterName(location.href);
  //检测文章部分
  if(routerName === 'posts' || routerName === 'post-add' || routerName === 'categories') {
    //设置ul的属性
    menuPosts.addClass('in').attr('aria-expanded',true);
    //设置箭头
    menuPosts.siblings('a').removeClass('collapsed').attr('aria-expanded',true);
  };

  //检测设置部分
  if(routerName === 'nav-menus' || routerName === 'slides' || routerName === 'settings') {
    //设置ul的属性
    menuSettings.addClass('in').attr('aria-expanded',true);
    //设置箭头
    menuSettings.siblings('a').removeClass('collapsed').attr('aria-expanded',true);
  };

  //设置高亮
  $('#' + routerName).addClass('active');
  
})