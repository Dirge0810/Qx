/*************************************

项目名称：考途大学搜题
支持版本：4.4.0
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/^https:\/\/api-service\.tutusouti\.com\/appServiceApi\/(vip\/newUserPayVipData|video\/videoDetail) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/kaotu.js

[mitm]
hostname = api-service.tutusouti.com

*************************************/


var body = $response.body;
var url = $request.url;

if (/^https:\/\/api-service\.tutusouti\.com\/appServiceApi\/(vip\/newUserPayVipData|video\/videoDetail)/.test(url)) {
  if (url.indexOf("/appServiceApi/video/videoDetail") !== -1) {
    body = body.replace(/"playAll":false/g, '"playAll":true');
  } else if (url.indexOf("/appServiceApi/vip/newUserPayVipData") !== -1) {
    var Dirge = {
      "msg": "ok",
      "statusCode": 0,
      "data": {
        "vipList": [
          {
            "diffTime": 0,
            "goodsName": "拍搜VIP",
            "goodsLabel": 208,
            "expireTime": 0,
            "vipStatus": 0,
            "svipExplain": "",
            "svipIsLifelong": 0
          },
          {
            "diffTime": 0,
            "goodsName": "备考VIP",
            "goodsLabel": 209,
            "expireTime": 4092599349000,
            "vipStatus": 1,
            "svipExplain": "",
            "svipIsLifelong": 1
          }
        ],
        "svipInfo": {
          "diffTime": 0,
          "goodsName": "超级VIP",
          "goodsLabel": 207,
          "expireTime": 0,
          "vipStatus": 0,
          "svipExplain": "",
          "svipIsLifelong": 0
        }
      }
    };

    body = JSON.stringify(Dirge);
  }
}

$done({ body: body });
