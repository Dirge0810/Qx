/*************************************

项目名称：HashPhotos相册清理
支持版本：5.2.0
下载地址：https://t.cn/A60U9MNj
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/HashPhotos.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var Dirge = JSON.parse($response.body);

Dirge = {
  "status" : 0,
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1438388363,
    "receipt_creation_date" : "2023-06-06 16:06:26 Etc/GMT",
    "bundle_id" : "com.kobaltlab.HashPhotos",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1686065612000",
        "transaction_id" : "490001314520000",
        "is_trial_period" : "false",
        "original_transaction_id" : "490001314520000",
        "purchase_date" : "2023-06-06 16:06:06 Etc/GMT",
        "product_id" : "com.kobaltlab.HashPhotos.iap.allinone.free",
        "original_purchase_date_pst" : "2023-06-06 06:06:07 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1686065613000",
        "purchase_date_pst" : "2023-06-06 06:06:06 America/Los_Angeles",
        "original_purchase_date" : "2023-06-06 16:06:07 Etc/GMT"
      }
    ],
    "original_purchase_date" : "2023-06-06 16:00:00 Etc/GMT",
    "adam_id" : 1438388363,
    "receipt_creation_date_pst" : "2023-06-06 06:06:26 America/Los_Angeles",
    "request_date" : "2023-06-06 16:06:27 Etc/GMT",
    "request_date_pst" : "2023-06-06 06:06:27 America/Los_Angeles",
    "version_external_identifier" : 888888888,
    "request_date_ms" : "1686065635000",
    "original_purchase_date_pst" : "2023-06-06 06:00:00 America/Los_Angeles",
    "application_version" : "23177",
    "original_purchase_date_ms" : "1686065430000",
    "receipt_creation_date_ms" : "1686065634000",
    "original_application_version" : "23177",
    "download_id" : 666666666666666600
  },
  "Author" : "Dirge",
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1686065612000",
      "transaction_id" : "490001314520000",
      "is_trial_period" : "false",
      "original_transaction_id" : "490001314520000",
      "purchase_date" : "2023-06-06 16:06:06 Etc/GMT",
      "product_id" : "com.kobaltlab.HashPhotos.iap.allinone.free",
      "original_purchase_date_pst" : "2023-06-06 06:06:07 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1686065613000",
      "purchase_date_pst" : "2023-06-06 06:06:06 America/Los_Angeles",
      "original_purchase_date" : "2023-06-06 16:06:07 Etc/GMT"
    }
  ],
  "latest_receipt" : "Dirge",
  "environment" : "Production",
  "pending_renewal_info" : [
    {
      "product_id" : "com.kobaltlab.HashPhotos.iap.allinone.free",
      "original_transaction_id" : "490001314520000",
      "auto_renew_product_id" : "com.kobaltlab.HashPhotos.iap.allinone.free",
      "auto_renew_status" : "1"
    }
  ],
};

$done({body : JSON.stringify(Dirge)});
