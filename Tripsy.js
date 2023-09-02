/*************************************

项目名称：Tripsy
软件版本：2.16.12
下载地址：https://is.gd/Qg6g8X
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/firstclass\.tripsy\.app\/api\/v1\/receipt\/update\? url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/Tripsy.js

[mitm]
hostname = firstclass.tripsy.app

*************************************/


var body = JSON.parse($response.body);

body.is_premium = true,
body.expiration_intent = 0,
body.is_trial = true,
body.subscription = "premium.yearly.59.99.v3",
body.expiration_date = "2099-12-31T12:00:00Z",
body.is_introductory_offer = false,
body.is_in_billing_retry_period = false

$done({ body: JSON.stringify(body) });