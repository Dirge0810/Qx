/*************************************

项目名称：红线
支持版本：2.4.49
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^^https:\/\/db\.redlineapp\.life\/parse\/classes\/RLUser url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/hongxian.js

[mitm] 
hostname = db.redlineapp.life

************************************/


let obj = JSON.parse($response.body);
   
    obj = {
    "results" : [
      {
        "regDate" : "1686172179",
        "updatedAt" : "2023-06-07T21:10:37.953Z",
        "purchasePlatform" : "iOS",
        "validForPro" : "",
        "rateCount" : "0",
        "credit" : "0",
        "platform" : "iOS",
        "level" : "1",
        "loginInfo" : "",
        "username" : "",
        "objectId" : "",
        "isPro" : true,
        "account" : "",
        "beLiked" : "0",
        "RC" : "",
        "createdAt" : "2023-06-07T21:09:41.264Z"
      }
    ]
}

$done({body : JSON.stringify(obj)});
