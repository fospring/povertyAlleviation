/**
 * Created on 17/9/1.
 */
var express = require('express');
var router = express.Router();
var DigitalBill = require('../model/fundManage/digitalbill');
var ProjectLibrary = require('../model/fundManage/business/projectlibrary');
var Project = require('../model/fundManage/business/project');
var FundStructure = require('../model/fundManage/business/fundstructure');
var newProgressApp = require('../model/fundManage/business/newprogressapp');
router.post('/fundationManage',function(req,res){
    res.json({funtion:"fund manage test"});
}); 
//成立有限合伙公司
router.post('/create/partnershipcompany',function(req,res){
	var body = req.body;
	res.json({funtion:"create/partnershipcompany"});
});
//第二顺位同意
router.post('/create/second/agree',function(req,res){
	var body = req.body;
	res.json({funtion:"second/agree"});
});
//第三顺位同意
router.post('/create/third/agree',function(req,res){
	var body = req.body;
	res.json({funtion:"third/agree"});
});
//新建项目库
router.post('/create/projectlibrary',function(req,res){
	var body = req.body;
	ProjectLibrary1 = new ProjectLibrary({
	    city:body.city,//州市
	    county:body.county,//区县body.
	    township:body.township,//乡镇
	    libraryName:body.libraryName,//项目库名称   
	    totalNumber: 0,
	    approvalNumber:0,//审批中数量
	    implement:0,//实施中数量
	    completedNumber:0,//已完成数量
	    opUser:body.opUser//新建项目操作人Id
	});
	ProjectLibrary1.save(function(err,result){
		res.json(result);
	})
});
//根据县查找项目库
router.post('/county/search/projectlibrary',function(req,res){
	var body = req.body;
	ProjectLibrary.find({"county":body.county},function(err,result){
		res.json(result);
	});
});
//新建项目
router.post('/create/project',function(req,res){
	var body = req.body;
	Project1 = new Project({
    plId:body.plId,//所属项目库编号
    projectId:body.projectId,//项目编号
    projectName:body.projectName,//项目名称
    projectNature:body.projectNature,
    process:"0%",
    approval:"0",
    constructionUnit:body.constructionUnit,//项目施工单位
    countyUnit:body.countyUnit,//县级承担部门
    totalMoney:body.totalMoney,//总额度
    money2017:body.money2017,//2017额度
    money2018:body.money2018,//2018额度
    money2019:body.money2019,//2019额度
    opId:body.opId,//新建项目人员Id
    completeTime:body.completeTime//完成时间
	});
	Project1.save(function(err,result){
		res.json(result);
	})

});
//findProject
router.post('/county/app/project',function(req,res){
	var body = req.body;
	Project.find(function(err,result){
		res.json(result);
	});
});
//govermentfindProject
router.post('/goverment/app/project',function(req,res){
	var body = req.body;
	Project.find({"approval":"0"},function(err,result){
		res.json(result);
	});
});
//govermentfindProject
router.post('/see/app/project',function(req,res){
	var body = req.body;
	Project.find(function(err,result){
		res.json(result);
	});
});
//根据项目申请资金
router.post('/app/expenditure',function(req,res){
	var body = req.body;
	Project.findByIdAndUpdate(body._id,{$set:{"approval":body.approval}},{new:true},function(err,result){
		console.log(result);
		res.json(result);
	});
});
//省财政厅find
router.post('/provincialFinance/app/project',function(req,res){
	var body = req.body;
	Project.find({"approval":"1"},function(err,result){
		res.json(result);
	});
});
//省财政厅审批项目申请资金
router.post('/financedepartment/approval',function(req,res){
	var body = req.body;
	Project.findByIdAndUpdate(body._id,{$set:{"approval":body.approval}},{new:true},function(err,result){
		console.log(result);
		res.json(result);
	});
});
//省财政厅find2
router.post('/financedepartment/find',function(req,res){
	var body = req.body;
	Project.find(function(err,result){
		res.json(result);
	});
});
//集团公司find
router.post('/groupcompany/find',function(req,res){
	var body = req.body;
	Project.find({"approval":"3"},function(err,result){
		res.json(result);
	});
});
//project findById
router.post('/findbyid',function(req,res){
	var body = req.body;
	Project.findById(body._id,function(err,result){
		console.log(result);
		res.json(result);
	});
});

//集团公司find raise money
router.post('/fund/raise',function(req,res){
	console.log("funraise");
	var body = req.body;
    FundStructure1 = new FundStructure({
      projectId:body.projectId,
      totalMoney:body.totalMoney,
      prority1Id:body.prority1Id,
      prority1Sum:body.prority1Sum,
      prority2Id:body.prority2Id,
      prority2Sum:body.prority2Sum,
      prority3Id:body.prority3Id,
      prority3Sum:body.prority3Sum,
      priority1agree:"0"
    });
	Project.findByIdAndUpdate(body._id,{$set:{"approval":5}},{new:true},function(err,result){
		console.log(result);
	});
    FundStructure1.save(function(err,result){
    	res.json(result);
    	console.log(result);
    })
});
//集团公司find
router.post('/groupcompany/find2',function(req,res){
	var body = req.body;
	Project.find(function(err,result){
		res.json(result);
	});
});

