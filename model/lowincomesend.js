/**
 * Created by QiuYongchun on 17/8/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LowIncomeSend = new Schema({
    userId: String,//身份证号 
    id:String,//对应低保申请单的id
    civilAffairsId: String,//民政局编号
    CiuserId:String,//民政局处理人员身份证号
    ChId:String,//慈善机构Id
    name:String,//低保帮扶对象姓名
    familyNum:Number,
    averageIncome:Number,
    reason: String,//申请原因 ******
    appTime:{
    type:Date,
    default:Date.now()
}
});

module.exports = mongoose.model('LowIncomeSend',LowIncomeSend);