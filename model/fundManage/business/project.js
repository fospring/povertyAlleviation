/**
 * Created by QiuYongchun on 17/9/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Project = new Schema({
  plId:String,//所属项目库编号
  projectId:String,//项目编号
  projectName:String,//项目名称
  projectNature:String,
  process:String,
  approval:String,
  constructionUnit:String,//项目施工单位
  countyUnit:String,//县级承担部门
  totalMoney:Number,//总额度
  money2017:Number,//2017额度
  money2018:Number,//2018额度
  money2019:Number,//2019额度
  opId:String,//新建项目人员Id
  completeTime:String,//完成时间
});

module.exports = mongoose.model('Project',Project);