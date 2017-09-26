/**
 * Created by QiuYongchun on 17/8/26.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var City = new Schema(
  {
    CiId: String,//市扶贫办编号
    CiName:String,//市扶贫办名称
    district: String,  //区
    county: String  //县
  });

module.exports = mongoose.model('City',City);