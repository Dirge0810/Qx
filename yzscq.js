/*************************************

项目名称：
支持版本：最新版
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/yzscq.js

[MITM]
hostname = buy.itunes.apple.com

*************************************/


var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1529887760,
    "receipt_creation_date" : "2023-07-08 18:25:19 Etc/GMT",
    "bundle_id" : "com.scanapp.sealtool",
    "original_purchase_date" : "2022-11-08 04:02:53 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1674836796000",
        "expires_date" : "2099-12-30 16:26:36 Etc/GMT",
        "expires_date_pst" : "2099-12-30 08:26:36 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "410001433424110",
        "is_trial_period" : "true",
        "original_transaction_id" : "410001433424110",
        "purchase_date" : "2023-01-27 16:26:36 Etc/GMT",
        "product_id" : "com.scanapp.seal.year.vip",
        "original_purchase_date_pst" : "2023-01-27 08:26:38 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1674836798000",
        "web_order_line_item_id" : "410000660179251",
        "expires_date_ms" : "4102302396000",
        "purchase_date_pst" : "2023-01-27 08:26:36 America/Los_Angeles",
        "original_purchase_date" : "2023-01-27 16:26:38 Etc/GMT"
      }
    ],
    "adam_id" : 1529887760,
    "receipt_creation_date_pst" : "2023-07-08 11:25:19 America/Los_Angeles",
    "request_date" : "2023-07-08 18:25:21 Etc/GMT",
    "request_date_pst" : "2023-07-08 11:25:21 America/Los_Angeles",
    "version_external_identifier" : 848855511,
    "request_date_ms" : "1688840721158",
    "original_purchase_date_pst" : "2022-11-07 20:02:53 America/Los_Angeles",
    "application_version" : "64",
    "original_purchase_date_ms" : "1667880173000",
    "receipt_creation_date_ms" : "1688840719000",
    "original_application_version" : "64",
    "download_id" : 501902423107225608
  },
  "pending_renewal_info" : [
    {
      "expiration_intent" : "1",
      "product_id" : "com.scanapp.seal.year.vip",
      "is_in_billing_retry_period" : "0",
      "auto_renew_product_id" : "com.scanapp.seal.year.vip",
      "original_transaction_id" : "410001433424110",
      "auto_renew_status" : "0"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1674836796000",
      "expires_date" : "2099-12-30 16:26:36 Etc/GMT",
      "expires_date_pst" : "2099-12-30 08:26:36 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "410001433424110",
      "is_trial_period" : "true",
      "original_transaction_id" : "410001433424110",
      "purchase_date" : "2023-01-27 16:26:36 Etc/GMT",
      "product_id" : "com.scanapp.seal.year.vip",
      "original_purchase_date_pst" : "2023-01-27 08:26:38 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20678923",
      "original_purchase_date_ms" : "1674836798000",
      "web_order_line_item_id" : "410000660179251",
      "expires_date_ms" : "4102302396000",
      "purchase_date_pst" : "2023-01-27 08:26:36 America/Los_Angeles",
      "original_purchase_date" : "2023-01-27 16:26:38 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
}

body = JSON.stringify(obj);
$done({body});
