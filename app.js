var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var db = require('./model/database');
var config = require('./config');
var assert = require('assert');
var LocalStrategy = require('passport-local').Strategy;
var CitizenInformation = require('./model/citizeninformation');
var CivilAffairsAdmin = require('./model/civilaffairsadmin');
var CharityAdmin = require('./model/charityadmin');
var Charity = require('./model/charity');
var Township = require('./model/publicAnounce/township');
var Viliager = require('./model/publicAnounce/viliager');
var District = require('./model/publicAnounce/district');
var City = require('./model/publicAnounce/city');
var TownshipAdmin = require('./model/publicAnounce/townshipadmin');
var ViliagerAdmin = require('./model/publicAnounce/villageradmin');
var DistrictAdmin = require('./model/publicAnounce/districtadmin');
var CityAdmin = require('./model/publicAnounce/cityadmin');
var CitizenInformPa = require('./model/publicAnounce/citizeninformationpa');
var ProvinceLeadingOffice = require('./model/fundManage/provinceleadingoffice');
var ProvinceLeadingAdmin = require('./model/fundManage/provinceleadingadmin');
var FinanceDepartment = require('./model/fundManage/financedepartment');
var FinanceDepartmentAdmin = require('./model/fundManage/financedepartmentadmin');
var ChaincodeCompany = require('./model/fundManage/chaincodecompany');
var ChaincodeAdmin = require('./model/fundManage/chaincodeadmin');
var ProvinceFundCompany = require('./model/fundManage/provincefundcompany');
var ProvinceFundAdmin = require('./model/fundManage/provincefundadmin');
var CountyPlatform = require('./model/fundManage/countyplatform');
var CountyPlatformAdmin = require('./model/fundManage/countyoutpovertyadmin');
var ICBC = require('./model/fundManage/ICBC');
var ICBCadmin = require('./model/fundManage/ICBCadmin');
var PartnershipCompany = require('./model/fundManage/partnershipcompany');
var PartnershipAdmin = require('./model/fundManage/partnershipadmin');
var CountyOutPoverty = require('./model/fundManage/countyoutpoverty');
var CountyOutPovertyAdmin = require('./model/fundManage/countyoutpovertyadmin');
var OutPovertyCaptain = require('./model/fundManage/outpovertycaptain');
var OutPovertyCaptainAdmin = require('./model/fundManage/outpovertyacaptinadmin');
var CountyGovernment = require('./model/fundManage/countygovernment');
var CountyGovernmentAdmin = require('./model/fundManage/countygovernmentadmin');
var ConstructionUnit = require('./model/fundManage/constructionunit');
var ConstructionAdmin = require('./model/fundManage/constructionadmin');
var BC = require('./blockchain/charitybcoperation');

// database connection.

