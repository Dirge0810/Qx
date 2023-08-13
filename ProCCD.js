/*************************************

项目名称：ProCCD
支持版本：3.2.0
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/ProCCD.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var Dirge = JSON.parse($response.body);
Dirge = {
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "doudou",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1688386973000",
      "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
      "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "540001260447637",
      "is_trial_period": "false",
      "original_transaction_id": "540001260447637",
      "product_id": "doudou",
      "original_purchase_date_ms": "1688386974000",
      "expires_date_ms": "148204937166000"
    }
  ]
}
$done({ body: JSON.stringify(Dirge) });
