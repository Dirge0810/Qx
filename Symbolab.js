/*************************************

项目名称：Symbolab (需要登录)
支持版本：10.1.2
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/Symbolab.js

[mitm]
hostname = scibug.com

*************************************/


let Dirge = JSON.parse($response.body);

Dirge= {"valid":true,"hasUserConsumedAppleFreeTrial":false,"isCurrentlyInFreeTrial":false,"newlyAssociated":false,"membership":{"isCurrentlyInFreeTrial":false,"valid":true,"hasUserConsumedAppleFreeTrial":false,"newlyAssociated":false}}

$done({body: JSON.stringify(Dirge)});
