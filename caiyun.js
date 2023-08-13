/*************************************

项目名称：彩云天气/彩云天气Pro
软件版本：6.11.1及以上
下载地址：https://is.gd/YdQvgl
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/biz\.cyapi\.cn\/v\d\/(user\?app_name=weather|visitors|login_by_code)$ url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/caiyun.js

[mitm]
hostname = biz.cyapi.cn

*************************************/


var url = $request.url;
var obj = JSON.parse($response.body);

let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";

if (url.indexOf('/user') != -1 || url.indexOf('/visitors') != -1) {
		obj.result.token = Token;
	body = JSON.stringify(obj);
}

if (url.indexOf('/login_by_code') != -1) {
	let obj = {
		"status": "ok",
		"result": {
			"is_phone_verified": true,
			"token": Token
		},
		"rc": 0
	}
	body = JSON.stringify(obj);
}
$done({body});
