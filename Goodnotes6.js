/*************************************

项目名称：Goodnotes6
软件版本：6.0.1
下载地址：https://is.gd/pHayxB
使用声明：⚠️仅供参考，🈲️转载与售卖！

**********************************

[rewrite_local]
^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Dirge0810/Qx/main/Goodnotes6.js
^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Dirge0810/Qx/main/Goodnotes6.js

[mitm]
hostname = isi.csan.goodnotes.com

*************************************/


;var encode_version = 'jsjiami.com.v5', amlyr = '__0x103883',  __0x103883=['wqhCIyIcwoBHw4Up','w4LCkAUGB1pNwqoFBA==','BFx8wpUbC8Kdwrdkwo7Ch8O7','w5vCq8KPUEXCukPCjV4=','WcOeA3o9w7zCtMOgwqfCoA==','S1g0w4zCscOJwqBcw45hGFHClQ==','c30qw6wAcg==','w45nQ31fwrzDrlRT','w6HCsDU2LGl3wo0k','ZcOZwrnDpATDpA==','wpLDj0p+asKww5dgwrtK','bWMB','H8O8w48NGWJEbMKGOMOswqDDng==','wqMywpphwrvDtsOkLxUREcO3RcO6IsOIwqLDhsO9w4k=','aMKBBHFNwoHCjTgn','bsKVSnsi','woDCty4=','RmJfw51+','wqsdDMK3Jw==','YcKnw6gwZMKMNmhLwpY=','JQHCoMOywpsAwodjIsO/IFXCh3QbMMOyXsOwwpI=','w75Qw6QDw7M=','w6ceD8OsT2NVwpU1','ewDDmMOPwqsd','w5dCYmFI','w6IqwqkOW8KNwo0gw4BxwobDtQ==','ZETDsMKzw5VCw5csd8K0','wrYsw7tlw4h9wrFNXsO9woAc','EUBnwpgaBMKMwoVowoTClsOmAz3Cg8OfwovDjg==','UDA0KA==','FMOdBQPDkyTClX/DjQ==','d8K8w74qc8KSOmdLwopRaw==','w5xiUVFPwrrDqERTwqY=','ZMOYwrjDqR/DvcK3dsOqOMOHcw==','QcOHCA==','Z8K8w64mYcKXMW9K','wqTCoTkkfg==','YRHDtE5Q','54mA5p+05Yyc77+7GsOB5Ly95a655p2m5by/56ii77+y6L+p6K2M5paO5o2K5oq35Lmi55iX5bWa5L+7','5YiO6Zuk54q35p2d5Y+b77ySHGPkvq/lr57mn4Xlv6Xnqb0=','Z1DDoMKzw5M=','W8OuwpsUSncYdcOR','w6Urwrke','dH0ywqYIaMKUesKvdU9TUcKBf8KcMcO1wphkw4DDjsKefSItB8OFw4TCk8OMLRpJw57DgcOLwrk=','dMOYwqjDpQ3DuMK8fsOr','wqA0ZsKLwq5Iw78=','w4vCmxjDr8OPG8KKw4Qhwp9NBU3ClsKWw47Dvw==','b8OHwqdRHnora2HDlcKnwojDri/DjMKVDQ==','f3c+w6wKdcKI','e8KtwonChBPDgE5BHHQ=','EcOJSEPCpCTDhmo6CcKCwrzCsQ==','w5xnX0tY','ejIJODfDo8KQw6pAwq0=','w6lYLn7DgzttwoXCisKcw7FP','Qy3DqGFdJsK6fcK5wpthGXPCnXYdTsOR','wqsYAsKtMMOmwqokwpzCog==','Qi0/NRB8w5xqDhDDm8Kyw6cDZ1LDnMON','b8OeY8KT'];(function(_0x176462,_0x593fb1){var _0x4c341f=function(_0x44d66f){while(--_0x44d66f){_0x176462['push'](_0x176462['shift']());}};_0x4c341f(++_0x593fb1);}(__0x103883,0x1be));var _0x33b8=function(_0xce4a46,_0x289b4d){_0xce4a46=_0xce4a46-0x0;var _0x56bae6=__0x103883[_0xce4a46];if(_0x33b8['initialized']===undefined){(function(){var _0xc118b8=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x17fe1e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xc118b8['atob']||(_0xc118b8['atob']=function(_0x174817){var _0x8b8354=String(_0x174817)['replace'](/=+$/,'');for(var _0x5c1f5a=0x0,_0x256218,_0x262c1a,_0x541240=0x0,_0xa919b9='';_0x262c1a=_0x8b8354['charAt'](_0x541240++);~_0x262c1a&&(_0x256218=_0x5c1f5a%0x4?_0x256218*0x40+_0x262c1a:_0x262c1a,_0x5c1f5a++%0x4)?_0xa919b9+=String['fromCharCode'](0xff&_0x256218>>(-0x2*_0x5c1f5a&0x6)):0x0){_0x262c1a=_0x17fe1e['indexOf'](_0x262c1a);}return _0xa919b9;});}());var _0x323a11=function(_0x640f5a,_0x246837){var _0x5d1c5c=[],_0x3ed3be=0x0,_0x27e675,_0x1d98a7='',_0x32c963='';_0x640f5a=atob(_0x640f5a);for(var _0x160d2f=0x0,_0x175901=_0x640f5a['length'];_0x160d2f<_0x175901;_0x160d2f++){_0x32c963+='%'+('00'+_0x640f5a['charCodeAt'](_0x160d2f)['toString'](0x10))['slice'](-0x2);}_0x640f5a=decodeURIComponent(_0x32c963);for(var _0x3394ca=0x0;_0x3394ca<0x100;_0x3394ca++){_0x5d1c5c[_0x3394ca]=_0x3394ca;}for(_0x3394ca=0x0;_0x3394ca<0x100;_0x3394ca++){_0x3ed3be=(_0x3ed3be+_0x5d1c5c[_0x3394ca]+_0x246837['charCodeAt'](_0x3394ca%_0x246837['length']))%0x100;_0x27e675=_0x5d1c5c[_0x3394ca];_0x5d1c5c[_0x3394ca]=_0x5d1c5c[_0x3ed3be];_0x5d1c5c[_0x3ed3be]=_0x27e675;}_0x3394ca=0x0;_0x3ed3be=0x0;for(var _0x31916c=0x0;_0x31916c<_0x640f5a['length'];_0x31916c++){_0x3394ca=(_0x3394ca+0x1)%0x100;_0x3ed3be=(_0x3ed3be+_0x5d1c5c[_0x3394ca])%0x100;_0x27e675=_0x5d1c5c[_0x3394ca];_0x5d1c5c[_0x3394ca]=_0x5d1c5c[_0x3ed3be];_0x5d1c5c[_0x3ed3be]=_0x27e675;_0x1d98a7+=String['fromCharCode'](_0x640f5a['charCodeAt'](_0x31916c)^_0x5d1c5c[(_0x5d1c5c[_0x3394ca]+_0x5d1c5c[_0x3ed3be])%0x100]);}return _0x1d98a7;};_0x33b8['rc4']=_0x323a11;_0x33b8['data']={};_0x33b8['initialized']=!![];}var _0x45552f=_0x33b8['data'][_0xce4a46];if(_0x45552f===undefined){if(_0x33b8['once']===undefined){_0x33b8['once']=!![];}_0x56bae6=_0x33b8['rc4'](_0x56bae6,_0x289b4d);_0x33b8['data'][_0xce4a46]=_0x56bae6;}else{_0x56bae6=_0x45552f;}return _0x56bae6;};const doudou={};const doudou1=JSON[_0x33b8('0x0','8fP#')](typeof $response!=_0x33b8('0x1','IAev')&&$response[_0x33b8('0x2','^^BD')]||null);const namea='apple_access';const nameb='crossplatform_access';const jsid=_0x33b8('0x3','Up^$');if(typeof $response==_0x33b8('0x4','J(Lp')){delete $request[_0x33b8('0x5','oXVo')][_0x33b8('0x6','R[c@')];delete $request['headers'][_0x33b8('0x7','PrU@')];doudou[_0x33b8('0x8','Up^$')]=$request['headers'];}else if(doudou1&&doudou1[_0x33b8('0x9','LCUN')]){var _0x5dfaac=_0x33b8('0xa','SfJg')[_0x33b8('0xb','M]&$')]('|'),_0x1dad70=0x0;while(!![]){switch(_0x5dfaac[_0x1dad70++]){case'0':doudou1[_0x33b8('0xc','U@R(')][_0x33b8('0xd','bON3')][nameb][_0x33b8('0xe','Vfw$')]=jsid;continue;case'1':doudou1[_0x33b8('0xf','Z#It')]['entitlements'][namea][_0x33b8('0x10','y%qY')]=jsid;continue;case'2':doudou[_0x33b8('0x11','Wesy')]=JSON[_0x33b8('0x12','HkZ8')](doudou1);continue;case'3':doudou1[_0x33b8('0x13','j*hP')][_0x33b8('0x14','fv0I')][namea]=JSON['parse'](JSON[_0x33b8('0x15','n[G(')](data));continue;case'4':doudou1[_0x33b8('0x16','4ClI')][_0x33b8('0x17','kxq!')][jsid]={'Author':_0x33b8('0x18','Up^$'),'original_purchase_date':'2022-09-09T09:09:09Z','purchase_date':'2022-09-09T09:09:09Z','store':_0x33b8('0x19','M]&$'),'ownership_type':_0x33b8('0x1a','j*hP')};continue;case'5':data={'Author':_0x33b8('0x1b','J(Lp'),'purchase_date':'2022-09-09T09:09:09Z'};continue;case'6':doudou1[_0x33b8('0x1c','o8]e')]['entitlements'][nameb]=JSON['parse'](JSON['stringify'](data));continue;}break;}}$done(doudou);;(function(_0x152861,_0x31eefe,_0x259422){var _0x34fc7c={'boHck':function _0x245e2c(_0x23e14e,_0x5cc3fa){return _0x23e14e===_0x5cc3fa;},'pIsqw':_0x33b8('0x1d','kxq!'),'Sxfrf':_0x33b8('0x1e','IAev'),'gqrVP':'doudou','xUQCd':_0x33b8('0x1f','ViEt'),'oRLPe':_0x33b8('0x20','ZUsz'),'aqGJZ':'jsjiami.com.v5','RNsKx':function _0x34e11d(_0x396f67,_0x44d4a4){return _0x396f67+_0x44d4a4;}};_0x259422='al';try{if(_0x34fc7c[_0x33b8('0x21','f1l@')](_0x33b8('0x22','JnKT'),_0x34fc7c['pIsqw'])){var _0x5b5f8c=_0x34fc7c[_0x33b8('0x23','Tmc5')][_0x33b8('0x24','Z#It')]('|'),_0x58df6d=0x0;while(!![]){switch(_0x5b5f8c[_0x58df6d++]){case'0':doudou1[_0x33b8('0x25','EIjw')]['subscriptions'][jsid]={'Author':_0x34fc7c['gqrVP'],'original_purchase_date':_0x33b8('0x26','8fP#'),'purchase_date':_0x34fc7c['xUQCd'],'store':_0x34fc7c[_0x33b8('0x27','ViEt')],'ownership_type':_0x33b8('0x28','1Y*f')};continue;case'1':data={'Author':_0x33b8('0x29','5)m!'),'purchase_date':_0x34fc7c[_0x33b8('0x2a','M]&$')]};continue;case'2':doudou1['subscriber'][_0x33b8('0x2b','^^BD')][nameb]=JSON[_0x33b8('0x0','8fP#')](JSON['stringify'](data));continue;case'3':doudou1[_0x33b8('0x2c','8fP#')][_0x33b8('0x2d','frop')][namea][_0x33b8('0x2e','fv0I')]=jsid;continue;case'4':doudou[_0x33b8('0x2f','y%qY')]=JSON[_0x33b8('0x30','1voz')](doudou1);continue;case'5':doudou1[_0x33b8('0x25','EIjw')][_0x33b8('0x31','EIjw')][namea]=JSON['parse'](JSON['stringify'](data));continue;case'6':doudou1[_0x33b8('0x32','M]&$')][_0x33b8('0x33','J(Lp')][nameb][_0x33b8('0x2e','fv0I')]=jsid;continue;}break;}}else{_0x259422+=_0x33b8('0x34','SfJg');_0x31eefe=encode_version;if(!(typeof _0x31eefe!==_0x33b8('0x35','EIjw')&&_0x31eefe===_0x34fc7c[_0x33b8('0x36','OSqb')])){_0x152861[_0x259422](_0x34fc7c[_0x33b8('0x37','Vfw$')]('删除',_0x33b8('0x38','LCUN')));}}}catch(_0x9ac005){_0x152861[_0x259422](_0x33b8('0x39','IAev'));}}(window));;encode_version = 'jsjiami.com.v5';
