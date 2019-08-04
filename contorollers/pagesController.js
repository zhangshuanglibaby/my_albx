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
};

/*---------------------处理后台页面---------------------- */
//约定好后台页面请求都添加/admin

//处理主页面
exports.getAdminIndexPage = (req,res) => {
  res.render('admin/index');
};

//处理目录页面
exports.getAdminCategoriesPage = (req,res) => {
  res.render('admin/categories');
};

//处理评论页面
exports.getAdminCommentsPage = (req,res) => {
  res.render('admin/comments');
};

//处理登录页面
exports.getAdminLoginPage = (req,res) => {
  res.render('admin/login');
};

//处理导航菜单页面
exports.getAdminNavMenusPage = (req,res) => {
  res.render('admin/nav-menus');
};

//处理修改密码页面
exports.getAdminPasswordResetPage = (req,res) => {
  res.render('admin/password-reset');
};

//处理写文章页面
exports.getAdminPostAddPage = (req,res) => {
  res.render('admin/post-add');
};

//处理所有文章页面
exports.getAdminPostsPage = (req,res) => {
  res.render('admin/posts');
};

//处理我的个人资料页面
exports.getAdminProfilePage = (req,res) => {
  res.render('admin/profile');
};

//处理网站设置页面
exports.getAdminSettingsPage = (req,res) => {
  res.render('admin/settings');
};

//处理图片轮播页面
exports.getAdminSlidesPage = (req,res) => {
  res.render('admin/slides');
};

//处理用户页面
exports.getAdminUsersPage = (req,res) => {
  res.render('admin/users');
}