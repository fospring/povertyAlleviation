/**
 * Created by QiuYongchun on 17/8/26.
 */
var express = require('express');
var router = express.Router();

var Application = require('../model/publicAnounce/applicationpa');
var TipOffs =require('../model/publicAnounce/tipoffs');
var BaseInformation = require('../model/baseinformation');
var CitizenInformPa = require('../model/publicAnounce/citizeninformationpa');

router.post('/publicity/application',function(req,res){
	var body = req.body;
	var publicityApp = new Application({
		  IdentID: body.IdentID,
		  name:body.name,
		  sex: body.sex, 
		  memNum:body.memNum,
		  age: body.age,  
		  district: body.district, 
		  county: body.county,
		  township: body.township, 
		  viliager:body.viliager,
		  perIncome:body.perIncome,
		  labourNum:body.labourNum,
		  reason:body.reason,
		  status:"00"
	});
	publicityApp.save(function(err,result){
		console.log(result);
          res.json(result);
	});
});

router.post('/appperson/find',function(req,res){
	var body = req.body;
	Application.find({"IdentID":body.IdentID},function(err,result){
		res.json(result);
	});
});

router.post('/viliager/find',function(req,res){
	var body = req.body;
	Application.find({"viliager":body.viliager},function(err,result){
		res.json(result);
	});
});

router.post('/viliager/approval',function(req,res){
	var body = req.body;
	Application.findByIdAndUpdate(body._id,{$set:{"status":body.status,"grade":body.grade,"primaryId":body.primaryId}},{new:true},function(err,result){
		res.json(result);
	});
});

router.post('/findall',function(req,res){
	Application.find(function(err,result){
		res.json(result);
	});
});

router.get('/first/publicity',function(req,res){
	Application.find({"status":{$in:["01","02"]}},function(err,result){
		res.json(result);
	});
});

router.post('/first/agree',function(req,res){
	var body =req.body;
	Application.findByIdAndUpdate(body._id,{$set:{"status":body.status,"primaryId2":body.primaryId2}},{new:true},function(err,result){
		console.log(result);
		res.json(result);
	});
});

//审核人员为township
router.post('/townshipp/approval',function(req,res){
	var body =req.body;
	Application.findByIdAndUpdate(body._id,{$set:{"status":body.status,"firstPublicityId":body.firstPublicityId}},{new:true},function(err,result){
		console.log(result);
		res.json(result);
	});
});

router.post('/township/find',function(req,res){
	var body =req.body;
	Application.find({"township":body.township},function(err,result){
		console.log(result);
		res.json(result);
	});
});

router.get('/second/publicity',function(req,res){
	Application.find({"status":{$in:["05","06"]}},function(err,result){
		console.log(result);
		res.json(result);
	});
});

//第二次公示，审核人员为township
router.post('/second/agree',function(req,res){
	var body =req.body;
	Application.findByIdAndUpdate(body._id,{$set:{"status":body.status,"secondPublicityId":body.secondPublicityId}},{new:true},function(err,result){
		console.log(result);
		res.json(result);
	});
});

router.post('/county/find',function(req,res){
	var body =req.body;
	Application.find({"county":body.county},function(err,result){
		console.log(result);
		res.json(result);
	});
});

//审核人员为县级
router.post('/county/approval',function(req,res){
	var body =req.body;
	Application.findByIdAndUpdate(body._id,{$set:{"status":body.status,"districtCheckId":body.districtCheckId}},{new:true},function(err,result){
		console.log(result);
		res.json(result);
	});
});

router.get('/third/publicity',function(req,res){
	Application.find({"status":{$in:["09","10"]}},function(err,result){
		console.log(result);
		res.json(result);
	});
});

//公告，审核人员为县级
router.post('/third/agree',function(req,res){
	var body =req.body;
	Application.findByIdAndUpdate(body._id,{$set:{"status":body.status,"districtCheckId2":body.districtCheckId2}},{new:true},function(err,result){
		res.json(result);
	});
});

router.post('/city/find',function(req,res){
	var body =req.body;
	Application.find({"district":body.city},function(err,result){
		console.log(result);
		res.json(result);
	});
});

