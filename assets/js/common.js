let path = {
  //获取路由名 -- 用于后台页面的
  getRouterName(str) {
    let params = str.indexOf('?');
    let routerName = '';
    if (params === -1) {
      //则是没有带参数的
      routerName = str.substring(str.lastIndexOf('/') + 1);
    } else {
      //则是有带参数的
      routerName = str.substring(str.lastIndexOf('/')+1, str.indexOf('?'));
    };
    return routerName;
  },

  //获取地址后面的id -- 用于前台页面的
  getUrlParams(url) {
    let search = url.substring(1).split('&');
    let temp = [];
    let params = {};
    //遍历数组
    search.forEach(e => {
      temp = e.split('=');
      let key = temp[0];
      let val = temp[1];
      params[key] = val;
    })
    return params;
  }
}