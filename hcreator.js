/*************************************

项目名称：普通话测试
软件版本：5.9.20
下载地址：https://is.gd/ZFbMYA
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^http[s]?:\/\/api.hcreator.cn url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/hcreator.js

[mitm] 
hostname = api.hcreator.cn

************************************/


var body = $response.body.replace(/"vipType":0/g,'"vipType":1')
  
.replace(/"expireTime1":null/g,'"expireTime1":1963926472000')
.replace(/"startTime1":null/g,'"startTime1":1663926472000')
.replace(/"vip":false/g,'"vip":true')
.replace(/"vipName":"非会员"/g,'"vipName":"会员"')
.replace(/"day":0/g,'"day":3472')
.replace(/"vipRank":\d/g,'"vipRank":3')
.replace(/"joinType":\w+/g,'"joinType":true')

$done({ body });
