/*************************************

项目名称：滴答清单
支持版本：6.3.80
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/ddqd.js

[mitm] 
hostname = dida365.com, ticktick.com

************************************/


var body = JSON.parse($response.body);

body["proEndDate"] = "2099-12-31T00:00:00.000+0000";
body["needSubscribe"] = false;
body["pro"] = true;

$done({ body: JSON.stringify(body) });
