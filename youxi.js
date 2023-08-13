/*************************************

项目名称：悠洗
支持版本：
下载地址：
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.ulife\.group\/signintask\/adServing url reject-dict

^https:\/\/api\.ulife\.group\/auth\/account\/getUpgradeStrategy url reject-dict

^https:\/\/api\.ulife\.group\/market\/frontEntrance\/getThirdAdvertising\?displayPort=1&type=15 url reject-dict

^https:\/\/api\.ulife\.group\/market\/memberCard\/listMemberCard\?isShowSecondaryCard=1 url reject-dict

^https:\/\/api\.ulife\.group\/auth\/account\/entrance url reject-dict

^https:\/\/api\.ulife\.group\/market\/homeIconDetail\/list\/v7 url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/youxi.js

[mitm] 
hostname = api.ulife.group

************************************/


let obj=JSON.parse($response.body);
obj.data.topFunctionalArea.splice(5);
$done({body: JSON.stringify(obj)});
