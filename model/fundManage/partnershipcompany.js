/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PartnershipCompany = new Schema({
	  instrId:String,//合伙公司编号
	  instrName:String,//合伙公司名称
	  address:String,//所在地址
	  priority1:String,
	  priority2:String,
	  priority3:String
});

module.exports = mongoose.model('PartnershipCompany',PartnershipCompany);