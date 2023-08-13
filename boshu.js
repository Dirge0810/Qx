/*************************************

项目名称：博树
支持版本：27.22.0
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.busuu\.com\/users\/me url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/boshu.js

[mitm] 
hostname = api.busuu.com

************************************/


var Dirge = JSON.parse($response.body);

Dirge.data.access = {"tier": "plus"};

$done({ body: JSON.stringify(Dirge) });
