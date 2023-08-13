/*************************************

项目名称：PV
支持版本：7.0.7
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/1959850262196600\.cn-hangzhou\.fc\.aliyuncs\.com\/2016-08-15\/proxy\/guide-hello_world\.current\/getUserInfov2\/ url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/PV.js

[mitm] 
hostname = 1959850262196600.cn-hangzhou.fc.aliyuncs.com

************************************/


let obj = JSON.parse($response.body);
   
    obj = {
    "result" : "ok",
    "user" : {
      "should_sync" : false,
      "current_size" : 0,
      "language" : "zh-Hans",
      "total_files" : 0,
      "total_size" : 0,
      "trial_expire_time" : null,
      "expire_delete_time" : null,
      "expire_time" : 4102415999,
      "aliwei_receipt_id" : null,
      "current_receipt_type" : "IOS",
      "ios_permenent_id" : null,
      "is_permenent" : false,
      "aliwei_permenent_id" : null,
      "id" : null,
      "total_size_string" : "0",
      "product_id" : "com.camerasideas.photovault.membership.yearly",
      "email" : "null",
      "google_permenent_id" : null,
      "receipt_id" : null,
      "update_time" : 1643488725.855664,
      "google_receipt_id" : null
    }
}

$done({body : JSON.stringify(obj)});
