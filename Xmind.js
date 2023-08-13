/*************************************

项目名称：Xmind
支持版本：22.11（1325）及以下
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：先登录Xmind账号在恢复购买

**************************************

[rewrite_local]
^https?:\/\/www\.xmind\.(cn|app)\/.+\/devices url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/Xmind.js

[mitm]
hostname = www.xmind.*

*************************************/


var Dirge = JSON.parse($response.body);
  Dirge.raw_data = "f5g8N9+a8Dt298AGhRitN0KohTeeRjBFR4uWMnYSQMQ8LEXN06XRL8lozul9+/UOG4ZQhIaEQMbkMWh2R9uC0YmsTE0NM9tL9DfUrkVo6d8MxdMS9NLZd5nMt7DdvFe01dqnfLGlbm5a4Wd0HKj8Eh8RI0pMnspbxEIEeBJJ2VI=";
  Dirge.license = {
    "status": "Trial",
    "expireTime": 4102362549000
  };

$done({body : JSON.stringify(Dirge)});
