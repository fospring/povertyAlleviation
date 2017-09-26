/**
 * Created by QiuYongchun on 17/8/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BaseInformation = new Schema({
  userId:String,//身份证号或唯一标识符 ******
  username:String,//用户名 *******
  account:String,//账户
  balance:Number,//账户余额
  integrityPoints: Number,//诚信积分
  verifyCode:String//验证码
})

module.exports = mongoose.model('BaseInformation',BaseInformation);