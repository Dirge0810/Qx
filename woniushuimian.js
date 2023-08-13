/*************************************

项目名称：蜗牛睡眠
支持版本：6.6.8
下载地址：https://t.cn/A6NBzdYh
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/snailsleep\.net\/snail\/v\d\/profile\/get.+ url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/woniushuimian.js

[mitm]
hostname = snailsleep.net

*************************************/


var Dirge= JSON.parse($response.body);

Dirge = {
  "status" : 200,
  "message" : "OK",
  "result" : {
    "points" : 0,
    "updated" : 1684116994159,
    "expired" : false,
    "expiresRAD" : 4102362549000,
    "offerPeriod" : false,
    "expires" : 4102362549000,
    "type" : "SNAIL",
    "dreamsTotal" : 10,
    "level" : 1,
    "unique" : "646195d5bc81021ffed65e71",
    "lifelong" : true,
    "radexpired" : false,
    "links" : [

    ],
    "dreamsUsed" : 0
  },
  "links" : [

  ]
};

$done({body : JSON.stringify(Dirge)});