router.post('/city/approval',function(req,res){
	var body =req.body;
	Application.findByIdAndUpdate(body._id,{$set:{"status":body.status,"publicityId":body.publicityId}},{new:true},function(err,result){
		console.log(result);
		res.json(result);
	});
});

router.post('/setstatus',function(req,res){
	var body =req.body;
	Application.findByIdAndUpdate(body._id,{$set:{"status":body.status}},{new:true},function(err,result){
		res.json(result);
	});
});

router.post('/findById',function(req,res){
	var body =req.body;
	Application.findById(body._id,function(err,result){
		console.log(result);
		res.json(result);
	});
});

router.post('/report',function(req,res){
	var body =req.body;
	var TipOff = new TipOffs({
	   id:body.id,
	   appId:body.appId,
	   tipOffId:body.tipOffId,
	   phone:body.phone,
       district: body.district, 
       county: body.county,  
       township: body.township,
       viliager:body.viliager,
	   comment:body.comment,
	   stage:body.stage,
	   handle:"0"
     });
	 TipOff.save(function(err,result){
	 	console.log(result)
		res.json(result);
	 });
});

router.post('/showtipoffs',function(req,res){
	var body = req.body;
	if(body.role == "01"){
		if(body.chioce == "1"){
			TipOffs.find({"tipOffId":body.id},function(err,doc){
				res.json(doc);
			});	
		}else{
			TipOffs.find({"id":body.id},function(err,doc){
				res.json(doc);
			});	
		}
	}else if(body.role == "07"){
		TipOffs.find({"viliager":body.viliager,"stage":"1"},function(err,doc){
			res.json(doc);
		});			
	}else if(body.role == "08"){//,$in:{"stage":["1","2"]}
		TipOffs.find({"township":body.township},function(err,doc){
			console.log(doc)
			res.json(doc);
		});	
	}else if(body.role == "09"){//,$in:{"stage":["1","2","3"]}
		TipOffs.find({"county":body.county},function(err,doc){
			res.json(doc);
		});	
	}else{
		TipOffs.find({"district":body.district},function(err,doc){
			res.json(doc);
		});		
	}
});

