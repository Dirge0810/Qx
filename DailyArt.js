/*************************************

项目名称：每日艺术
软件版本：5.0.9
下载地址：https://t.cn/A6pXNOM5
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.getdailyart\.com\/api\/(subscription\/verified|auth\/login|check-logged) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/DailyArt.js

[mitm]
hostname = api.getdailyart.com

*************************************/


var Dirge = JSON.parse($response.body);
const vipa = '/api/subscription/verified';
const vipb = '/api/auth/login';
const vipc = '/api/check-logged';
const vip = {
    "auto_resume_date" : null,
    "status" : "active",
    "account_type" : "patron-annual",
    "cancel_date" : null,
    "start_date" : "2023-05-22T11:37:17.000000Z",
    "expire_date" : "2099-12-31T09:09:09.000000Z"
  };

if ($request.url.indexOf(vipa) != -1){
  Dirge.data = (vip);
}

if ($request.url.indexOf(vipb) != -1){
  Dirge.user.subscription = (vip)
  Dirge.user.account_type = "patron-annual";
}

if ($request.url.indexOf(vipc) != -1){
  Dirge.subscription = (vip)
  Dirge.account_type = "patron-annual";
}

$done({body : JSON.stringify(Dirge)});
