let obj=JSON.parse($response.body);
delete obj.data.wxThemeInfoList ;
$done({body: JSON.stringify(obj)});
