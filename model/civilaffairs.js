/**
 * Created by QiuYongchun on 17/8/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CivilAffairs = new Schema(
  {
	  CiId: String,//民政局编号
	  CiName:String,//民政局名称
	  district: String,  //区
	  county: String,  //县
	  township: String  //乡
  }

module.exports = mongoose.model('CivilAffairs',CivilAffairs);