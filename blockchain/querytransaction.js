/**
 * Created by yongchun on 17/9/23.
 */

 var Getter = require('./getter').Getter;

  function queryByTransactionID(data,callback){
 	var body = data;
 	var transactionID = data

 	Getter(transactionID,function(err,resdata){
 		if(err != null){
 			callback(err,null);
 		}
 		callback(null,resdata);
 	});
 }

 module.exports = {
    queryByTransactionID:queryByTransactionID
};