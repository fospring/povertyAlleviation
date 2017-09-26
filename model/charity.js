/**
 * Created by QiuYongchun on 17/8/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Charity = new Schema(
  {
  ChId: String,//慈善机构编号
  ChName: String, //慈善机构名称
  adress:String,//慈善机构地址
  balance: Number, //账户余额
   createAt:{
      type:Date,
      default:Date.now()
    }
});

module.exports = mongoose.model('Charity',Charity);