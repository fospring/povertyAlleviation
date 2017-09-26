/**
 * Created by QiuYongchun on 17/8/26.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitizenInformationPa = new Schema(
  {
	  IdentID: String,
	  sex: String, 
	  MemNum:Number,
	  age: Number,  
	  district: String, 
	  county: String,  
	  township: String,  
      viliager:String,
	  annualIncome: Number,  
	  perIncome:Number,
	  labourNum:Number,
	  applicationNum:Number,
	  passNum:Number,
	  status:String,
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

module.exports = mongoose.model('CitizenInformationPa',CitizenInformationPa);