/*************************************

项目名称：已阅
支持版本：2.7.9
下载地址：https://t.cn/A60L5dGz
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/yiyue.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Dirge0810/Qx/main/yiyue.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const Dirge01 = {};
const Dirge02 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Dirge01.headers = $request.headers;
} else if (Dirge02 && Dirge02.subscriber) {
  Dirge02.subscriber.subscriptions = Dirge02.subscriber.subscriptions || {};
  Dirge02.subscriber.entitlement = Dirge02.subscriber.entitlement || {};
  const app = 'cm';const list = {'cm':{name: 'vip', id: 'com.vip.forever_1'}};
  const data = {
   "Author": "Dirge",
   "original_purchase_date": "2022-09-09T09:09:09Z",
   "purchase_date": "2022-09-09T09:09:09Z",
   "ownership_type": "PURCHASED"};
for (const i in list) { if (new RegExp(`^${i}`, `i`).test(app)) {
  Dirge02.subscriber.subscriptions[list[i].id] = data;
  Dirge02.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
  Dirge02.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
                break;
          }
    }
    Dirge01.body = JSON.stringify(Dirge02);
}

$done(Dirge02);