router.post('/report/comment',function(req,res){
	var body =req.body;
	if(body.stage == "1"){//viliger
		if(body.role == "07"){
			TipOffs.findByIdAndUpdate(body._id,{$set:{"handle":"1","thisAdmin":body.thisAdmin,"thisAdminComment":body.thisAdminComment}},{new:true},function(err,doc){
				res.json(doc);
			});
		}else if(body.role == "08"){
			TipOffs.findByIdAndUpdate(body._id,{$set:{"handle":"2","upperAdmin":body.upperAdmin,"upperAdminComment":body.upperAdminComment}},{new:true},function(err,doc){
				res.json(doc);
			});
		}else if(body.role == "10"){
			if(body.cityDicision == "1"){
				TipOffs.findByIdAndUpdate(body._id,{$set:{"handle":"3","cityAdmin":body.cityAdmin,"cityDicision":body.cityDicision,"investigate":body.investigate}},{new:true},function(err,doc){
					BaseInformation.findOneAndUpdate({"userId":body.tipOffId},{$inc:{integrityPoints:5}},{new:true},function(err,doc1){
						BaseInformation.findOneAndUpdate({"userId":body.id},{$inc:{integrityPoints:-10}},{new:true},function(err,doc2){
							res.json({
								appdata:doc,
								apppeopleIntegrityPoints:doc1.integrityPoints,
								tipOffIntegrityPoints:doc2.integrityPoints
							})
						});
					})
				});
			}else{
				TipOffs.findByIdAndUpdate(body._id,{$set:{"handle":"3","cityAdmin":body.cityAdmin,"cityDicision":body.cityDicision,investigate:body.investigate}},{new:true},function(err,doc){
					BaseInformation.findOneAndUpdate({"userId":body.tipOffId},{$inc:{integrityPoints:-10}},{new:true},function(err,doc1){
						res.json({
								appdata:doc,
								tipOffIntegrityPoints:doc1.integrityPoints
							})
					})
				});
			}
		}else{
			res.json({status:"role or stage error!"})
		}
	}else if(body.stage == "2"){//2town
		if(body.role == "08"){
			TipOffs.findByIdAndUpdate(body._id,{$set:{"handle":"1","thisAdmin":body.thisAdmin,"thisAdminComment":body.thisAdminComment}},{new:true},function(err,doc){
				res.json(doc);
			});
		}else if(body.role == "09"){
			TipOffs.findByIdAndUpdate(body._id,{$set:{"handle":"2","upperAdmin":body.upperAdmin,"upperAdminComment":body.upperAdminComment}},{new:true},function(err,doc){
				res.json(doc);
			});
		}else if(body.role == "10"){
			if(body.cityDicision == "1"){
				TipOffs.findByIdAndUpdate(body._id,{$set:{"handle":"3","cityAdmin":body.cityAdmin,"cityDicision":body.cityDicision,"investigate":body.investigate}},{new:true},function(err,doc){
					BaseInformation.findOneAndUpdate({"userId":body.tipOffId},{$inc:{integrityPoints:5}},{new:true},function(err,doc1){
						BaseInformation.findOneAndUpdate({"userId":body.id},{$inc:{integrityPoints:-10}},{new:true},function(err,doc2){
							res.json({
								appdata:doc,
								apppeopleIntegrityPoints:doc1.integrityPoints,
								tipOffIntegrityPoints:doc2.integrityPoints
							})
						});
					})
				});
			}else{
				TipOffs.findByIdAndUpdate(body._id,{$set:{"handle":"3","cityAdmin":body.cityAdmin,"cityDicision":body.cityDicision,investigate:body.investigate}},{new:true},function(err,doc){
					BaseInformation.findOneAndUpdate({"userId":body.tipOffId},{$inc:{integrityPoints:-10}},{new:true},function(err,doc1){
						res.json({
								appdata:doc,
								tipOffIntegrityPoints:doc1.integrityPoints
							})
					})
				});
			}
		}else{
			res.json({status:"role or stage error!"})
		}
	}else{//county
		if(body.role == "09"){
			TipOffs.findByIdAndUpdate(body._id,{$set:{"handle":"1","thisAdmin":body.thisAdmin,"thisAdminComment":body.thisAdminComment}},{new:true},function(err,doc){
				res.json(doc);
			});
		}else if(body.role == "10"){
			if(body.cityDicision == "1"){
				TipOffs.findByIdAndUpdate(body._id,{$set:{"handle":"3","cityAdmin":body.cityAdmin,"cityDicision":body.cityDicision,"investigate":body.investigate}},{new:true},function(err,doc){
					BaseInformation.findOneAndUpdate({"userId":body.tipOffId},{$inc:{integrityPoints:5}},{new:true},function(err,doc1){
						BaseInformation.findOneAndUpdate({"userId":body.id},{$inc:{integrityPoints:-10}},{new:true},function(err,doc2){
							res.json({
								appdata:doc,
								apppeopleIntegrityPoints:doc1.integrityPoints,
								tipOffIntegrityPoints:doc2.integrityPoints
							})
						});
					})
				});
			}else{
				TipOffs.findByIdAndUpdate(body._id,{$set:{"handle":"3","cityAdmin":body.cityAdmin,"cityDicision":body.cityDicision,investigate:body.investigate}},{new:true},function(err,doc){
					BaseInformation.findOneAndUpdate({"userId":body.tipOffId},{$inc:{integrityPoints:-10}},{new:true},function(err,doc1){
						res.json({
								appdata:doc,
								tipOffIntegrityPoints:doc1.integrityPoints
							})
					})
				});
			}
		}else{
			res.json({status:"role or stage error!"})
		}
	}
});


router.post('/surveied/list',function(req,res){
	var body = req.body;
	TipOffs.find({"viliager":body.viliager,"investigate":true},['id','comment','stage','district','county','township','viliager','phone'],function(err,doc){
		res.json(doc);
	})
})

module.exports = router;