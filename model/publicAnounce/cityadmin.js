/**
 * Created by QiuYongchun on 17/8/26.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CityAdmin = new Schema({
  CiId: String,//市扶贫办编号
  userId: String,//管理员身份证号 *****
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

module.exports = mongoose.model('CityAdmin',CityAdmin);