/**
 * Created by QiuYongchun on 17/9/1.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DigitalBill = new Schema({
	 issueId:String,//发行方Id
	 projectId:String,
	 userId:String,//操作人员Id
	 handleId:String,//
	 money:Number,//总金额
	 toAccount:String,//最终到账机构Id
	 currentlyBelong:String,//当前所属机构
	 payRate:String,//已经支付的比例
	 planPath1:String,//计划路径1
	 planPath2:String,//计划路径2
	 planPath3:String,//计划路径3
	 actualPath1:String,//实际路径1
	 actualPath2:String,//实际路径2
	 actualPath3:String,//实际路径3
	 currentAccount:String,
	 finalAccount:String,
	 agree1:String,//认证1
	 agree2:String,//认证2
	 agree3:String//认证3
});

module.exports = mongoose.model('DigitalBill',DigitalBill);