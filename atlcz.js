/*************************************

项目名称：凹凸啦查妆
支持版本：4.1.0
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/.{36}|subscribers\/\w{14})$ url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/atlcz.js

[mitm] 
hostname = api.revenuecat.com

************************************/


let obj = JSON.parse($response.body);
   
    obj = {
    "request_date_ms" : 1686093504641,
    "request_date" : "2023-06-06T23:18:24Z",
    "subscriber" : {
      "non_subscriptions" : {
  
      },
      "first_seen" : "2023-06-06T23:15:15Z",
      "original_application_version" : "150",
      "other_purchases" : {
  
      },
      "management_url" : "https://apps.apple.com/account/subscriptions",
      "subscriptions" : {
        "com.smartitfarmer.MakeUpAssistant.Month" : {
          "original_purchase_date" : "2023-06-06T23:16:37Z",
          "expires_date" : "2099-12-31T23:16:36Z",
          "is_sandbox" : false,
          "refunded_at" : null,
          "unsubscribe_detected_at" : null,
          "grace_period_expires_date" : null,
          "period_type" : "trial",
          "purchase_date" : "2023-06-06T23:16:36Z",
          "billing_issues_detected_at" : null,
          "ownership_type" : "PURCHASED",
          "store" : "app_store",
          "auto_resume_date" : null
        }
      },
      "entitlements" : {
        "Pro access" : {
          "grace_period_expires_date" : null,
          "purchase_date" : "2023-06-06T23:16:36Z",
          "product_identifier" : "com.smartitfarmer.MakeUpAssistant.Month",
          "expires_date" : "2099-12-31T23:16:36Z"
        }
      },
      "original_purchase_date" : "2023-06-06T23:14:34Z",
      "original_app_user_id" : "",
      "last_seen" : "2023-06-06T23:15:15Z"
    }
}

$done({body : JSON.stringify(obj)});
