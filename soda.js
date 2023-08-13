/*************************************

项目名称：苏打校园
支持版本：
下载地址：
使用声明：️⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.sodalife\.xyz\/v1\/posters\?location=SODA_APP%3AHOME%3ATOP url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/soda.js

^https:\/\/api\.sodalife\.xyz\/v1\/posters\?location=SODA_APP%3AHOME%3ABOTTOM url reject-dict

^https:\/\/api\.sodalife\.xyz\/v1\/posters\?location=SODA_APP%3AHOME%3ACENTER url reject-dict

^https:\/\/api\.sodalife\.xyz\/v1\/posters\?location=SODA_APP%3AMINE%3ABOTTOM url reject-dict

^https:\/\/api\.sodalife\.xyz\/v1\/goods url reject-dict

^https:\/\/api\.sodalife\.xyz\/v1\/posters\?location=SODA_APP%3AREWARDS%3ACENTER url reject-dict

[mitm] 
hostname = api.sodalife.xyz

************************************/


let obj=JSON.parse($response.body);
obj.data.objects.forEach(item => {
 item.imageUrl="https://raw.githubusercontent.com/Dirge0810/Qx/main/warm_water.png";;
});
$done({body: JSON.stringify(obj)});
