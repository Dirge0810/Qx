/*************************************

项目名称：今日水印相机
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^http[s]?:\/\/.+\/next\/app\/vip\/info url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/JRSYXJ.js

[mitm]
hostname = 47.112.75.234,today.xhey.top

*************************************/


var Dirge = JSON.parse($response.body);

    Dirge = 
{
  "result": "bncdzrxa+Dq49i7NxArtSeZtLpZ7cxsOynuCD5Co47mgXj5V8wuwHKrBZk6XMBm14RbGudMdnG9/bN5HYEawsYzr4IJtgtQeWEXeLX+5qSlN9uDunZC4Il0PpaxdeEaYm4TemFHyNAcFl6A+0LgQv/jmaZGldDdypZEYBC8Xm45u8HSvDEPsIoPk8CXEWpXBLJvSfsZ+3ryV87nwgLjZGjR301rTrcvAmuC8gr3p3tU2KOawe5xnH9sNYfeg2Vk1wwtltF6LObXU+CNxqqDTj4EKvbOxGrqB4R/ZZ8wNs/94joVG1o3cf5hydFNgulEN"
}


$done({body : JSON.stringify(Dirge)});
