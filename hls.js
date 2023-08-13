let obj=JSON.parse($response.body);
//obj.data.index.sknComponents = obj.data.index.sknComponents.filter(item => !item.title.includes("广告"));
obj.data.index.sknComponents.skn?.settingList = obj.data.index.sknComponents.skn?.settingList?.filter(item => !item.skn?.settingList?.type === "product");
//obj.data.mall_index.sknComponents = [];
//obj.data.mall_index.sknComponents = obj.data.mall_index.sknComponents.filter(item => !item.title.includes("广告"));
$done({body: JSON.stringify(obj)});
