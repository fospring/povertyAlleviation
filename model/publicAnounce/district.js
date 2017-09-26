/**
 * Created by QiuYongchun on 17/8/26.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var District = new Schema(
  {
	  diId: String,//区县扶贫办编号
	  diName:String,//区县扶贫办名称
	  district: String,  //区
	  county: String  //县
  });


module.exports = mongoose.model('District',District);