//county platform find fundraiseStructure
router.post('/countyplatform/find',function(req,res){
	var body = req.body;
	FundStructure.find(function(err,result){
		res.json(result);
	});
});
//county platform find fundraiseStructure record
router.post('/countyplatform/findrecord',function(req,res){
	var body = req.body;
	FundStructure.find({"priority1agree":{$in:["1","2"]}},function(err,result){
		res.json(result);
	});
});
//county platform find fundraiseStructure record
router.post('/earmarked/account',function(req,res){
	var body = req.body;
	FundStructure.find({"priority1agree":"1"},function(err,result){
		res.json(result);
	});
});
//fundraise Structure findById
router.post('/fundstructure/findbyid',function(req,res){
	var body = req.body;
	FundStructure.find({"projectId":body._id},function(err,result){
		console.log(result);
		res.json(result);
	});
});
//县平台公司认缴
// {"_id":"59bcb655ae15bf20b6fbeea4",
// 	"priority1agree":"2",
// 	"approval":"7"
// }
router.post('/countyplatform/subscribe',function(req,res){
	var body = req.body;
	FundStructure.findOneAndUpdate({"projectId":body._id},{$set:{"priority1agree":body.priority1agree}},{new:true},function(err,result){
		console.log(result);
		Project.findByIdAndUpdate(body._id,{$set:{"approval":body.approval}},{new:true},function(err,doc){
			console.log(doc);
			res.json({
				fundStructure:result,
				project:doc
			})
		});
	});
});
//construct unit find
router.post('/constructunit/find',function(req,res){
	var body = req.body;
	Project.find(function(err,result){
		res.json(result);
	});
});
//project findById
router.post('/project/findbyid',function(req,res){
	var body = req.body;
	Project.findById(body._id,function(err,result){
		console.log(result);
		res.json(result);
	});
});
//newprogress app
router.post('/newprogress/app',function(req,res){
	var body = req.body;
    newProgressApp1 = new newProgressApp({
    	projectId:body.projectId,
    	newProgress:body.newProgress,
    	agree:"0"
    });
    newProgressApp1.save(function(err,doc){
		Project.findByIdAndUpdate(body.projectId,{$set:{"approval":"8"}},{new:true},function(err,doc1){
			console.log(doc);
		});
	   res.json(doc);    	
    })
});
//progress app find1
router.post('/progress/find1',function(req,res){
	var body = req.body;
	Project.find({"approval":"8"},function(err,doc){	
		   res.json(doc);  	
	});
});
//progress app find2
router.post('/newprogress/app2',function(req,res){
	var body = req.body;
	    newProgressApp.findOne({"projectId":body.projectId},function(err,doc){		
		   res.json(doc);  	
	});
});
//
router.post('/update/progress',function(req,res){
	var body = req.body;
	    newProgressApp.findOneAndUpdate({"projectId":body.projectId},{"agree":body.agree},{new:true},function(err,doc1){	
	      if(body.agree == "1"){
		   Project.findByIdAndUpdate(body.projectId,{"approval":"9","process":doc1.newProgress},{new:true},function(err,doc2){
		     res.json({processApp:doc1,Project:doc2}); 
		   }); 
	      }else{
		   Project.findByIdAndUpdate(body.projectId,{"approval":"6"},{new:true},function(err,doc2){
		     res.json({processApp:doc1,Project:doc2}); 
		   }); 

	      }		
	});
});
//constructure appPay
router.post('/app/pay',function(req,res){
	var body = req.body;
	Project.findByIdAndUpdate(body._id,{$set:{"approval":"10"}},{new:true},function(err,doc){
		console.log(doc);
		res.json(doc)
	});
});
//constructure appPay record
router.post('/app/payrecord',function(req,res){
	var body = req.body;
	Project.find({"approval":{$in:["10","11","12"]}},function(err,doc){
		res.json(doc)
	});
});
//省财政厅指示县平台公司设立出资比例
router.post('/financedepartment/approval2',function(req,res){
	var body = req.body;
	Project.find(function(err,result){
		res.json(result);
	});
});

//第二顺位确认||否决出资比例
router.post('second/contribution',function(req,res){
	var body = req.body;
	res.json({funtion:"second/contribution"});
});
//第三顺位确认||否决出资比例
router.post('third/contribution',function(req,res){
	var body = req.body;
	res.json({funtion:"third/contribution"});
});

