/*************************************

项目名称：小兔充充-微信小程序
支持版本：
下载地址：
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/ad\.xiaotucc\.com\/advert url reject ^https:\/\/mapi\.xiaotucc\.com\/(mall\/main|main_page\/index\/getActivity) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/xiaotucc.js

[mitm] 
hostname = ad.xiaotucc.com, mapi.xiaotucc.com 

************************************/


if(-1!=$request.url.indexOf("main_page/index/getActivity")){
 let obj=JSON.parse($response.body);
 delete obj.data.p3;
 $done({body: JSON.stringify(obj)});
}
else if(-1!=$request.url.indexOf("mall/main")){
 let obj=JSON.parse($response.body);
 delete obj.data;
 $done({body: JSON.stringify(obj)});
}
else $done($response);
