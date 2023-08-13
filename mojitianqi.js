/*************************************

项目名称：墨迹天气
支持版本：9.0828.02
下载地址：https://t.cn/A69ukfNz
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/.*\.api\.moji\.com\/(sns\/json\/profile\/get_info_.+|json\/member_new\/homepage_info.+|user\/personal\/json\/profile_.+|flycard\/novice|shortvideo\/.+) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/mojitianqi.js

[mitm]
hostname = *.api.moji.com

*************************************/


var Dirge = JSON.parse($response.body);
const vip1 = '/sns/json/profile/get_info';
const vip2 = '/json/member_new/homepage_info';
const vip3 = '/user/personal/json/profile';
const vip4 = '/flycard/novice';
const AD1 = '/shortvideo';

if ($request.url.indexOf(vip1) != -1){
  Dirge.is_vip = 1;
  Dirge.type = 7;
  Dirge.grade = 1;
  Dirge.is_adver_free = 0;
  Dirge.expire_time = 4102362549000;
  Dirge.member_type = 1;
  Dirge.member_level = 1;
  Dirge.max_expiration_days = 9999999;
  Dirge.is_expire = 0;
  Dirge.remain_day = 9999999;
  Dirge.inkrity = 9999999;
  Dirge.status = 1;
  Dirge.is_purchase = true;
}

if ($request.url.indexOf(vip2) != -1){
  Dirge.userTips = ["将在2099-12-31到期"];
  Dirge.user_tips = ["将在2099-12-31到期"];
  Dirge.is_member = true; 
  Dirge.user_member_info.vip = 1;
  Dirge.user_member_info.is_auto_member = 1;
}

if ($request.url.indexOf(vip3) != -1){
  Dirge.personal_profile.inkrity = 9999999;
  Dirge.personal_profile.is_vip = true;
  Dirge.personal_profile.grade = 1;
  Dirge.personal_profile.user_flag = true;
}

if ($request.url.indexOf(vip4) != -1){
  Dirge.data.novice.adShow= 0;
  Dirge.data.novice.expireTime = 4102362549000;
  Dirge.data.novice.vipShow = 1;
}

if ($request.url.indexOf(AD1) != -1){
  Dirge.item_list = [];
  Dirge.rcmList = [];
  Dirge.add_card_list = [];
}

$done({body : JSON.stringify(Dirge)});
