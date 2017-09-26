/**
 * Created by QiuYongchun on 17/8/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharityLaunchDonation = new Schema(
  {
	  chId: String,//慈善机构编号
	  userId: String, //进行处理的慈善机构管理员Id
	  appUserId:String, //受捐赠人员Id
	  id:String,//对应申请单编号
	  ciId:String,
	  reason:String,//原因
	  comment:String,//评论
	  amount: Number, //捐赠金额  
	  status:String,//捐赠状态，1表示刚发放；2选择接受；3确认接受；4举报；5民政局处理举报
	  sendStatus:String,//是否发送给民政局，1否，2是
	  donateTransId:String,//慈善机构捐赠区块链查询码
	    createAt:{
	      type:Date,
	      default:Date.now()
	    }
});

module.exports = mongoose.model('CharityLaunchDonation',CharityLaunchDonation);