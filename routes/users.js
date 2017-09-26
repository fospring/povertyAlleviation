var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../model/user');
var db = require('../model/database');
var BaseInformation = require('../model/baseinformation');
var CitizenInformation = require('../model/citizeninformation');
var CivilAffairsAdmin = require('../model/civilaffairsadmin');
var CharityAdmin = require('../model/charityadmin');
var TownshipAdmin = require('../model/publicAnounce/townshipadmin');
var ViliagerAdmin = require('../model/publicAnounce/villageradmin');
var DistrictAdmin = require('../model/publicAnounce/districtadmin');
var CityAdmin = require('../model/publicAnounce/cityadmin');
var ChaincodeAdmin = require('../model/fundManage/chaincodeadmin');
var ProvinceLeadingAdmin = require('../model/fundManage/provinceleadingadmin');//11
var FinanceDepartmentAdmin = require('../model/fundManage/financedepartmentadmin');//12
var ProvinceFundAdmin = require('../model/fundManage/provincefundadmin');//14
var CountyPlatformAdmin = require('../model/fundManage/countyoutpovertyadmin');//15
var ICBCadmin = require('../model/fundManage/ICBCadmin');//16
var PartnershipAdmin = require('../model/fundManage/partnershipadmin');//17
var CountyOutPovertyAdmin = require('../model/fundManage/countyoutpovertyadmin');//18
var OutPovertyCaptainAdmin = require('../model/fundManage/outpovertyacaptinadmin');//19
var CountyGovernmentAdmin = require('../model/fundManage/countygovernmentadmin');//20
var ConstructionAdmin = require('../model/fundManage/constructionadmin');//21
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',function(req,res){
	console.log("username:"+req.body.username);
	User.register(new User({username : req.body.username,role : req.body.role}),req.body.password,function(err,user){
		if(err){
			res.set('Access-Control-Allow-Origin','*');
			return res.status(500).json({err:err});
		}
		passport.authenticate('local')(req, res, function () {
			var baseInform = new BaseInformation({
				  userId:req.body.username,
				  username:"张"+req.body.role,
				  account:"aaaaa",
				  balance:1000,
				  integrityPoints: 100,
				  verifyCode:"00000"
			});
			baseInform.save(function(err,doc){
				if(err !=null){
				  console.log("save verify code failed");
				}
                  console.log("/**************** save baseInformation *******************");
                  console.log(doc);
			});
            /*********************/

	       return res.status(200).json({states:"register successful"});
		});
	});
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            // res.set('Access-Control-Allow-Origin','*');
            return res.status(401).json({
                err: info
            });
        }
        req.logIn(user, function(err) {
            if (err) {
                // res.set('Access-Control-Allow-Origin','*');
                return res.status(500).json({
                    err: 'Could not log in user'
                });
            }

            console.log(user);
        if (user.role=="01"){
            CitizenInformation.findOne({'userId': user.username}, function (err, docs) {
                BaseInformation.findOne({'userId': user.username}, function (err, doc) {
                console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs
                    });

                });
            });
            }else if(user.role=="02"){
            //查询民政局的id并返回民政局信息，第二个参数为需要返回的值
            CivilAffairsAdmin.findOne({'userId': user.username}, function (err, docs) {
                BaseInformation.findOne({'userId': user.username}, function (err, doc) {
                console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs
                    });

                });
            });

            }else if(user.role=="06"){
            //查询民政局的id并返回民政局信息，第二个参数为需要返回的值
            CharityAdmin.findOne({'userId': user.username}, function (err, docs) {
                BaseInformation.findOne({'userId': user.username}, function (err, doc) {
                console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs
                    });

                });
            });

            }else if(user.role =="07"){
            ViliagerAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="08"){
            TownshipAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="09"){
            DistrictAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="10"){
            CityAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="11"){
            ProvinceLeadingAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="12"){
            FinanceDepartmentAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="13"){
            ChaincodeAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="14"){
            ProvinceFundAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="15"){
            CountyPlatformAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="16"){
            ICBCadmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="17"){
            PartnershipAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="18"){
            CountyOutPovertyAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="19"){
            OutPovertyCaptainAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="20"){
            CountyGovernmentAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else if(user.role =="21"){
            ConstructionAdmin.findOne({"userId":user.username},function(err,docs){
                BaseInformation.findOne({"userId":user.username},function(err,doc){
                    console.log(docs);
                    res.status(200).json({
                        id: doc.userId,
                        username: doc.username,
                        role: user.role,                        
                        IntegrityPoints: doc.integrityPoints,
                        balance: doc.balance,
                        data: docs  
                    });
                });

            })
            }else {
            //查询医院的id并返回病人病历，第三方登陆是空data，在check/third/query和check/third/query/check可能有返回的数据
                    res.status(200).json({
                        status: 'Login successful!4',
                    });

            }
        });
    })(req,res,next);
});


module.exports = router;
