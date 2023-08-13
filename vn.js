/*************************************

项目名称：VN
支持版本：1.70.1
下载地址：https://t.cn/A6f4hPxo
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api2\.vlognow\.me\/vn-pay\/api\/v1\/public\/iap\/receipt\/status?(.*?)*$ url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/vn.js

[mitm]
hostname = api2.vlognow.me

*************************************/


var Dirge = JSON.parse($response.body);

    Dirge = {
  "msg" : "success",
  "data" : [
    {
      "origin_transaction_id" : "1314",
      "is_free_trial" : false,
      "active" : true,
      "product_identifier" : "Product_Auto_Renew_Annual_2022_05_13",
      "enanled_auto_renew" : false,
      "is_gift_subscription" : false,
      "platform" : "iOS",
      "billing_date_ms" : 1668673883000,
      "original_purchase_date_ms" : 1668673708000,
      "start_date_ms" : 1668673703000,
      "expires_date_ms" : 4102362549000,
      "status" : 1,
      "group_identifier" : "20936308"
    }
  ],
  "code" : 1
}

$done({body : JSON.stringify(Dirge)});
