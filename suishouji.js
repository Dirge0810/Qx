const url = $request.url; // 请求的url
let obj = JSON.parse($response.body);
if (url.includes("/v1/profile/basic_info")) { //判断url 的正则
    /////////如果/v1/profile/basic_info就开始////////////
    obj = {
      vip_center_link: "https://t.me/",
      vip_show_tip: "",
      vip_icon_link: "https://t.me/",
      vip_icon: "",
      dec_icon: "",
      vip_status: "1",
      selected_dec_icon: "",
    };
   /////////结束/////////
} else if (url.includes("/cab-vip-ws/terminal/v1/vip-users/show-info")) {
    /////////开始////////////
    obj = {
      user_number: 4333091670767,
      has_contact: true,
      uid: "",
      system_pwd: 0,
      mobile: "",
      avatar_url:
        "https://oss.feidee.com/oss/group_oss_trans1_a6d81b1e1bfc642_144X144.png",
      register_from: "iphone-suishouji-quick",
      register_time: "",
      birthday: "",
      register_type: "mobile",
      auditStatus: 1,
      nickname: "",
      is_vip: true,
      gender: "",
      status: "active",
    };

  /////////结束/////////
}
$done({ body: JSON.stringify(obj) });
