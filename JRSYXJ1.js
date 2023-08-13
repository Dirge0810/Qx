/*************************************

项目名称：今日水印相机
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^http[s]?:\/\/.+\/next/app/remove/watermark/counts url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/JRSYXJ1.js

[mitm]
hostname = 47.112.75.234,today.xhey.top

*************************************/


var Dirge = JSON.parse($response.body);

    Dirge = 
{"result":"bncdzrxa+Dq49i7NxArtSeZtLpZ7cxsOynuCD5Co47mgXj5V8wuwHKrBZk6XMBm14RbGudMdnG9/bN5HYEawsXsCvH1uPZ0Jc36U0ZeSQ7s="}


$done({body : JSON.stringify(Dirge)});
