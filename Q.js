let obj=JSON.parse($response.body);
delete obj.data.list.adlist ;
$done({body: JSON.stringify(obj)});
