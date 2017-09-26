/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountyOutPoverty = new Schema({
	  instrId:String,//县脱贫基金公司编号
	  instrName:String,//县脱贫基金公司名称
	  county:String//所在地址
});

module.exports = mongoose.model('CountyOutPoverty',CountyOutPoverty);