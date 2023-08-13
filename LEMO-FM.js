/*************************************

项目名称：LEMO FM
支持版本：1.9.2
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/LEMO-FM.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Dirge0810/Qx/main/LEMO-FM.js

[mitm] 
hostname = api.revenuecat.com

************************************/


const Dirge = {};
const Dirge1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Dirge.headers = $request.headers;
} else if (doudou1 && Dirge1.subscriber) {
  Dirge1.subscriber.subscriptions = Dirge1.subscriber.subscriptions || {};
  Dirge1.subscriber.entitlement = Dirge1.subscriber.entitlement || {};
  const app = 'dd';const list = {'dd':{name: 'PLUS', id: 'com.LEMO.LemoFm.plus.lifetime.l3'}};
  const data = {
    "expires_date": "2099-12-31T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"};
for (const i in list) { if (new RegExp(`^${i}`, `i`).test(app)) {
Dirge1.subscriber.subscriptions[list[i].id] = data;
Dirge1.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
Dirge1.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
                break;
          }
    }
    Dirge.body = JSON.stringify(Dirge1);
}

$done(Dirge); 
