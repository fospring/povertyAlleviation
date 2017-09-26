/**
 * Created by QiuYongchun on 17/8/23.
 */
var express = require('express');
var router = express.Router();
var CitizenInformation = require('../model/citizeninformation');
var CivilAffairsAdmin = require('../model/civilaffairsadmin');
var CharityAdmin = require('../model/charityadmin');
var LowIncomeApp = require('../model/lowincomeaplication');
var LowIncomeSend = require('../model/lowincomesend');
var CharityDonate = require('../model/charitylaunchdonation');
var Charity = require('../model/charity');
var BaseInformation = require('../model/baseinformation');
var BC = require('../blockchain/charitybcoperation');
var BC2 = require('../blockchain/querytransaction');

router.post('/query/by/transid',function(req,res){
	var body = req.body;
	//res.json({"bc":"bc"});
	BC2.queryByTransactionID(body.transactionID,function(err,response){
        if(err == null){
            console.log("Query Transaction in block");
            console.log(response);
            res.json(response);
        } else {
            console.log("error-------");
            console.log(err);
            res.json(err);
        }
	});
});

router.post('/lowincome/app',function(req,res){
	var body = req.body;
    var LowIncomeApp1 = new LowIncomeApp({
	    userId: body.userId,
	    name:body.name,
	    CiId: body.CiId,
	    district:body.district,
	    county:body.county,
	    township:body.township,
	    familyNum:body.familyNum,
	    averageIncome:body.averageIncome,
	    civilAffairsAgree: 0,
	    reason: body.reason,
	    accept:"0"
    });
    LowIncomeApp1.save(function(err,result){
    	console.log(result);
    	res.json(result);
    	//低保帮扶申请上传区块链
    	BC.addApply({"userId":result.userId, "Name":result.name}, function(err,response){
            if(err == null){
                console.log("Low income app save in block");
                console.log(response);
                LowIncomeApp.findByIdAndUpdate(result._id,{$set:{"appTransId":response}},{new:true},function(err,doc){
                	console.log("appTransId:"+doc.appTransId);
                });
            } else {
                console.log("error-------");
                console.log(err);
            }
    	});
    });
});

router.post('/civilAdmin/find',function(req,res){
	var body = req.body;
	LowIncomeApp.find({"CiId":body.CiId},function(err,doc){
	    res.json(doc);
	});
});

router.post('/civilAdmin/agree',function(req,res){
	var body = req.body;
	LowIncomeApp.findByIdAndUpdate(body._id,{$set:{"civilAffairsAgree":body.agree,"ciuserId":body.ciuserId}},{new:true},function(err,doc){
	    res.json(doc);
	    BC.addVisit({"userId":doc.userId,"CiId":doc.CiId,"reason":doc.reason,"appTime":doc.appTime,"comment":"无","ciuserId":doc.ciuserId},function(err,response){
            if(err == null){
                console.log("Low income app save in block");
                console.log(response);
                LowIncomeApp.findByIdAndUpdate(doc._id,{$set:{"visitTransId":response}},{new:true},function(err,doc){
                	console.log("visitTransId:"+doc.visitTransId);
                });
            } else {
                console.log("error-------");
                console.log(err);
            }	    	
	    })
	});
});

router.post('/civilAdmin/send',function(req,res){
	var body = req.body;
	    var LowIncomeSend1 = new LowIncomeSend({
	    userId: body.userId,
	    id:body._id,
	    civilAffairsId: body.civilAffairsId,
	    CiuserId:body.CiuserId,
	    ChId:body.ChId,
	    name:body.name,
	    familyNum:body.familyNum,
	    averageIncome:body.averageIncome,
	    reason: body.reason
    });
    LowIncomeSend1.save(function(err,result){
    	console.log(result);
    	res.json(result);
    });
});

router.post('/civilAdmin/findsend',function(req,res){
	var body = req.body;
    LowIncomeSend.find({"CiuserId":body.CiuserId},function(err,result){
    	console.log(result);
    	res.json(result);
    });
});

router.post('/charityAdmin/find',function(req,res){
	var body = req.body;
	LowIncomeSend.find({"ChId":body.ChId},function(err,doc){
	    res.json(doc);
	});
});

router.post('/charity/donate',function(req,res){
	var body = req.body;
	var charitydonate = new CharityDonate({
	  chId: body.chId,//慈善机构编号
	  userId: body.userId, //进行处理的慈善机构管理员Id
	  appUserId:body.appUserId, //受捐赠人员Id
	  id:body.id,//
	  ciId:body.ciId,
	  reason:body.reason,//原因
	  comment:body.comment,//评论
	  amount: body.amount, //捐赠金额  
	  status:"1",//捐赠状态，1表示刚发放；2选择接受；3确认接受；4举报；5民政局处理举报
	  sendStatus:"0"
	});
	charitydonate.save(function(err,result){
		console.log(result)
    	res.json(result);
	});
});

