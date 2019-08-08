let path = {
  getRouterName(str) {
    let params = str.indexOf('?');
    let routerName = '';
    if (params === -1) {
      //则是没有带参数的
      routerName = str.substring(str.lastIndexOf('/') + 1);
    } else {
      //则是有带参数的
      routerName = str.substring(str.lastIndexOf('/'), str.indexOf('?'));
    };
    return routerName;
  }
}