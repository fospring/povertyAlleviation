/**
 * Created by QiuYongchun on 17/9/11.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OutPovertyCaptainAdmin =new Schema({
    userId:String,//管理员Id
    instrId:String,//县脱贫攻坚指挥部编号
    county:String//所在县
});

module.exports = mongoose.model('OutPovertyCaptainAdmin',OutPovertyCaptainAdmin);