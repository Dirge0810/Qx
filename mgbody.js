/* 
脚本仅供学习和个人使用，不得用于商业目的或其他非法用途
使用脚本可能存在风险，包括但不限于造成账号异常、数据丢失等问题。使用脚本时，请谨慎操作，自行承担风险

[rewrite_local]
^http[s]?:\/\/mobile\.api\.mgtv\.com\/v[0-9]\/(playlist|video\/album|video\/relative|video\/list).*$ url script-request-header https://raw.githubusercontent.com/Dirge0810/Qx/main/mgheader.js
^https?:\/\/.*mgtv\.com\/(v\d+\/(video\/getSource|module\/list)|GetUserInfo) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/mgbody.js
&src\=mgtv&suuid\=.*&testversion\=&ticket\=[A-Z0-9]{32} url 302 &src=mgtv&testversion=&ticket=84122092810F360BA056B85869F9F51A
^https?:\/\/nuc\.api\.mgtv.com\/Logout url reject-dict
^https?:\/\/pcvideoyd\.titan\.mgtv\.com\/pb\/ url reject-dict
^https?:\/\/mob\.bz\.mgtv\.com\/odin\/c1\/channel\/ads\?_ url reject-dict
^https?:\/\/mobile\.da\.mgtv\.com\/json\/app\/bdboot url reject-dict

# 【小芒】
^https?:\/\/mobile\.api\.mgtv\.com\/mobile\/config\?_support url reject-dict

# 底部会员LOGO叠加ICON
^https?:\/\/mob\.bz\.mgtv\.com\/odin\/c1\/skin\/config url reject-dict

# 文件太大了，屏蔽暂未发现副作用https://dc.bz.mgtv.com/dynamic/v1/dsl/list/10101001/0/5/0?
# ^https?:\/\/dc\.bz\.mgtv\.com\/dynamic\/v1\/dsl\/list\/ url reject-dict

#加入会员 跳过广告https://vip.bz.mgtv.com/client/dynamic_entry
^https?:\/\/vip\.bz\.mgtv\.com\/client\/dynamic_entry url reject-dict

#我的积分 余额 5 https://credits.bz.mgtv.com/credits/url
^https?:\/\/credits\.bz\.mgtv\.com\/credits\/url url reject-dict


[mitm] 
hostname = *.mgtv.com

 */
var body = $response.body;
var url = $request.url;

// 修改VIP视频提示文本
// 正则表达式匹配：url.includes('/v8/video/getSource') 包含 '/v8/video/getSource' 的URL
// 替换视频提示文本，将 "text" 后面的内容替换为 "尊敬的SVIP会员,您正在观看SVIP尊享内容"
// 替换 "尊敬的V\d会员" 为 "尊敬的SVIP会员"
url.includes('/v8/video/getSource') && (body = body.replace(/"text":"[^"]+/g, "\"text\": \"尊敬的SVIP会员,您正在观看SVIP尊享内容").replace(/尊敬的V\d会员/g, "尊敬的SVIP会员"));

// 解析响应体为JSON对象
var obj = JSON.parse(body);

// 处理VIP用户信息
// 正则表达式匹配：url.includes('/GetUserInfo') 包含 '/GetUserInfo' 的URL
if (url.includes('/GetUserInfo')) {
    // 设置VIP信息
    obj.data.isVip = 1;
    obj.data.vipExpiretime = 324938345490000;
    obj.data.vipinfo.isvip = 1;
    obj.data.vipinfo.vip_end_time = "2088-08-08 00:00:00";
    obj.data.vipinfo.type = "2";
    obj.data.vipinfo.growth.level = 9;
    body = JSON.stringify(obj);
}

// 我的页面处理，筛选显示指定模块
// 1=顶部模块  2=用户信息模块 3=推荐位模块 4=追剧助手  5=大芒计划/我的小芒  6=banner图模块  7=我的服务  8=运营商专区/兴趣中心/推荐功能
// 正则表达式匹配：url.includes('/module/list') 包含 '/module/list' 的URL
if (url.includes('/module/list')) {
    var obj = JSON.parse(body);
    // 筛选显示指定模块
    obj.data.list = obj.data.list.filter(item => item.id == 1 || item.id == 2 || item.id == 4 || item.id == 5 || item.id == 7);
    body = JSON.stringify(obj);
}

// 返回修改后的响应体
$done({body});
