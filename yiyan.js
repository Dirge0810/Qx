/*************************************

项目名称：一言
下载地址：https://t.cn/Aini0veg
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/app\.yiyan\.art\/yiyan url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/yiyan.js

[mitm]
hostname = app.yiyan.art

*************************************/


var Dirge = $response.body.replace(/viptype":"\d+"/g, 'viptype":"4"').replace(/banner":\[.+\]/g, 'banner":[]');$done(Dirge);
