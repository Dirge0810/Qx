/*************************************

项目名称：牛津高阶词典第十版
软件版本：1.0.7
下载地址：https://is.gd/FfzLnu
使用声明：⚠️仅供参考，🈲️转载与售卖！

**********************************

[rewrite_local]
^https:\/\/oxfordx\.cp\.com\.cn\/api\/pay\/apple_notify url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/njgjcd.js

[mitm]
hostname = oxfordx.cp.com.cn

*************************************/



var body = JSON.parse($response.body);

body.data.user.is_vip = 1;
body.data.user.expire_date = "2099-12-31 04:01:05";

$done({ body: JSON.stringify(body) });
