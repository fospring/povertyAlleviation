/**
*Copy from wangyi. Modify By yongchun on 17/9/22
*/
var http=require('http');
var config = require('../config');

//发送http请求
function Poster(reqCc,reqData, callback){
    var postData=JSON.stringify(reqData);
    var options={
        hostname:config.host,
        port:config.port,
        path:config.path+reqCc,
        method:'POST',
        headers:{
            "Content-Type": 'application/json',
            "authorization":'Bearer '+config.token,
            'Content-Length':Buffer.byteLength(postData)
        }
    };
    var req=http.request(options, function(res) {
        console.log('Status:',res.statusCode);
        // console.log('headers:',JSON.stringify(res.headers));
        res.setEncoding('utf-8');
        res.on('data',function(chun){
            callback(null, chun);
        });
        res.on('end',function(){
            // console.log('No more data in response.********');
        });
    });
    req.on('error',function(err){
        console.error(err);
        callback(err, null)
    });
    req.write(postData);
    req.end();
}

//module.exports = Poster;
module.exports = {
    Poster:Poster
};