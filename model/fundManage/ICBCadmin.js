/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ICBCadmin = new Schema({
	 instrId:String,//工商银行编号
	 userId:String,//管理员Id
	 address:String
});

module.exports = mongoose.model('ICBCadmin',ICBCadmin);