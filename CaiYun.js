/*************************************

项目名称：彩云天气-适用于6.11.0版本及以下
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/biz\.caiyunapp\.com\/v2\/user\? url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/CaiYun1.js

[mitm] 
hostname = biz.caiyunapp.com

************************************/


if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj.result) {
  obj.result.svip_given = 365;
  obj.result.is_phone_verified = true;
  obj.result.is_xy_vip = true;
  obj.result.vip_expired_at = 4030000000.16;
  obj.result.is_vip = true;
  obj.result.xy_svip_expire = 4030000000.16;
  if (obj.result.wt) {
    if (obj.result.wt.vip) {
      obj.result.wt.vip.enabled = true;
      obj.result.wt.vip.expired_at = 4030000000.16;
      obj.result.wt.vip.svip_expired_at = 4030000000.16;
    }
    obj.result.wt.svip_given = 365;
  }
  obj.result.is_primary = true;
  obj.result.xy_vip_expire = 4030000000.16;
  obj.result.svip_expired_at = 4030000000.16;
  obj.result.vip_type = "s";
}

$done({ body: JSON.stringify(obj) });
