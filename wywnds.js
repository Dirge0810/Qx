/*************************************

项目名称：网易蜗牛读书
支持版本：1.9.69
下载地址：https://t.cn/A6NBBLeU
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/wywnds.js

[mitm]
hostname = p.du.163.com

*************************************/


var body=$response.body;

Dirge = body.replace(/tradeEndTime\":\d+/g,'tradeEndTime":4102362549000');

$done(Dirge);
