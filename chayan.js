let obj=JSON.parse($response.body);
delete obj.data.INDEX_SLOT_01;
delete obj.data.INDEX_SLOT_02;
let ads = obj.data.INDEX_TOP_BANNER.contents;
ads.splice(1);
delete ads[0].bubble;
delete ads[0].figure;
ads[0].value = "https://raw.githubusercontent.com/Dirge0811/Qx/main/cyyss.jpg";
$done({body: JSON.stringify(obj)});
