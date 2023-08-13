let obj=JSON.parse($response.body);
delete obj.data.bannerImgList ;
$done({body: JSON.stringify(obj)});
