let obj=JSON.parse($response.body);
delete obj.data.p_webapp_home_preferential_banner.click_tracks ; 
$done({body: JSON.stringify(obj)});
