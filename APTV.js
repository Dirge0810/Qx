/*************************************

项目名称：APTV
软件版本：1.2.4
下载地址：https://is.gd/inlPLD
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com/v\d/(subscribers/(\$RCAnonymousID\%)?(\w)+|receipts)$ url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/APTV.js

[mitm] 
hostname = api.revenuecat.com

************************************/


var Dirge = JSON.parse($response.body);
   
    Dirge = {
   "request_date_ms" : 1662904006346,
   "request_date" : "2022-09-11T13:46:46Z",
   "subscriber" : {
     "last_seen" : "2022-09-11T13:44:09Z",
     "first_seen" : "2022-09-11T13:44:09Z",
     "original_application_version" : "70",
     "other_purchases" : {
 
     },
     "management_url" : "https://apps.apple.com/account/subscriptions",
     "subscriptions" : {
       "com.kimen.aptvpro.lifetime" : {
         "is_sandbox" : false,
         "ownership_type" : "PURCHASED",
         "billing_issues_detected_at" : null,
         "period_type" : "normal",
         "expires_date" : null,
         "grace_period_expires_date" : null,
         "unsubscribe_detected_at" : null,
         "original_purchase_date" : "2022-09-11T13:45:07Z",
         "purchase_date" : "2022-09-11T13:45:06Z",
         "store" : "app_store"
       }
     },
     "entitlements" : {
       "pro" : {
         "expires_date" : null,
         "purchase_date" : "2022-09-11T13:45:06Z",
         "product_identifier" : "com.kimen.aptvpro.lifetime",
         "grace_period_expires_date" : null
       }
     },
     "original_purchase_date" : "2022-09-11T13:29:47Z",
     "original_app_user_id" : "6666666666666666666",
     "non_subscriptions" : {
 
     }
   }
 }
 

$done({body : JSON.stringify(Dirge)});
