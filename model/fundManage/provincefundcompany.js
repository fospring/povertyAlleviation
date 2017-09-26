/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProvinceFundCompany = new Schema({
	  instrId:String,//省基金管理公司编号
	  instrName:String,//省基金管理公司名称
	  address:String,//所在地址
	  balance:{
	 	type:Number,
	    default:5000000000
	  }
});

module.exports = mongoose.model('ProvinceFundCompany',ProvinceFundCompany);