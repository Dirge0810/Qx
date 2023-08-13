/*************************************

项目名称：MOZE 3.0
支持版本：3.5.27
下载地址：https://t.cn/A60ABDWL
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/MOZE.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Dirge0810/Qx/main/MOZE.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const Dirge01 = {};
const Dirge02 = JSON.parse(typeof $response != "undefined" && $response.body || null);const app = 'cm';const list = {'cm':{name: 'MOZE_PREMIUM_SUBSCRIPTION', id: 'MOZE_PRO_SUBSCRIPTION_YEARLY_BASIC'}};
const data = {
	"Author": "Dirge",
	"original_purchase_date": "2022-09-09T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z",
	"expires_date": "2099-12-31T09:09:09Z",
	"ownership_type": "PURCHASED"
};

if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"];
	delete $request.headers["X-RevenueCat-ETag"];
	doudou01.headers = $request.headers;
} else if (Dirge02 && Dirge02.subscriber) {
	Dirge02.subscriber.subscriptions = Dirge02.subscriber.subscriptions || {};
	Dirge02.subscriber.entitlement = Dirge02.subscriber.entitlement || {};
     for (const i in list) {
if (new RegExp(`^${i}`, `i`).test(app)) {
	Dirge02.subscriber.subscriptions[list[i].id] = data;
	Dirge02.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
	Dirge02.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
			break;
		}
	}
  Dirge01.body = JSON.stringify(Dirge02);
}

$done(Dirge01);
