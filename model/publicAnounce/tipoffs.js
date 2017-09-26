/**
 * Created by QiuYongchun on 17/8/26.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipOffs = new Schema({
   id:String,//对应申请人的id
   appId:String,//对应低保申请单号_id
   district: String,  //区
   county: String,  //县
   township: String,  //乡
   viliager:String,//村
   tipOffId:String,//举报人id
   phone:String,//举报人电话号码
   comment:String,
   stage:String,//”1”第一次公告期间，“2”第二次公告期间，“3”第三次公告期间
   handle:String,
   thisAdmin:String,
   thisAdminComment:String, 
   upperAdmin:String,
   upperAdminComment:String,
   cityAdmin:String,//市扶贫办管理员Id
   cityDicision:String,//"0",未处理，“1”通过至下一步（举报无效），“2”不通过
   investigate:Boolean,//是否发起调查，false不发起，true发起
});

module.exports = mongoose.model('TipOffs',TipOffs);