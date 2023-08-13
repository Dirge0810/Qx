/*************************************

项目名称：尽简衣橱
支持版本：2.9.1
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/closet\.jinjian\.tech\/api\/v3\/apple_app_store\/resolve_receipt url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/jjyc.js

[mitm] 
hostname = closet.jinjian.tech

************************************/


let obj = JSON.parse($response.body);
   
    obj = {
	  "status" : "success",
	  "data" : {
	    "type_text" : "正常",
	    "expired_at" : "2099-12-31T10:11:49.000Z",
	    "apple_app_store_auto_renew" : true,
	    "original_purchase_date_ms" : "1663084191000",
	    "type" : "monthly"
	  }
}

$done({body : JSON.stringify(obj)});
