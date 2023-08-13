/*************************************

项目名称：车票票
支持版本：1.1.4
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/chepiaopiao.js

[MITM]
hostname = api.revenuecat.com

************************************/


var Dirge = JSON.parse($response.body);
Dirge.subscriber.entitlements = {
  "vip": {
    "expires_date": null,
    "product_identifier": "eticket_6_life",
    "purchase_date": "2023-03-13T03:33:33Z"
  }
};
Dirge.subscriber.original_purchase_date = "2023-03-13T03:33:33Z";
Dirge.subscriber.subscriptions = {
  "eticket_6_life": {
    "expires_date": null,
    "original_purchase_date": "2023-03-13T03:33:33Z",
    "purchase_date": "2023-03-13T03:33:33Z"
  }
};
$done({ body: JSON.stringify(Dirge) });
