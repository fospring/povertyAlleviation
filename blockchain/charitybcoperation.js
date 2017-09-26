/**
 * Created by yongchun on 17/9/22.
 */

 var Poster = require('./poster').Poster;
 var contract = require('../contract');
 var BCMessageFP = require('./message').BCMessageFP;
//添加低保帮扶申请：[身份证号和姓名hash值CharityHash，姓名Name]

//
 function addApply(data,callback){
 	var body = data;
 	var ChariInf = {
 		"CharityHash":"aaa张三",
 		"Name":body.Name
 	}
 	var ChariInfstr = JSON.stringify(ChariInf);
 	var msg = new BCMessageFP("add",[body.userId,ChariInfstr]);

 	Poster(contract.charity,msg,function(err,resdata){
 		if(err != null){
 			callback(err,null);
 		}
 		callback(null,resdata);
 	});
 }

function addVisit(data,callback){
 	var body = data;
 	var Visit = {
		"Organization": data.CiId,
		"Result":body.reason,
		"VTime":body.appTime,
		"Comment":body.comment,
		"HandlerID":body.ciuserId
 	}
 	var Visitstr = JSON.stringify(Visit);
 	var msg = new BCMessageFP("addVisit",[body.userId,Visitstr]);

 	Poster(contract.charity,msg,function(err,resdata){
 		if(err != null){
 			callback(err,null);
 		}
 		callback(null,resdata);
 	});
}

function addDonate(data,callback){
 	var body = data;
 	var Donate = {
		"SOrganization":body.chId,
		"Money":body.amount,
		"Reason":body.reason,
		"STime":body.createAt,
		"HandlerID":body.userId
 	}
 	var Donatestr = JSON.stringify(Donate);
 	var msg = new BCMessageFP("addDonate",[body.appUserId,Donatestr]);
 	Poster(contract.charity,msg,function(err,resdata){
 		if(err != null){
 			callback(err,null);
 		}
 		callback(null,resdata);
 	});
}

module.exports = {
    addApply: addApply,
    addVisit:addVisit,
    addDonate:addDonate
};