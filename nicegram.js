/*************************************

项目名称：Nicegram
下载地址：https://t.cn/A6ou0MCe
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/restore-access\.indream\.app\/restoreAccess url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/nicegram.js

[mitm]
hostname = restore-access.indream.app

*************************************/


var Dirge = JSON.parse($response.body);

Dirge = {
  "data" : {
    "premiumAccess" : true
  }
};

const isQX = typeof $task != "undefined";
const isSurge = typeof $httpClient != "undefined" && !isQX;
const isLoon = typeof $loon != "undefined";
const isShad = typeof $rocket !== "undefined";
const isStash = typeof $stash !== "undefined";

console.log('已操作成功🎉');
if (isQX) { Dirge1 = "HTTP/1.1 200 OK";} else {Dirge1 = 200;}
$done({status: (Dirge1), headers: $response.headers, body : JSON.stringify(Dirge)});
