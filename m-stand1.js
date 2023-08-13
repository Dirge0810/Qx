let obj=JSON.parse($response.body);
delete obj.mag.list ;
$done({body: JSON.stringify(obj)});
