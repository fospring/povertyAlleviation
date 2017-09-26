/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProvinceFundAdmin = new Schema({
	  userId:String,//省基金管理公司管理员Id
	  instrId:String,//所在省基金管理公司编号
	  address:String//所在地址
});

module.exports = mongoose.model('ProvinceFundAdmin',ProvinceFundAdmin);