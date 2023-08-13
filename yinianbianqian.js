/*************************************

项目名称：一念便签
软件版本：2.5.9
下载地址：https://is.gd/i7fXaZ
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/yinian\.pro\/api\/user url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/yinianbianqian.js

[mitm] 
hostname = yinian.pro

************************************/


var Dirge = JSON.parse($response.body);

Dirge.data.is_vip = 1;
Dirge.data.vip_end_time = "6666-06-06 06:06:06";

$done({ body: JSON.stringify(Dirge) });
