/*************************************

项目名称：Filmic Pro
支持版本：7.5.1
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/filmicpro\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/Filmic-Pro.js

[mitm]
hostname = filmicpro.oracle.bendingspoonsapps.com

*************************************/


var Dirge = JSON.parse($response.body);

Dirge["me"]["active_subscriptions_ids"] = ["com.cinegenix.filmic.pro.1y_t80_1w_bis"];
Dirge["me"]["active_bundle_subscriptions"] = [{
   "expiry" : "2099-09-09T09:09:09+00:00",
   "product_id" : "com.cinegenix.filmic.pro.1y_t80_1w_bis",
   "features" : ["unlock"]
  }];
Dirge["settings"]["__identity__"]["expiration"] = "2099-09-09T09:09:09.09+00:00";

$done({body : JSON.stringify(Dirge)});
