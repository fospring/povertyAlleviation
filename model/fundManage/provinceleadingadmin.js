/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProvinceLeadingAdmin = new Schema({
	  instrId:String,//省领导小组办公室编号
	  userId:String,//管理员Id
	  province:String,//所在省
	  linkTownship:String//负责的极贫乡
});

module.exports = mongoose.model('ProvinceLeadingAdmin',ProvinceLeadingAdmin);