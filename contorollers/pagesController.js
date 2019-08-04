//这个页面用于返回用户所请求的页面 - 分为前台页面和后台页面



/*--------------处理前台页面---------------- */

//处理主页面请求
exports.getIndexPage = (req, res) => {
  //渲染页面
  res.render('index');
};

//处理详情页面的请求
exports.getDetailPage = (req,res) => {
  res.render('detail');
};

//处理列表页面的请求
exports.getListPage = (req,res) => {
  res.render('list');
}

/*---------------------处理后台页面---------------------- */
//约定好后台页面请求都添加/admin

//处理主页面
exports.getAdminIndexPage = (req,res) => {
  res.render('admin/index');
}