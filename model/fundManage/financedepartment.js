/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FinanceDepartment = new Schema({
	  instrId:String,//省财政厅编号
	  instrName:String,//省财政厅名称
	  province:String//所在省
});

module.exports = mongoose.model('FinanceDepartment',FinanceDepartment);