/**
 * Created by QiuYongchun on 17/8/26.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Township = new Schema(
  {
    toId: String,//乡镇政府编号
    toName:String,//乡镇政府名称
    district: String,  //区
    county: String,  //县
    township: String //乡
  });

module.exports = mongoose.model('Township',Township);