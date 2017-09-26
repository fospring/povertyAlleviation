/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountyGovernment = new Schema({
	  instrId:String,//县指挥部编号
	  instrName:String,//县坚指挥部名称
	  county:String//所在县
});

module.exports = mongoose.model('CountyGovernment',CountyGovernment);