router.post('/charity/findlatest',function(req,res){
	CharityDonate.find({}).sort({'_id':-1}).limit(1).exec(function(err,result){
		console.log(result)
    	res.json(result);
	});
});

router.post('/charity/viewall',function(req,res){
	CharityDonate.find({}).sort({'_id':-1}).limit(100).exec(function(err,result){
		console.log(result)
    	res.json(result);
	});
});
//查看所有捐助单
router.post('/lowincome/find',function(req,res){
	var body = req.body;
	CharityDonate.find({"appUserId":body.appUserId},function(err,result){
		res.json(result);
	});
});

router.post('/lowincome/accept',function(req,res){
	var body = req.body;
	CharityDonate.findByIdAndUpdate(body._id,{$set: {"status":body.status}},{new:true},function(err,result){
		console.log(result);
		res.json(result);
	});
});

router.post('/lowincome/confirm',function(req,res){
	var body = req.body;
	CharityDonate.findByIdAndUpdate(body._id,{$set: {"status":body.status}},{new:true},function(err,result){
		if(body.status=="3"){
			console.log("id"+body.id);
			LowIncomeApp.findByIdAndUpdate(body.id,{$set:{"accept":"1"}},{new:true},function(err,result2){
				if(err == null){
			    	console.log("accept"+result2.accept)
				}
			});
			Charity.findOne({"ChId":body.ChId},function(err,ver){
				console.log("ver.balance:"+ver.balance);
				Charity.update({"ChId":body.ChId},{$set:{"balance":ver.balance - body.amount}},{new:true},function(err,doc){
	               if(err == null){
	               	console.log("charity balnce:"+doc.balance)
	               	console.log("/********charity balance - amount*******")
	               }
				})
			});
	        BaseInformation.findOne({"userId":body.appUserId},function(err,doc1){
	        	BaseInformation.update({"userId":body.appUserId},{$inc: {"balance":body.amount}},{new:true},function(err,doc2){
	        		if(err == null){
	        			console.log("user balance"+doc2.balance);
					   res.json({result:result,balance:doc2.balance+body.amount});
	        		}
	        	});
	        });	
	        //接受捐赠信息上传区块链
	    	BC.addDonate({"appUserId":result.appUserId,"chId":result.chId,"amount":result.amount,"reason":result.reason,"createAt":result.createAt,"ciuserId":result.ciuserId},function(err,response){
	    		CharityDonate.findByIdAndUpdate(result._id,{$set:{"donateTransId":response}},{new:true},function(err,doc){
	    			console.log("donateTransId:"+doc.donateTransId);
	    		});
	    	});	        
		}else{
			res.json({status:"reject"})
		}
	});
});

router.post('/application/remove',function(req,res){
	var body = req.body;
	LowIncomeApp.remove({"_id":body._id},function(err,doc){
		console.log(doc);
		res.json(doc);
	})
})

router.post('/charity/send',function(req,res){
	var body = req.body;
	for(var i in body.list){
		CharityDonate.findOneAndUpdate({"appUserId":body.list[i],"sendStatus":"0","status":{$in:["3","4"]}},{$set: {"sendStatus":"1"}},{new:true},function(err,result){
		});		
	}
	return res.status(200).json({states:"send success!"});
});

router.post('/civilAdmin/handle',function(req,res){
	var body = req.body;
	CharityDonate.findOneAndUpdate({"appUserId":body.appUserId,"status":"4"},{$set: {"status":"5"}},{new:true},function(err,result){
		res.json(result);
	});
});

router.post('/lowincome/process',function(req,res){
	var body = req.body;
    LowIncomeApp.find({"userId":body.userId},function(err,docs){
        res.json(docs);
    });
});

router.post('/civilAdmin/record',function(req,res){
	var body = req.body;
    LowIncomeApp.find({"CiId":body.CiId},function(err,docs){
        res.json(docs);
    });
});

router.post('/civilAdmin/monitor',function(req,res){
	var body = req.body;
	CharityDonate.find({"chId":body.chId,"status":"5"},function(err,result){
		res.json(result);
	});
});

router.post('/charity/viewlist',function(req,res){
	var body = req.body;
	LowIncomeSend.find({"ciId":body.ciId},function(err,result){
		res.json(result);
	})
});

router.post('/charity/record',function(req,res){
	var body = req.body;
	CharityDonate.find({"chId":body.chId},function(err,result){
		res.json(result);
	});
});

module.exports = router;