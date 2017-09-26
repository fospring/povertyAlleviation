/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChaincodeAdmin = new Schema({
	  instrId:String,//省基金管理公司编号 
	  userId:String,//管理员Id
	  address:String//所在地址
});

module.exports = mongoose.model('ChaincodeAdmin',ChaincodeAdmin);