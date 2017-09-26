/**
 * Created by QiuYongchun on 17/8/26.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Applicationpa = new Schema(
  {
      IdentID: String,
      name:String,
      sex: String, 
      memNum:Number,
      age: Number,  
      district: String, 
      county: String,
      township: String, 
      viliager:String,
      annualIncome: Number,
      perIncome:Number,
      labourNum:Number,
      reason:String,
      status:String,
      grade:String,
      primaryId:String,
      primaryId2:String,
      firstPublicityId:String,
      townshipId:String,
      secondPublicityId:String,
      districtCheckId:String,
      districtCheckId2:String,
      publicityId:String,
      passId:String,
      createAt:{
          type:Date,
          default:Date.now()
      }
});

module.exports = mongoose.model('Applicationpa',Applicationpa);