/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConstructionAdmin = new Schema({
	  userId:String,//管理员Id
	  instrId:String,//施工单位编号
	  address:String//所在地址
});

module.exports = mongoose.model('ConstructionAdmin',ConstructionAdmin);