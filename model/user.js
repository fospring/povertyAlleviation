/**
 * Created by QiuYongchun on 17/8/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    userId:String,//身份证号或唯一标识符
    password: String,//密码
    role: String//角色
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',User);