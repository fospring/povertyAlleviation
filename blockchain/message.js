/**
 * Created by QiuYongchun on 17/9/8.
 */
 var config = require('../config');
 var BCMessageObj = function(){
 	return{
        "username":"Jim",
        "orgname":"org1",
		"peers": ["节点1", "节点2"],
		"fcn":"函数名",
		"args":["参数1","参数2","参数3","参数4"]
	}
 };

/**
 * @param args
 * @return {BCMessageObj}
 */
function BCMessageFP(fcn,args){
	var msg = new BCMessageObj();
	msg.fcn = fcn;
	msg.peers = config.peers;
	msg.args = args;
	return msg;
}

function BCMessage(username, orgname, peers, fcn, args) {
    this.username = username;
    this.orgname = orgname;
    this.peers = peers;
    this.fcn = fcn;
    this.args = args;
    if ('undefined' == typeof BCMessage._initialized) {
        BCMessage.prototype.setPeers = function (p) {
            this.peers = p;
        }
        BCMessage.prototype.setFcn = function (f) {
            this.fcn = f;
        }
        BCMessage.prototype.setArgs = function (a) {
            this.args = a;
        }
    }
    BCMessage._initialized = true;
}

 exports.BCMessageFP = BCMessageFP;
