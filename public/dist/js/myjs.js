/*
*用于获取页面间传递的参数
*/
function getParams(key) {
  var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
      return unescape(r[2]);
  }
  return null;
};
/*
*判断浏览器内核
*/
var idTmr;
function getExplorer()
{
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
  return "Chrome";
 }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    else {
        return "ie";
    }; //判断是否IE浏览器
}
/*
*table转为excel下载函数
*/
function table2excel(tableid)
{ //整个表格拷贝到EXCEL中
    if (getExplorer() == 'ie')
    {
        var elTable = document.getElementById(tableid); //table1改成你的tableID
        var oRangeRef = document.body.createTextRange();
        oRangeRef.moveToElementText(elTable);
        oRangeRef.execCommand("Copy");
        try {
            var appExcel = new ActiveXObject("Excel.Application");        } catch (e) {
            alert("无法调用Office对象，请确保您的机器已安装了Office并已将本系统的站点名加入到IE的信任站点列表中！");
            return;
        }
        appExcel.Visible = true;
        appExcel.Workbooks.Add().Worksheets.Item(1).Paste();
        appExcel = null;
        
    }
    else
    {
        tableToExcel(tableid)
    }
}
function Cleanup()
{
    window.clearInterval(idTmr);
    CollectGarbage();
}
var tableToExcel = (function ()
{
    var uri = 'data:text/xls;charset=utf-8,\ufeff,',
    template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
    base64 = function (s)
    {
        return window.btoa(encodeURIComponent(s))
    },
    format = function (s, c)
    {
        return s.replace(/{(\w+)}/g,
            function (m, p)
        {
            return c[p];
        }
        )
    }
    return function (table, name)
    {
        if (!table.nodeType)
            table = document.getElementById(table)
                var ctx =
            {
                worksheet : name || 'Worksheet',
                table : table.innerHTML
            }
        //window.location.href = uri + base64(format(template, ctx))
        
        var downloadLink = document.createElement("a");
        downloadLink.href = uri + format(template, ctx);
        downloadLink.download = '统计.xls';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
}
)()
function addCookie(objName, objValue, objHours){//添加cookie   
    var str = objName + "=" + escape(objValue);   
    if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失   
        var date = new Date();   
        var ms = objHours * 3600 * 1000;   
        date.setTime(date.getTime() + ms);   
        str += "; expires=" + date.toGMTString();   
    }   
    document.cookie = str;
} 
function getCookie(objName){//获取指定名称的cookie的值   
    var arrStr = document.cookie.split("; ");   
    for (var i = 0; i < arrStr.length; i++) {   
        var temp = arrStr[i].split("=");   
        if (temp[0] == objName)   
            return unescape(temp[1]);   
    }   
}  
function delCookie(name){//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间   
    var date = new Date();   
    date.setTime(date.getTime() - 10000);   
    document.cookie = name + "=a; expires=" + date.toGMTString();   
} 

function mainFooter(){
    document.write('<footer class="main-footer">'
    +'<div class="hidden-xs">'
      +'<p class="text-center">Copyright ©2017 苏州同济金融科技研究院有限公司</p></div>'
  +"</footer>");
}
    function getCurrentDate()
    {
      var timeStr = '2017年';
      var curDate = new Date();
      var curMonth = curDate.getMonth()+1;  //获取当前月份(0-11,0代表1月)
      var curDay = curDate.getDate();       //获取当前日(1-31)
      var curWeekDay = curDate.getDay();    //获取当前星期X(0-6,0代表星期天)
      var curHour = curDate.getHours();      //获取当前小时数(0-23)
     var curMinute = curDate.getMinutes();   // 获取当前分钟数(0-59)
     var curSec =curDate.getSeconds();      //获取当前秒数(0-59)
     timeStr += curMonth+'月'+curDay+'日 周';
     switch(curWeekDay)
     {
       case 0:timeStr += '日';break;
       case 1:timeStr += '一';break;
       case 2:timeStr += '二';break;
       case 3:timeStr += '三';break;
       case 4:timeStr += '四';break;
       case 5:timeStr += '五';break;
       case 6:timeStr += '六';break;
     }
     if(curHour < 10)
     {
       if(curMinute < 10)
       {
         if(curSec < 10)
         {
           timeStr += ' 0'+curHour+':0'+curMinute+':0'+curSec;
         }
         else
         {
           timeStr += ' 0'+curHour+':0'+curMinute+':'+curSec;
         }
       }
       else
       {
         if(curSec < 10)
         {
           timeStr += ' 0'+curHour+':'+curMinute+':0'+curSec;
         }
         else
         {
           timeStr += ' 0'+curHour+':'+curMinute+':'+curSec;
         }
       }
     }
     else
     {
       if(curMinute < 10)
       {
         if(curSec < 10)
         {
           timeStr += ' '+curHour+':0'+curMinute+':0'+curSec;
         }
         else
         {
           timeStr += ' '+curHour+':0'+curMinute+':'+curSec;
         }
       }
       else
       {
         if(curSec < 10)
         {
           timeStr += ' '+curHour+':'+curMinute+':0'+curSec;
         }
         else
         {
           timeStr += ' '+curHour+':'+curMinute+':'+curSec;
         }
       }
     }
     $("#time").text(timeStr);
   }