/**
 * Created by QiuYongchun on 17/9/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newProgressApp = new Schema({
	 projectId:String,//项目Id
	 newProgress:String,//项目进度
	 agree:String//县脱贫攻坚指挥部是否同意，0未审核，1同意，2，不同意
});

module.exports = mongoose.model('newProgressApp',newProgressApp);