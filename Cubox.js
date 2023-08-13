/*************************************

项目名称：Cubox
软件版本：7.5.6
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/cubox\.pro\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/Cubox.js

[mitm] 
hostname = cubox.pro

************************************/


var Dirge = JSON.parse($response.body);

Dirge.data.isExpire = false;
Dirge.data.expireTime ="2099-12-31T06:06:06Z";
Dirge.data.nickName ="小仙女";

$done({ body: JSON.stringify(Dirge) });
