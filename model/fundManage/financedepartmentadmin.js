/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FinanceDepartmentAdmin = new Schema({
	  userId:String,//省财政厅管理员编号
	  instrId:String,//所在省财政厅编号
	  province:String//所在省
});

module.exports = mongoose.model('FinanceDepartmentAdmin',FinanceDepartmentAdmin);