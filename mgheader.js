/*
first：
var h = $request.headers;
delete h['Cookie'];
delete h['x-r-i'];
delete h['x-l-r-i'];
$done({h});
*/
var { Cookie, 'x-r-i': xri, 'x-l-r-i': xlri, ...rest } = $request.headers;
$done({ headers: rest });
