let obj=JSON.parse($response.body);
delete obj.content ;
$done({body: JSON.stringify(obj)});
