/*************************************

项目名称：Calendars
软件版本：5.26.4
下载地址：https://is.gd/xXuYsA
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/license\.pdfexpert\.com\/api\/.+\/calendarslite\/subscription\/refresh url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/Calendars.js

[mitm]
hostname = license.pdfexpert.com

*************************************/


var Dirge = JSON.parse($response.body);

Dirge = {
  "originalTransactionId" : 490001314520000,
  "inAppStates" : [
    {
      "originalTransactionId" : 490001314520000,
      "productId" : "com.readdle.CalendarsLite.subscription.year20trial7",
      "subscriptionState" : "trial",
      "productName" : "subscription",
      "subscriptionExpirationDate" : "06:06 31/12/2099",
      "isEligibleForIntroPeriod" : false,
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "type" : "subscription",
      "isInGracePeriod" : false,
      "isInBillingRetryPeriod" : false,
      "entitlements" : [
"ios.pe.subscription.CalendarsLite"
      ]
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.CalendarsLite",
  "receiptId" : 1671234567890,
  "statisticsInfo" : {
    "events" : [

    ]
  },
  "externalId" : "2f1fa60b-19a4-4d6e-9a1c-4d09569979c5"
};

$done({body : JSON.stringify(Dirge)});
