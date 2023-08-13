/*************************************

项目名称：青桔-微信小程序
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=cms\.htw\.delivery url reject-dict

^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.combineHomepageInfo url reject-dict

^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.mallRecommend url reject-dict

^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.homeConfig url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/qingju.js

[mitm] 
hostname = htwkop.xiaojukeji.com

************************************/


let obj=JSON.parse($response.body);
delete obj.data.bannerInfoConfig ;
$done({body: JSON.stringify(obj)});
