/*************************************

项目名称：指尖时光
支持版本：6.3.70
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/integral2\.dasyibalang\.com\/v2\/User url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/zjsg.js

[mitm] 
hostname = integral2.dasyibalang.com

************************************/


var Dirge = $response.body;

Dirge = Dirge.replace(/"VIP":\d+/g, '"VIP":1');

$done({ body: Dirge });
