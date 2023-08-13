/*************************************

项目名称：NFC
支持版本：5.11.0
下载地址：https://apps.apple.com/app/id1249686798
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.qonversion\.io\/v1\/user\/init url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/NFC.js

[mitm] 
hostname = api.qonversion.io

************************************/


var Dirge = JSON.parse($response.body);
Dirge.data["permissions"] = [{
    "id": "permission_webhook",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_unlimited_pdf_pages",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_unlimited_qr_code_widgets",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_ad_free",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_appicon_dark_rainbow",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_appicon_gold",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_appicon_hackergreen",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_appicon_rainbow",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_appicon_rastafari",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly", 
}, {
    "id": "permission_appicon_ruby",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly", 
}, {
    "id": "permission_speech_synthesizer",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_theme_englishgreen",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_theme_gold",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_theme_hackergreen",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_theme_horsered",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_theme_purplehaze",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_unlimited",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}]
$done({body: JSON.stringify(Dirge)});
