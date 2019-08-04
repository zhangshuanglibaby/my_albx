//负责开接口,分发请求

//引入用户模块
const pagesController = require('./contorollers/pagesController');

const express = require('express');
const router = express.Router();

/*----------处理前台页面---------- */
//处理主页面
router.get('/index', pagesController.getIndexPage)
//处理详情页面
.get('/detail', pagesController.getDetailPage)
//处理列表页面
.get('/list', pagesController.getListPage)

/*-------------处理后台页面------------------ */
//处理主页面
.get('/admin/index',pagesController.getAdminIndexPage)
//处理目录页面
.get('/admin/categories',pagesController.getAdminCategoriesPage)
//处理评论页面
.get('/admin/comments',pagesController.getAdminCommentsPage)
//处理登录页面
.get('/admin/login',pagesController.getAdminLoginPage)
//处理导航菜单页面
.get('/admin/nav-menus',pagesController.getAdminNavMenusPage)
//处理修改密码页面
.get('/admin/password-reset',pagesController.getAdminPasswordResetPage)
//处理写文章页面
.get('/admin/post-add',pagesController.getAdminPostAddPage)
//处理所有文章页面
.get('/admin/posts',pagesController.getAdminPostsPage)
//处理我的个人资料页面
.get('/admin/profile',pagesController.getAdminProfilePage)
//处理网站设置页面
.get('/admin/settings',pagesController.getAdminSettingsPage)
//处理图片轮播页面
.get('/admin/slides',pagesController.getAdminSlidesPage)
//处理用户页面
.get('/admin/users',pagesController.getAdminUsersPage)

module.exports = router;