/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountyPlatform = new Schema({
  instrId:String,//县平台公司公司编号
  instrName:String,//县平台公司名称
  county:String, 
  balance:{
	 type:Number,
	 default:100000000
  }
});

module.exports = mongoose.model('CountyPlatform',CountyPlatform);