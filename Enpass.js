/*************************************

项目名称：Enpass
支持版本：6.8.3
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/license\.enpass\.io\/api\/v1\/subscription\/me url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/Enpass.js

[mitm] 
hostname = license.enpass.io

************************************/


var obj = JSON.parse($response.body);

obj.license = "premium";
obj.info = {
  purchase_type: "inapp",
  store: "ios",
  id: "ENP_IAP_LTP",
  userid: "000000",
  transaction_id: "1000000000000000",
  logo: ""
};

$done({ body: JSON.stringify(obj) });
