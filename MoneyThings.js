/*************************************

项目名称：MoneyThings
支持版本：10.3
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com/v\d/(subscribers/(\$RCAnonymousID\%)?(\w)+|receipts)$ url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/MoneyThings.js

[mitm] 
hostname = api.revenuecat.com

************************************/


let obj = JSON.parse($response.body || '{}');

if (obj.subscriber) {
        obj.subscriber.subscriptions = {
                "com.lishaohui.cashflow.yearlysubscription" : {
                        "is_sandbox" : false,
                        "ownership_type" : "PURCHASED",
                        "billing_issues_detected_at" : null,
                        "period_type" : "normal",
                        "expires_date" : "2099-03-06T00:04:32Z",
                        "grace_period_expires_date" : null,
                        "unsubscribe_detected_at" : null,
                        "original_purchase_date" : "2022-03-06T00:04:33Z",
                        "purchase_date" : "2022-03-06T00:04:32Z",
                        "store" : "app_store"
                }
        };
        obj.subscriber.entitlements = {
		            "Premium" : {
                        "grace_period_expires_date" : null,
                        "purchase_date" : "2022-03-06T00:04:32Z",
                        "product_identifier" : "com.lishaohui.cashflow.yearlysubscription",
                        "expires_date" : "2023-03-06T00:04:32Z"
                }
	      };
}

$done({
        body: JSON.stringify(obj)
});
