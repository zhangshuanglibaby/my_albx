//这个页面完成所有与客户相关的业务操作


//引入用户模块
const userModel = require('../models/userModel');
exports.login = (req,res) => {
    userModel.login()
}