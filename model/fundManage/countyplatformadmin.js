/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountyPlatformAdmin = new Schema({
	  userId:String,//县平台公司管理员Id
	  instrId:String,//县平台公司公司编号
	  county:String
});

module.exports = mongoose.model('CountyPlatformAdmin',CountyPlatformAdmin);