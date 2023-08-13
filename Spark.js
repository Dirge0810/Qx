/*************************************

项目名称：Spark
软件版本：3.3.5
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/Spark.js

[mitm] 
hostname = api.revenuecat.com

************************************/


const Dirge = {};
const Dirge1 = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  lovebaby.headers = $request.headers;
} else if (doudou1 && doudou1.subscriber) {
  Dirge1.subscriber.subscriptions = doudou1.subscriber.subscriptions || {};
  Dirge1.subscriber.entitlements = doudou1.subscriber.entitlements || {};

  const data = {
    "expires_date": "2099-12-31T00:00:00Z",
    "original_purchase_date": "2022-11-18T03:57:16Z",
    "purchase_date": "2022-11-18T04:00:12Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  Dirge1.subscriber.subscriptions["spark_5999_1y_1w0"] = data;
  Dirge1.subscriber.entitlements["premium"] = JSON.parse(JSON.stringify(data));
  Dirge1.subscriber.entitlements["premium"].product_identifier = "spark_5999_1y_1w0";

  Dirge.body = JSON.stringify(Dirge1);
}

$done(Dirge);
