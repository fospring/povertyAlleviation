/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConstructionUnit = new Schema({
	  instrId:String,//施工单位编号
	  instrName:String,//施工单位名称
	  address:String//所在地址
});

module.exports = mongoose.model('ConstructionUnit',ConstructionUnit);