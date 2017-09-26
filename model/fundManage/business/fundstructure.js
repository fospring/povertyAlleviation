/**
 * Created by QiuYongchun on 17/9/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FundStructure = new Schema({
    projectId:String,//募资结构编号
    totalMoney:String,//募资总额
    prority1Id:String,//第一顺位Id
    prority1Sum:Number,//第一顺位金额
    prority2Id:String,//第2顺位Id
    prority2Sum:Number,//第2顺位金额
    prority3Id:String,//第3顺位Id
    prority3Sum:Number,//第3顺位金额
    priority1agree:String//0未处理，1同意，2不同意
});

module.exports = mongoose.model('FundStructure',FundStructure);