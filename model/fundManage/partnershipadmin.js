/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PartnershipAdmin = new Schema({
	  userId:String,//管理员Id
	  instrId:String,//合伙公司编号
	  addres:String//所在地址
})

module.exports = mongoose.model('PartnershipAdmin',PartnershipAdmin);