/*************************************

项目名称：训记
支持版本：6.11.06
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/xunji\.gxzckj\.com\/whole_user_info_v3 url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/xunji.js

[mitm]
hostname = xunji.gxzckj.com

*************************************/


var Dirge = {
  "success": true,
  "res": {
    "en_data": "U2FsdGVkX19gcWG1tthzSMRCyS\/\/FXFGt+rrqW+ZotmPvJQWqGx8u4ozdXc3VSLR\/v1YrO41N5TKQPzix96VNTPs3P+5DJNPxFcKI7HVQ9iYCsipIOf2aT7YJ7ZXPtI6RHD973BcZRZLMLJ\/chdQDN3UMd3ve+ssE9v2TWnrWUCNabYsiCL4k2uhzpVxshjEguMXtP\/wkMHdgXEZ9IyzfqtncgZlXrg4h5gm38J9ho9qmpy8XCP3YoCEykY0zQekqVX8SGHobRakObmT\/ZSCGrL79\/vcm9RtT4pDtCaUTnbE9OtnNv9O1mbifo3CDibsJtJJMX09VYCQ44HjKmcyjA==", 
    "_userid": "1690881024140" 
  }
};

var Dirge1 = JSON.stringify(Dirge);

$done({ 
    body: Dirge1
});
