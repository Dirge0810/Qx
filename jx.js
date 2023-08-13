/*************************************

项目名称：简讯
支持版本：5.0.10
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.tipsoon\.com\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/jx.js

[mitm] 
hostname = api.tipsoon.com

************************************/


re('is_vip":false@expire_time":"\\d{4}','is_vip":true@expire_time":"2099')
function re(){var e=$response.body;if(arguments[0].includes("@")){var n=arguments[0].split("@"),r=arguments[1].split("@");for(i=0;i<n.length;i++)var l=new RegExp(n[i],"g"),e=e.replace(l,r[i])}else{l=new RegExp(arguments[0],"g");e=e.replace(l,arguments[1])}$done(e)}
