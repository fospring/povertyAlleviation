/**
 * Created by QiuYongchun on 17/8/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharityAdmin = new Schema(
  {
  ChId: String,//慈善机构编号
  userId:String,//慈善机构管理员id
  username: String, //用户名
  address: String,  //地址
   updateAt:{
      type:Date,
      default:Date.now()
  }
});

module.exports = mongoose.model('CharityAdmin',CharityAdmin);