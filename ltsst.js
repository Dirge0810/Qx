/*************************************

项目名称：旅途随身听
支持版本：2.5.1
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/www\.1314zhilv\.com\/ltsstnew\/(user.*\/getInfo|guideScenic) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/ltsst.js

[mitm]
hostname = www.1314zhilv.com

*************************************/


var body = $response.body

body = body.replace(/\"identityType":\d+/g, '\"identityType":2');
body = body.replace(/\"levDesc":".*?"/g,'\"levDesc":"永久会员"');
body = body.replace(/\"isActivate":\d+/g,'\"isActivate":1');
body = body.replace(/\"audioType":\d+/g, '\"audioType":1');
body = body.replace(/\"isAudition":\d+/g, '\"isAudition":2');

$done({body});