db.on('error',console.error.bind(console, 'connection error: '));
db.once('open',function () {
    console.log('Mongoose Server connected.');
    /*******初始化各用户基本信息******/
    /*******个人1（低保申请者）信息*******/   
    // var citizenInfo1 = new CitizenInformation({
    //   userId: "0101a",//身份证号 *****
    //   CiId: "0211a",//所在民政局Id(编号)
    //   sex: "男", 
    //   age: 68,  
    //   district: "A区",  //区
    //   county: "B县",  //县
    //   township: "C乡镇",  //乡
    //   viliager:"D1村",
    //   familyNum:4,
    //   labourNum:2,
    //   averageIncome: 2000, //average年收入 
    //   applicationNum:0,//申请次数
    //   agreeNum:0,//同意次数
    //   totalAccept:0,//接收捐赠总金额
    //   annualTotal:0,//本次申请已获得捐助总额
    //   annualStutes:"0",//本年度状态是否为低保帮扶对象，1是，0不是
    // });
    // citizenInfo1.save(function(err,result){
    //  console.log("citizenInfo1 save success!")
    // });

    // /*******个人2（低保申请者）信息*******/
    // var citizenInfo2 = new CitizenInformation({
    //   userId: "0102a",//身份证号 *****
    //   CiId: "0211a",//所在民政局Id(编号)
    //   sex: "男", 
    //   age: 70,  
    //   district: "A区",  //区
    //   county: "B县",  //县
    //   township: "C乡镇",  //乡
    //   viliager:"D1村",
    //   familyNum:2,
    //   labourNum:1,
    //   averageIncome: 800, //average年收入 
    //   applicationNum:0,//申请次数
    //   agreeNum:0,//同意次数
    //   totalAccept:0,//接收捐赠总金额
    //   annualTotal:0,//本次申请已获得捐助总额
    //   annualStutes:"0",//本年度状态是否为低保帮扶对象，1是，0不是
    // });
    // citizenInfo2.save(function(err,result){
    //   console.log("citizenInfo1 save success!")
    // });

    // /*******民政局管理员信息*******/
    // var civilaffairs = new CivilAffairsAdmin({
    //       Ciid: "0211a",//民政局编号
    //       userId: "0201a",//身份证号 *****
    //       district: "A区",  //区
    //       county: "B县",  //县
    //       township: "C乡镇" //乡
    // });
    // civilaffairs.save(function(err,result){
    //     console.log("civilaffairs save success!")
    // });

    // /*******慈善机构管理员信息*******/
    // var charityadmin = new CharityAdmin({
    //       ChId: "0611a",//慈善机构编号
    //       userId:"0601a",//慈善机构管理员id
    //       address: "A市B区" //地址
    // });
    // charityadmin.save(function(err,result){
    //     console.log("charityadmin save success!")
    // });

    // /*******慈善机构信息*******/
    // var charity1 = new Charity({
    //     ChId: "0611a",
    //     ChName: "中国红十字会",
    //     adress:"A市B区",
    //     balance: 100000
    // });
    // charity1.save(function(err,result){
    //     console.log("charity1 save success!")
    // });

    // /*******citizeninformationPa信息*******/
    // var CitizenInformPa1 = new CitizenInformPa({
    //     IdentID: "0101a",
    //     sex: "男", 
    //     MemNum:"4",
    //     age: 67,  
    //     district: "A区", 
    //     county: "B县",  
    //     township: "C乡镇",
    //     viliager:"D1村",
    //     annualIncome: 2000,  
    //     perIncome:"",
    //     labourNum:"",
    //     applicationNum:2,
    //     passNum:1,
    //     status:"00"
    // });
    // CitizenInformPa1.save(function(err,result){
    //     console.log("CitizenInformPa1 save success!")
    // });

    // /*******vilaiger信息*******/
    // var viliager1 = new Viliager({
    //       viId: "0711a",//村编号
    //       district: "A区",  //区
    //       county: "B县",  //县
    //       township: "C乡镇" ,//乡
    //       viliager:"D1村"
    // });
    // viliager1.save(function(err,result){
    //     console.log("viliager1 save success!")
    // });

    // /*******vilaigeradmin信息*******/
    // var viliageradmin1 = new ViliagerAdmin({
    //       viId: "0711a",//乡镇政府编号
    //       userId: "0701a",//管理员身份证号 *****
    //       district: "A区",  //区
    //       county: "B县",  //县
    //       township: "C乡镇",  //乡
    //       viliager:"D1村"
    // });
    // viliageradmin1.save(function(err,result){
    //     console.log("viliageradmin1 save success!")
    // });

    // /*******township信息*******/
    // var township1 = new Township({
    //       viId: "0811a",//村编号
    //       district: "A区",  //区
    //       county: "B县",  //县
    //       township: "C乡镇" 
    // });
    // township1.save(function(err,result){
    //     console.log("township1 save success!")
    // });

    // /*******townshipadmin信息*******/
    // var townshipAdmin1 = new TownshipAdmin({
    //       diId: "0811a",//乡镇政府编号
    //       userId: "0801a",//管理员身份证号 *****
    //       district: "A区",  //区
    //       county: "B县",  //县
    //       township: "C乡镇"
    // });
    // townshipAdmin1.save(function(err,result){
    //     console.log("townshipAdmin1 save success!")
    // });

    // /*******township信息*******/
    // var district1 = new District({
    //       viId: "0911a",//村编号
    //       district: "A区",  //区
    //       county: "B县"
    // });
    // district1.save(function(err,result){
    //     console.log("district1 save success!")
    // });

    // /*******townshipadmin信息*******/
    // var districtAdmin1 = new DistrictAdmin({
    //       diId: "0911a",//qx编号
    //       userId: "0901a",//管理员身份证号 *****
    //       district: "A区",  //区
    //       county: "B县"
    // });
    // districtAdmin1.save(function(err,result){
    //     console.log("districtAdmin1 save success!")
    // });

    // /*******city1信息*******/
    // var city1 = new City({
    //       diId: "1011a",//s编号
    //       userId: "0801a",//管理员身份证号 *****
    //       district: "A区"
    // });
    // city1.save(function(err,result){
    //     console.log("districtAdmin1 save success!")
    // });

    // /*******cityadmin信息*******/
    // var cityAdmin1 = new CityAdmin({
    //       diId: "1011a",//shi编号
    //       userId: "1001a",//管理员身份证号 *****
    //       district: "A区"  //区
    // });
    // cityAdmin1.save(function(err,result){
    //     console.log("cityAdmin1 save success!")
    // });
    
    // /********ProvinceLeadingOffice信息*****/
    // var ProvinceLeadingOffice1 = new ProvinceLeadingOffice({
    //       instrId: "1111a",//省领导小组办公室编号
    //       instrName: "X省领导小组办公室",//省名称 *****
    //       province: "X省"  //省
    // });
    // ProvinceLeadingOffice1.save(function(err,result){
    //     console.log("ProvinceLeadingOffice1 save success!")
    // });

    // /********ProvinceLeadingAdmin信息*****/
    // var ProvinceLeadingAdmin1 = new ProvinceLeadingAdmin({
    // instrId:"1111a",//省领导小组办公室编号
    // userId:"1101a",//管理员Id
    // province:"x省",//所在省
    // linkTownship:"C乡镇"//负责的极贫乡
    // });
    // ProvinceLeadingAdmin1.save(function(err,result){
    //     console.log("ProvinceLeadingOffice1 save success!")
    // });
    
    // /********FinanceDepartment信息*****/
    // var FinanceDepartment1 = new FinanceDepartment({
    //       instrId: "1211a",//省财政厅编号
    //       instrName: "X省财政厅",//省名称 *****
    //       province: "X省"  //省
    // });
    // FinanceDepartment1.save(function(err,result){
    //     console.log("FinanceDepartment1 save success!")
    // });

    // /********ProvinceLeadingAdmin信息*****/
    // var FinanceDepartmentAdmin1 = new FinanceDepartmentAdmin({
    // userId:"1201a",//省财政厅管理员编号
    // instrId:"1211a",//所在省财政厅编号
    // province:"x省"//所在省
    // });
    // FinanceDepartmentAdmin1.save(function(err,result){
    //     console.log("FinanceDepartmentAdmin1 save success!")
    // });

    // /********ChaincodeCompany1信息*****/
    // var ChaincodeCompany1 = new ChaincodeCompany({
    //       instrId: "1311a",//省财政厅编号
    //       instrName: "X省财政厅",//省名称 *****
    //       address: "X省A区xx路xx号"  //省
    // });
    // ChaincodeCompany1.save(function(err,result){
    //     console.log("ChaincodeCompany1 save success!")
    // });

    // /********ProvinceLeadingAdmin信息*****/
    // var ChaincodeAdmin1 = new ChaincodeAdmin({
    //  userId:"1301a",//省财政厅管理员编号
    //  instrId:"1311a",//所在xx集团公司编号
    //  address:"X省A区xx路xx号"//所在省
    // });
    // ChaincodeAdmin1.save(function(err,result){
    //     console.log(result)
    // });

    // /********ProvinceFundCompany信息*****/
    // var ProvinceFundCompany1 = new ProvinceFundCompany({
    //       instrId: "1411a",//省脱贫基金管理公司编号
    //       instrName: "X省财政厅",//省名称 *****
    //       address: "X省xx街道"  //地址
    // });
    // ProvinceFundCompany1.save(function(err,result){
    //     console.log("ProvinceFundCompany1 save success!")
    // });

    // /********ProvinceFundAdmin信息*****/
    // var ProvinceFundAdmin1 = new ProvinceFundAdmin({
    // userId:"1401a",
    // instrId:"1411a",//所在省脱贫基金管理公司编号
    // address:"X省xx街道"//地址
    // });
    // ProvinceFundAdmin1.save(function(err,result){
    //     console.log("ProvinceFundAdmin1 save success!")
    // });

    // /********CountyPlatform信息*****/
    // var CountyPlatform1 = new CountyPlatform({
    //       instrId: "1511a",//县平台公司
    //       instrName: "X省财政厅",//省名称 *****
    //       county: "B县"
    // });
    // CountyPlatform1.save(function(err,result){
    //     console.log("CountyPlatform1 save success!")
    // });

    // /********CountyOutPovertyAdmin1信息*****/
    // var CountyPlatformAdmin1 = new CountyPlatformAdmin({
    // userId:"1501a",
    // instrId:"1511a",//所在县平台公司
    // county: "B县"
    // });
    // CountyPlatformAdmin1.save(function(err,result){
    //     console.log("CountyPlatformAdmin1 save success!")
    // });

    // /********ICBC信息*****/
    // var ICBC1 = new ICBC({
    //       instrId: "1611a",//县平台公司
    //       instrName: "中国银行xx省xx路分行",//省名称 *****
    //       address: "xx省xx路xx号"
    // });
    // ICBC1.save(function(err,result){
    //     console.log("ICBC1 save success!")
    // });

    // /********ICBCadmin1信息*****/
    // var ICBCadmin1 = new ICBCadmin({
    // userId:"1601a",
    // instrId:"1611a",
    // address: "xx省xx路xx号"
    // });
    // ICBCadmin1.save(function(err,result){
    //     console.log("ICBCadmin1 save success!")
    // });

    // /********PartnershipCompany1信息*****/
    // var PartnershipCompany1 = new PartnershipCompany({
    //       pcId: "1711a"//合伙公司编号
    // });
    // PartnershipCompany1.save(function(err,result){
    //     console.log("PartnershipCompany1 save success!")
    // });

    // /********PartnershipAdmin1信息*****/
    // var PartnershipAdmin1 = new PartnershipAdmin({
    //   userId:"1701a",
    //   instrId:"1711a"//所在合伙公司编号
    // });
    // PartnershipAdmin1.save(function(err,result){
    //     console.log("PartnershipAdmin1 save success!")
    // });

    // /********CountyOutPoverty1信息*****/
    // var CountyOutPoverty1 = new CountyOutPoverty({
    //   instrId: "1811a",//县脱贫基金公司编号
    //    instrName:"B县xx脱贫基金公司",
    //   county:"B县"
    // });
    // CountyOutPoverty1.save(function(err,result){
    //     console.log("CountyOutPoverty1 save success!")
    // });

    // /********CountyOutPovertyAdmin1信息*****/
    // var CountyOutPovertyAdmin1 = new CountyOutPovertyAdmin({
    //       userId:"1801a",
    //       ocId:"1811a",//所在县脱贫基金管理公司
    //       county:"B县"
    // });
    // CountyOutPovertyAdmin1.save(function(err,result){
    //     console.log("CountyOutPovertyAdmin1 save success!")
    // });

    // /********OutPovertyCaptain1信息*****/
    // var OutPovertyCaptain1 = new OutPovertyCaptain({
    //       instrId: "1811a",//县脱贫攻坚指挥部编号
    //        instrName:"B县脱贫攻坚指挥部",
    //       county:"B县"
    // });
    // OutPovertyCaptain1.save(function(err,result){
    //     console.log("OutPovertyCaptain1 save success!")
    // });

    // /********CountyOutPovertyAdmin1信息*****/
    // var OutPovertyCaptainAdmin1 = new OutPovertyCaptainAdmin({
    //    userId:"1901a",
    //    instrId:"1911a",//所在县脱贫基金管理公司
    //     county:"B县"
    // });
    // OutPovertyCaptainAdmin1.save(function(err,result){
    //     console.log("CountyOutPovertyAdmin1 save success!")
    // });

    // /********CountyGovernment1信息*****/
    // var CountyGovernment1 = new CountyGovernment({
    //       instrId: "2011a",//县政府编号
    //        instrName:"B县县政府（指挥部）",
    //       county:"B县"
    // });
    // CountyGovernment1.save(function(err,result){
    //     console.log("CountyGovernment1 save success!")
    // });

    // /********CountyGovernmentAdmin1信息*****/
    // var CountyGovernmentAdmin1 = new CountyGovernmentAdmin({
    //       userId:"2001a",
    //       ocId:"2011a",//所在县脱贫基金管理公司
    //       county:"B县"
    // });
    // CountyGovernmentAdmin1.save(function(err,result){
    //     console.log("CountyGovernmentAdmin1 save success!")
    // });

    // /********CountyGovernment1信息*****/
    // var ConstructionUnit1 = new ConstructionUnit({
    //       instrId: "2111a",//县政府编号
    //        instrName:"B县县政府（指挥部）",
    //       address:"B县xx街道xx号"
    // });
    // ConstructionUnit1.save(function(err,result){
    //     console.log("ConstructionUnit1 save success!")
    // });

    // /********CountyGovernmentAdmin1信息*****/
    // var ConstructionAdmin1 = new ConstructionAdmin({
    //      userId:"2101a",
    //      instrId:"2111a",
    //       address:"A市B县xx街道xx号"
    // });
    // ConstructionAdmin1.save(function(err,result){
    //     console.log("ConstructionAdmin1 save success!")
    // });

    // /********CountyGovernmentAdmin1信息*****/
    // var ConstructionAdmin1 = new ConstructionAdmin({
    //   	  userId:"2101a",
    //   	  instrId:"2111a",
    //       address:"A市B县xx街道xx号"
    // });
    // ConstructionAdmin1.save(function(err,result){
    //     console.log("ConstructionAdmin1 save success!")
    // });

});

// routers
var index = require('./routes/index');
var users = require('./routes/users');
var dbtest = require('./routes/dbtest');
var patest = require('./routes/patest');
var fmtest = require('./routes/fmtest');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//passport config
var User = require('./model/user');
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/', index);
app.use('/users', users);
app.use('/dbtest', dbtest);
app.use('/patest', patest);
app.use('/fmtest', fmtest);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

console.log("server on port 3000");

module.exports = app;