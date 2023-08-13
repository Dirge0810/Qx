/*************************************

项目名称：Xmind
支持版本：23.06（1422）及以上
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：先登录Xmind账号在恢复购买

**************************************

[rewrite_local]
^https?:\/\/www\.xmind\.(cn|app)\/.+\/devices url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/X-mind.js

[mitm]
hostname = www.xmind.*

*************************************/


var Dirge = JSON.parse($response.body);

Dirge = {
  "license" : {
    "status" : "sub",
    "expireTime" : 4092599349000
  },
  "_code" : 200,
  "raw_data" : "bKnTeMMu/TJ86ZFoUqG+sfKC1nitD8b/NaUT93UBc0woo0BF5uBVYXsHUQJkQxLHGlZCbdnKaKzZ4iljM9xddkyMycpUbAtDoywnr4RNzxqXY20pDM0Bdgm+HssaS1RworH8aaaf0IYnnGplxIuqMyT9107PrenF0MBUIaKU9Cw="
};

$done({body : JSON.stringify(Dirge)});
