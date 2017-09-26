/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountyGovernmentAdmin = new Schema({
	  userId:String,
	  instrId:String,//县指挥部编号
	  county:String//所在县
});

module.exports = mongoose.model('CountyGovernmentAdmin',CountyGovernmentAdmin);