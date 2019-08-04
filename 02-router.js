//负责开接口,分发请求

//引入用户模块
const pagesController = require('./contorollers/pagesController');

const express = require('express');
const router = express.Router();

/*----------处理前台页面---------- */
//处理主页面
router.get('/index',pagesController.getIndexPage);

//处理详情页面
router.get('/detail',pagesController.getDetailPage);

//处理列表页面
router.get('/list',pagesController.getListPage);


/*-------------处理后台页面------------------ */







module.exports = router;