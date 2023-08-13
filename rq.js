/*************************************

项目名称：如期
支持版本：2.4.0
下载地址：https://t.cn/A6KVkB2y
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/www\.freshhome\.top url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/rq.js

[mitm]
hostname = www.freshhome.top

*************************************/


body = $response.body.replace(/\"isVip":"\d+"/g, '\"isVip":"1"').replace(/\"vipType":\w+/g, '\"vipType":true').replace(/\"vipEndTime":(.*?)/g, '\"vipEndTime":4102362549000');

$done({body});
