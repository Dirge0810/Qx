/*************************************

项目名称：电视家
支持版本：2.3.9
下载地址：https://t.cn/A6KxaEw8
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http[s]?:\/\/(share\.dianshihome\.com\/api\/user\/base\/info|123\.56\.125\.184\/api\/.+\/user\/info|api\.gaoqingdianshi\.com\/api\/ad\/mobile\/config) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/dsj.js

[mitm]
hostname = share.dianshihome.com, api.gaoqingdianshi.com

*************************************/


var Dirge = JSON.parse($response.body);

Dirge.data.sex = 1;
Dirge.data.activeProduct = 2;
Dirge.data.isTopLevel = true;
Dirge.data.equityTime = 4102352080000;
Dirge.data.pActiveTime = 4102352080000;
Dirge.data.adEquityTime = 4102352080000;
Dirge.data.mine = [];
Dirge.data.homePopWindow = [];
Dirge.data.homeVipOperate= [];

$done({body : JSON.stringify(Dirge)});
