/**
 * Created by QiuYongchun on 17/9/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectLibrary=new Schema({
    city:String,//州市
    county:String,//区县
    township:String,//乡镇
    libraryName:String,//项目库名称
    totalNumber:String,
    approvalNumber:String,//审批中数量
    implement:Number,//实施中数量
    completedNumber:Number,//已完成数量
    opUser:String//新建项目操作人Id
});

module.exports = mongoose.model('ProjectLibrary',ProjectLibrary);