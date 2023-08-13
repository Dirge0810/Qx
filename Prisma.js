/*************************************

项目名称：Prisma
支持版本：4.7.9
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.neuralprisma\.com\/receipt\/ios\/status\/prisma url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/Prisma.js

[mitm] 
hostname = api.neuralprisma.com

************************************/


var Dirge = JSON.parse($response.body);

Dirge.is_valid = true;
Dirge.expiration_date_unix = 148204937166;
Dirge.expiration_date = "2099-12-31T06:06:06Z";

$done({ body: JSON.stringify(Dirge) });
