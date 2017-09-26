/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ICBC = new Schema({
	 instrId:String,//工商银行编号
	 instrName:String,//工商银行名称
	 address:String,
	 balance:{
	 	type:Number,
	    default:10000000000
	}
});

module.exports = mongoose.model('ICBC',ICBC);