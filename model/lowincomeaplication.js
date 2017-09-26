/**
 * Created by QiuYongchun on 17/8/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LowIncomeAplication = new Schema({
    appTransId:String,//申请者申请时的区块链交易Id
    visitTransId:String,//民政局走访时区块链交易Id
    userId: String,
    name:String,
    CiId: String,
    ciuserId:String,
    district:String,
    county:String,
    township:String,
    familyNum:Number,
    averageIncome:Number,
    civilAffairsAgree: String,
    reason: String,
    accept:String,//是否收到过捐赠,0N,1Y
    comment:String,
    appTime:{
    type:Date,
    default:Date.now()
}
});

module.exports = mongoose.model('LowIncomeAplication',LowIncomeAplication);