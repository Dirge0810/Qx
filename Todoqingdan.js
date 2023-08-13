/*************************************

项目名称：Todo清单
支持版本：2.41
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/www\.evestudio\.cn\/todoList\/getDetailUser url script-response-body https://raw.githubusercontent.com/Dirge0810/main/Todoqingdan.js

[mitm] 
hostname = www.evestudio.cn

************************************/


var Dirge = JSON.parse($response.body);

Dirge.data.vip = true;
Dirge.data.vipDeadTime = 4102352080000;
Dirge.data.userName = "小仙女";
Dirge.data.userAccount = "小仙女";

$done({ body: JSON.stringify(Dirge)});
