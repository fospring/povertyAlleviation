/**
 * Created by QiuYongchun on 17/8/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitizenInformation = new Schema(
  {
  userId: String,//身份证号 *****
  CiId: String,//所在民政局Id(编号)
  sex: String, 
  age: Number,  
  district: String,  //区
  county: String,  //县
  township: String,  //乡
  viliager: String,
  familyNum:Number,//
  labourNum:Number,//有劳动力人口
  averageIncome: Number, //年收入 
  applicationNum:Number,//申请次数
  agreeNum:Number,//同意次数
  totalAccept:Number,//接收捐赠总金额
  annualTotal:Number,//本次申请已获得捐助总额
  annualStutes:String,//本年度状态是否为低保帮扶对象，1是，0不是
  applicationNum:Number,//两公示一公告申请次数
  passNum:Number,//两公示一公告通过次数
  status:String,//状态
  meta:{
    createAt:{
      type:Date,
      default:Date.now()
    },
    updateAt:{
      type:Date,
      default:Date.now()
    }
  }
});

module.exports = mongoose.model('CitizenInformation',CitizenInformation);