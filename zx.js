let obj=JSON.parse($response.body);
delete obj.data.main_body.type.swiper ;
$done({body: JSON.stringify(obj)});
