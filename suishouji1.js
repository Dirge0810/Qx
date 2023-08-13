let obj = JSON.parse($response.body);
   
    obj = {
   "vip_center_link" : "https://t.me/",
   "vip_show_tip" : "",
   "vip_icon_link" : "https://t.me/",
   "vip_icon" : "https://img1.imgtp.com/2023/03/15/ZiOBvW5C.png",
   "dec_icon" : "",
   "vip_status" : "1",
   "selected_dec_icon" : ""
}

$done({body : JSON.stringify(obj)});
