/*************************************

项目名称：古茗-微信小程序净化
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/newton\.gumingnc\.com\/newton-buyer\/newton\/buyer\/(ump|touch|external\/front) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/ming.js

[mitm] 
hostname = newton.gumingnc.com

************************************/


let obj=JSON.parse($response.body);
obj.data=[];
$done({body: JSON.stringify(obj)});
