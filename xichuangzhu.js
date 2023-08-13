/*************************************

项目名称：西窗烛
软件版本：6.1.8
下载地址：https://is.gd/8VE3fz
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/lchttpapi\.xczim\.com\/1.1\/users url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/xichuangzhu.js

[mitm] 
hostname = lchttpapi.xczim.com

************************************/


var Dirge = JSON.parse($response.body);

Dirge.username = "小仙女";
Dirge.membership = true;
Dirge.lifetimeMembership = true;
Dirge.avatar.url = "https://raw.githubusercontent.com/Dirge0810/Qx/main/gougou.jpg";

$done({ body: JSON.stringify(Dirge) });