//有限合伙公司生成数字汇票
router.post('/create/digitalbill',function(req,res){
	var body = req.body;
	var digitalBill1 = new DigitalBill({
		 issueId:body.issueId,
		 projectId:body.projectId,
		 userId:body.userId,
		 money:body.money,
	     planPath1:body.planPath1,
	     planPath2:body.planPath2,
	     planPath3:body.planPath3,      
	     actualPath1:body.actualPath1,
	     finalAccount:body.finalAccount,
	     currentAccount:body.currentAccount,
	     agree1:"0",//认证1,0未认证,1认证
		 agree2:"0",//认证2
		 agree3:"0"//认证3
	});
	digitalBill1.save(function(err,result){
		Project.findByIdAndUpdate(body.projectId,{$set:{"approval":"11"}},{new:true},function(err,doc){
			console.log(doc);
		    res.json({bill:result,approval:doc.approval});
		});
	});
});
//countyplatform find digitalBill
router.post('/countyplatform/find/digitalbill',function(req,res){
	var body = req.body;
	DigitalBill.find({"agree1":"0"},function(err,result){
	    res.json(result);		
	})
});
//countyplatform find2 digitalBill
router.post('/countyplatform/find2/digitalbill',function(req,res){
	var body = req.body;
	DigitalBill.find({"agree1":"1"},function(err,result){
	    res.json(result);		
	})
});
//countyplatform agree digitalBill
router.post('/countyplatform/agree/digitalbill',function(req,res){
	var body = req.body;
	DigitalBill.findByIdAndUpdate(body._id,{"agree1":body.agree1},function(err,result){
	    res.json(result);		
	})
});
//ICBC find digitalBill
router.post('/ICBC/find/digitalbill',function(req,res){
	var body = req.body;
	DigitalBill.find({"agree1":"1"},function(err,result){
	    res.json(result);		
	})
});
//ICBC agree digitalBill
router.post('/ICBC/agree/digitalbill',function(req,res){
	var body = req.body;
	DigitalBill.findByIdAndUpdate(body._id,{"agree2":body.agree2},function(err,result){
	    res.json(result);		
	})
});
//provinceAlleviation find digitalBill
router.post('/provinceAlleviation/find/digitalbill',function(req,res){
	var body = req.body;
	DigitalBill.find({"agree1":"1"},function(err,result){
	    res.json(result);		
	})
});
//provinceAlleviation agree digitalBill
router.post('/provinceAlleviation/agree/digitalbill',function(req,res){
	var body = req.body;
	DigitalBill.findByIdAndUpdate(body._id,{"agree3":body.agree3},function(err,result){
	    res.json(result);		
	})
});
//优先合伙公司将数字汇票发给县基金公司
router.post('/create/digitalbill',function(req,res){
	var body = req.body;
	res.json({funtion:"digitalbill/send"});
});
//县基金公司获得数字汇票
router.post('/get/digitalbill',function(req,res){
	var body = req.body;
	DigitalBill.find({"agree1":"1","agree2":"1","agree3":"1"},function(err,result){
		res.json(result);
	});
});
//县基金公司发放数字汇票给施工单位
// router.post('/send/digitalbill',function(req,res){
// 	var body = req.body;
// 	DigitalBill.findByIdAndUpdate(body._id,{$set:{handleId:body.handleId, toAccount: body.toAccount, currentlyBelong: body.currentlyBelong,planPath:body.planPath}},{new:true},function(err,result){
// 		res.json(result);
// 	});
// });
router.post('/send/digitalbill',function(req,res){
	var body = req.body;
	DigitalBill.findByIdAndUpdate(body._id,{$set:{"currentAccount":body.currentAccount}},{new:true},function(err,result){
		console.log(result);
		res.json(result);
	});
});
//项目施工单位获得数字汇票
router.post('/get2/digitalbill',function(req,res){
	var body = req.body;
	DigitalBill.find({"toAccount":body.constructionUnitId},function(err,result){
		res.json(result);
	});
});
//县基金公司更新项目进度
router.post('/process/update',function(req,res){
	res.json({funtion:"process/update"});
});
//省脱贫基金公司审核
router.post('/provincefund/Audit',function(req,res){
	res.json({funtion:"provincefund/Audit"});
});
//县平台审核项目进度
router.post('/countyplatform/Audit',function(req,res){
	res.json({funtion:"provincefund/Audit"});
});
//银行审核项目进度
router.post('/bank/Audit',function(req,res){
	res.json({funtion:"/bank/Audit"});
});
//有限合伙公司转账
router.post('/partnershipcompany/transfer',function(req,res){
	res.json({funtion:"partnershipcompany/transfer"});
});
//省财政厅进行资金退出
router.post('/province/order',function(req,res){
	res.json({funtion:"province/order"});
});
//银行审核,根据链上信息还款
router.post('/bank/repay',function(req,res){
	res.json({funtion:"bank/repay"});
});
//财政厅查询资金流动
router.post('/finance/supervise',function(req,res){
	DigitalBill.find(function(err,result){
		res.json(result);
	});
});
//财政厅评价
router.post('/finance/evaluate',function(req,res){
	res.json({funtion:"finance/evaluate"});
});
module.exports = router;