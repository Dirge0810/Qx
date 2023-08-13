/*************************************

项目名称：医考帮
软件版本：3.4.9.2
下载地址：https://is.gd/M7kLxz
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http[s]?:\/\/api.yikaobang.com.cn\/index.php\/curriculum\/main\/detail url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/yikaobang.js

[mitm]
hostname = api.yikaobang.com.cn

*************************************/


var body = $response.body.replace(/is_free_watch":"\d+"/g,'is_free_watch":"1"')
$done({ body });
