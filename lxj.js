let obj=JSON.parse($response.body);
delete obj.data.bannerList ;
$done({body: JSON.stringify(obj)});
