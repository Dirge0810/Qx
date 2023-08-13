/*************************************

项目名称：泼辣-Surge专用
软件版本：6.8.7
下载地址：https://is.gd/LhIWDL
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/.*\/v1\/payments\/(appleiap\/receipts\/confirmation|profiles\/@me\/subscription) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/pola-surge.js
[mitm] 
hostname = api.polaxiong.com

************************************/

const res = $response;
const req = $request;

const p1 = /appleiap\/receipts\/confirmation/
const p2 = /profiles\/@me\/subscription/
const p3 = /ppe\/users\/[0-9a-fA-F]{32}/


function handleResponse(data) {
  $done({
    body: JSON.stringify(data),
    status: 200,
    headers: res.headers
  });
}

if (res.body && req.method === "PUT" && p1.test(req.url)) {
  const data = {
    "app": "PPE",
    "planType": "yearly",
    "planTier": "studio",
    "isUnlimited": true,
    "membershipExpiryDate": "2028-06-06T08:00:00.000Z"
  };
  handleResponse(data);
}

if (res.body && req.method === "GET" && p2.test(req.url)) {
  const data = {
    "app": "PPE",
    "planId": "co.polarr.ppe.premium.studio.yearly",
    "isTrial": false,
    "isUnlimited": true,
    "membershipExpiryDate": "2099-12-31-03-03T06:10:24.000Z",
    "planTier": "studio",
    "startDate": "2023-02-03T06:10:24.000Z",
    "expiryDate": "2099-12-31-03-03T06:10:24.000Z",
    "isSubscribed": true,
    "planType": "yearly",
    "subscriptionProduct": "yearly",
    "subscriptionTier": "studio",
    "paymentChannel": "AppleIapSubscription"
  };
  handleResponse(data);
}

if (res.body && req.method === "GET" && p3.test(req.url)) {
  const data = {
    "app": "PPE",
    "planId": "co.polarr.ppe.premium.studio.yearly",
    "isTrial": false,
    "isUnlimited": true,
    "membershipExpiryDate": "2099-12-31-03-03T06:10:24.000Z",
    "planTier": "studio",
    "startDate": "2023-02-03T06:10:24.000Z",
    "expiryDate": "2099-12-31T06:10:24.000Z",
    "isSubscribed": true,
    "planType": "yearly",
    "subscriptionProduct": "yearly",
    "subscriptionTier": "studio",
    "paymentChannel": "AppleIapSubscription"
  };
  handleResponse(data);
}

$done({});
