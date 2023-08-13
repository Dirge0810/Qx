/*************************************

项目名称：音频剪辑
支持版本：1.1.39
下载地址：https://t.cn/A6pMonHW
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/yinpinjianji.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var Dirge = JSON.parse($response.body);

Dirge = {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1493256837,
    "receipt_creation_date" : "2022-10-14 03:01:38 Etc/GMT",
    "bundle_id" : "com.iuuapp.audiomaker",
    "original_purchase_date" : "2022-10-14 02:59:21 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1665716476000",
        "expires_date" : "2099-12-31 09:09:09 Etc/GMT",
        "expires_date_pst" : "2099-12-31 06:06:06 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "430001245618849",
        "is_trial_period" : "true",
        "original_transaction_id" : "430001245618849",
        "purchase_date" : "2022-10-14 03:01:16 Etc/GMT",
        "product_id" : "com.iuuapp.audiomaker.removeads.year",
        "original_purchase_date_pst" : "2022-10-13 20:01:17 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1665716477000",
        "web_order_line_item_id" : "430000589607615",
        "expires_date_ms" : "4102362549000",
        "purchase_date_pst" : "2022-10-13 20:01:16 America/Los_Angeles",
        "original_purchase_date" : "2022-10-14 03:01:17 Etc/GMT"
      }
    ],
    "adam_id" : 1493256837,
    "receipt_creation_date_pst" : "2022-10-13 20:01:38 America/Los_Angeles",
    "request_date" : "2022-10-14 03:01:48 Etc/GMT",
    "request_date_pst" : "2022-10-13 20:01:48 America/Los_Angeles",
    "version_external_identifier" : 852529409,
    "request_date_ms" : "1665716508909",
    "original_purchase_date_pst" : "2022-10-13 19:59:21 America/Los_Angeles",
    "application_version" : "1.1.34",
    "original_purchase_date_ms" : "1665716361000",
    "receipt_creation_date_ms" : "1665716498000",
    "original_application_version" : "1.1.34",
    "download_id" : 501831519125811260
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.iuuapp.audiomaker.removeads.year",
      "original_transaction_id" : "430001245618849",
      "auto_renew_product_id" : "com.iuuapp.audiomaker.removeads.year",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1665716476000",
      "expires_date" : "2099-12-31 09:09:09 Etc/GMT",
      "expires_date_pst" : "2099-12-31 06:06:06 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "430001245618849",
      "is_trial_period" : "true",
      "original_transaction_id" : "430001245618849",
      "purchase_date" : "2022-10-14 03:01:16 Etc/GMT",
      "product_id" : "com.iuuapp.audiomaker.removeads.year",
      "original_purchase_date_pst" : "2022-10-13 20:01:17 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20757857",
      "original_purchase_date_ms" : "1665716477000",
      "web_order_line_item_id" : "430000589607615",
      "expires_date_ms" : "4102362549000",
      "purchase_date_pst" : "2022-10-13 20:01:16 America/Los_Angeles",
      "original_purchase_date" : "2022-10-14 03:01:17 Etc/GMT"
    }
  ]
};

$done({body : JSON.stringify(Dirge)});
