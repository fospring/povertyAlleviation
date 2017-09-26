/**
 * Created by QiuYongchun on 17/8/26.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Viliager = new Schema(
{
	  viId: String,//村编号
	  viName:String,//村名称
	  district: String,  //区
	  county: String,  //县
	  township: String ,//乡
	  viliager:String
});

module.exports = mongoose.model('Viliager',Viliager);