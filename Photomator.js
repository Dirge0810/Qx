/*************************************

项目名称：Photomator
软件版本：3.0.11
下载地址：https://t.cn/A60W87es
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/Photomator.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Dirge0810/Qx/main/Photomator.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const Dirge = {};
const Dirge1 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "pixelmator_photo_pro_access";
const Dirge2 = "pixelmator_photo_lifetime_v1";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Dirge.headers = $request.headers;
} else if (doudou1 && Dirge1.subscriber) {
  data = {
 "Author": "Dirge",
 //"expires_date": "2099-09-09T09:09:09Z",
 "purchase_date": "2022-09-09T09:09:09Z"
 };
  Dirge1.subscriber.subscriptions[(Dirge2)] = {
 "Author": "Dirge",
 "original_purchase_date": "2022-09-09T09:09:09Z",
 "period_type" : "trial",
 "purchase_date": "2022-09-09T09:09:09Z",
 //"expires_date": "2099-09-09T09:09:09Z",
 "store" : "app_store",
 "ownership_type": "PURCHASED"
 };
  Dirge1.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  Dirge1.subscriber.entitlements[(name)].product_identifier = (Dirge);
  Dirge.body = JSON.stringify(Dirge1);
}

$done(Dirge);
