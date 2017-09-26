/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProvinceLeadingOffice = new Schema({
	  instrId:String,//省领导小组办公室编号
	  instrName:String,//省领导小组办公室名称
	  province:String//所在省
});

module.exports = mongoose.model('ProvinceLeadingOffice',ProvinceLeadingOffice);