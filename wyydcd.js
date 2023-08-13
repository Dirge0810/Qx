/*************************************

项目名称：网易有道词典
支持版本：9.2.62
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/dict\.youdao\.com\/vip\/user\/status url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/wyydcd.js

[mitm] 
hostname = dict.youdao.com

************************************/

let obj = JSON.parse($response.body);
   
    obj = {
    "vip" : true,
    "svip" : true,
    "expire" : 4102362549000,
    "permissions" : [
      "ONE_MONTH",
      "AUTO_SUBSCRIPTION"
    ],
    "tag" : "TAG_RENEW_EXPECTED",
    "auto" : true,
    "open" : true,
    "planIds" : [
      "22"
    ],
    "svipExpire" : 4102362549000,
    "purchasedPlanIds" : [
      "22"
    ],
}

$done({body : JSON.stringify(obj)});
