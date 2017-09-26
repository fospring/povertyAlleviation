/**
 * Created by QiuYongchun on 17/8/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CivilAffairsAdmin = new Schema(
  {
  Ciid: String,//民政局编号
  userId: String,//身份证号 *****
  district: String,  //区
  county: String,  //县
  township: String,  //乡
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

module.exports = mongoose.model('CivilAffairsAdmin',CivilAffairsAdmin);