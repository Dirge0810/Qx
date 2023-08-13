/*************************************

项目名称：有谱么
支持版本：3.37
下载地址：https://t.cn/A60Vxtkh
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/yopu\.co\/api\/user\/info url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/youpume.js

[mitm]
hostname = yopu.co

*************************************/


var Dirge = JSON.parse($response.body);

Dirge.level = 2;
Dirge.isMember = true;
Dirge.adsDisabled = true;
Dirge.adsDisabledTill = 4102336922000;

$done({ body: JSON.stringify(Dirge)});
