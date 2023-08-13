/*************************************

项目名称：Wink-像修图一样修视频
下载地址：https://t.cn/A6ouQvnT
项目名称：蛋啵-宝宝版美图秀秀
下载地址：https://t.cn/A69AjDYp
项目名称：潮自拍
下载地址：https://t.cn/A6A2Sybv
项目名称：海报工厂
下载地址：https://t.cn/A66WBa0v
项目名称：Chic-创意胶片相机
下载地址：https://t.cn/A6oLDrrK
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api-.*\.meitu\.com\/(.+\/user\/vip_info|user\/show) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/mtxl.js

[mitm]
hostname = api-*.meitu.com

*************************************/


var Dirge = JSON.parse($response.body);
const vip = '/user/vip_info';
const user = '/user/show';

if ($request.url.indexOf(vip) != -1){
Dirge.data.trial_period_invalid_time = 4102362549000;
Dirge.data.current_order_invalid_time = 4102362549000;
Dirge.data.valid_time = 4102362549000;
Dirge.data.invalid_time = 4102362549000;
Dirge.data.use_vip = true;
Dirge.data.have_valid_contract = true;
Dirge.data.derive_type_name = "普通会员";
Dirge.data.in_trial_period = true;
Dirge.data.is_vip = true;
}

if ($request.url.indexOf(user) != -1){
Dirge.data.vip_type = 1;
Dirge.data.vip_icon = "https://xximg1.meitudata.com/6948531818264286440.png";
Dirge.data.follower_count = 999000;
Dirge.data.fan_count = 999000;
Dirge.data.favorites_count = 999000;
Dirge.data.be_like_count = 999000;
}

$done({body : JSON.stringify(Dirge)});
