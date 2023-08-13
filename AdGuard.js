/*************************************

项目名称：AdGuard-美区
软件版本：4.5
下载地址：
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/mobile-api\.adguard\.org\/api\/2\.0\/ios_validate_receipt\/ADG_EXT url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/AdGuard.js

[mitm] 
hostname = mobile-api.adguard.org

************************************/


var Dirge = JSON.parse($response.body);

Dirge = {
    "products": [{
        "premium_status": "ACTIVE",
        "product_id": "com.adguard.lifetimePurchase"
    }]
}

$done({
    body: JSON.stringify(Dirge)});
