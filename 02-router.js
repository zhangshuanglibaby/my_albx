//负责开接口,分发请求

//引入用户模块
const pagesController = require('./contorollers/pagesController');
const userController = require('./contorollers/userController');
const postsController = require('./contorollers/postsController');
const cateController = require('./contorollers/cateController');
const uploadController = require('./contorollers/uploadController');
const optionsController = require('./contorollers/optionsController');

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

/*-------------处理后台业务流程------------------ */

//处理验证登录接口 -- post
.post('/loginCheck',userController.loginCheck)
//处理文件上传接口 -- post
.post('/uploadFile',uploadController.uploadFile)


//处理文章数据的动态加载
.get('/getAllPost',postsController.getAllPost)
//处理添加文章接口 - post
.post('/addPost',postsController.addPost)
//处理根据id获取文章的数据
.get('/getPostById',postsController.getPostById)
//处理分类目录里的根据id编辑文章
.post('/editPostById',postsController.editPostById)
//处理文章数据的删除
.get('/delPostById',postsController.delPostById)


//处理分类数据的动态加载
.get('/getAllCate',cateController.getAllCate)
//处理分类目录编辑分类
.post('/editCateById',cateController.editCateById)
//处理分类目录里的添加分类
.post('/addCate',cateController.addCate)
//处理分类目录的删除分类
.get('/delCateById',cateController.delCateById)


//处理设置操作的导航菜单的添加
.post('/addNewMenu',optionsController.addNewMenu)
//处理获取导航菜单的数据
.get('/getAllMenu',optionsController.getAllMenu)
//处理设置操作的网站设置的原始数据返回
.get('/getSite',optionsController.getSite)
//处理设置操作的保存
.post('/setSite',optionsController.setSite)




module.exports = router;