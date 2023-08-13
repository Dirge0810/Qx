/*************************************

项目名称：灵敢提词器
软件版本：3.0.1
下载地址：https://is.gd/Pl4Fbm
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http[s]?:\/\/teleprompter-api.quthing.com url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/quthing.js

[mitm]
hostname = teleprompter-api.quthing.com

*************************************/


var body = $response.body.replace(/validVip":\w+/g,'validVip":true')
  
.replace(/expireTime":\d+/g,'expireTime":253392455349000')
.replace(/vipType":\d+/g,'vipType":3')
.replace(/trialVip":\w+/g,'trialVip":true')

$done({ body });
