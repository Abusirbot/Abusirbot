const _0x12aa01=_0x227a;function _0x227a(_0xb32383,_0x37bc7f){const _0x2af4d0=_0x2af4();return _0x227a=function(_0x227a27,_0x55b3ea){_0x227a27=_0x227a27-0x12c;let _0x287017=_0x2af4d0[_0x227a27];return _0x287017;},_0x227a(_0xb32383,_0x37bc7f);}(function(_0x3418e4,_0x1b2894){const _0x1f89d1=_0x227a,_0x2b6cf4=_0x3418e4();while(!![]){try{const _0x3f36ab=-parseInt(_0x1f89d1(0x14a))/0x1+parseInt(_0x1f89d1(0x13c))/0x2*(-parseInt(_0x1f89d1(0x135))/0x3)+-parseInt(_0x1f89d1(0x14d))/0x4+parseInt(_0x1f89d1(0x133))/0x5+-parseInt(_0x1f89d1(0x13b))/0x6+parseInt(_0x1f89d1(0x15b))/0x7+parseInt(_0x1f89d1(0x130))/0x8;if(_0x3f36ab===_0x1b2894)break;else _0x2b6cf4['push'](_0x2b6cf4['shift']());}catch(_0x3e4e4d){_0x2b6cf4['push'](_0x2b6cf4['shift']());}}}(_0x2af4,0x8bde7));const {Module}=require('../main'),fs=require('fs'),ffmpeg=require(_0x12aa01(0x151)),{getBuffer}=require('abu-bot'),Config=require(_0x12aa01(0x12c)),{MODE,STICKER_DATA}=require(_0x12aa01(0x12c)),{getString}=require(_0x12aa01(0x150)),{bass,sticker,addExif}=require(_0x12aa01(0x15d)),Lang=getString(_0x12aa01(0x13f));function _0x2af4(){const _0x9cd348=['https://github.com/Afx-Abu/Abu-MD/','attp\x20?(.*)','end','Text\x20to\x20animated\x20sticker','1178406HWjSqW','136ukEZda','webp_pipe','PHOTO_NEED_REPLY','converters','MP3_NEED_REPLY','client','STICKER_DESC','save','public','readFileSync','BASS_NEED_REPLY','PHOTO_DESC','photo\x20?(.*)','jid','34190HiofbL','reply_message','sendMessage','2407560xDeoSm','fromFormat','https://api.xteam.xyz/attp?file&text=','./misc/lang','fluent-ffmpeg','audio/mp4','senderName','MP3_DESC','edit','split','quoted','output.png','writeFile','video','2505923BBuZeo','image','./misc/misc','sendReply','../config','attp.mp4','STICKER_NEED_REPLY','BASS_DESC','6561608MVVwrm','./temp/tomp3.mp3','sticker','1823110uGWLsb','download','6063BsMtQg','*Need\x20text*'];_0x2af4=function(){return _0x9cd348;};return _0x2af4();}let w=MODE==_0x12aa01(0x144)?![]:!![];Module({'pattern':'sticker\x20?(.*)','use':_0x12aa01(0x155),'fromMe':w,'desc':Lang[_0x12aa01(0x142)]},async(_0x1f4d64,_0x4de9ac)=>{const _0x549a35=_0x12aa01;if(_0x1f4d64[_0x549a35(0x14b)]===![])return await _0x1f4d64['sendMessage'](Lang[_0x549a35(0x12e)]);var _0x5a3575=await _0x1f4d64[_0x549a35(0x14b)][_0x549a35(0x134)](),_0x54bc10={'author':STICKER_DATA['split'](';')[0x1]||'','packname':_0x1f4d64[_0x549a35(0x153)],'categories':STICKER_DATA[_0x549a35(0x156)](';')[0x2]||'😂','android':'https://github.com/Afx-Abu/Abu-MD/','ios':_0x549a35(0x137)};return _0x1f4d64[_0x549a35(0x14b)][_0x549a35(0x15c)]===!![]?await _0x1f4d64[_0x549a35(0x141)][_0x549a35(0x14c)](_0x1f4d64['jid'],{'sticker':fs[_0x549a35(0x145)](await addExif(await sticker(_0x5a3575),_0x54bc10))},{'quoted':_0x1f4d64[_0x549a35(0x157)]}):await _0x1f4d64[_0x549a35(0x141)][_0x549a35(0x14c)](_0x1f4d64['jid'],{'sticker':fs[_0x549a35(0x145)](await addExif(await sticker(_0x5a3575,_0x549a35(0x15a)),_0x54bc10))},{'quoted':_0x1f4d64[_0x549a35(0x157)]});}),Module({'pattern':'m\x20?(.*)','fromMe':w,'use':_0x12aa01(0x155),'desc':Lang[_0x12aa01(0x154)]},async(_0x2683d8,_0x355287)=>{const _0x3f312b=_0x12aa01;if(_0x2683d8[_0x3f312b(0x14b)]===![])return await _0x2683d8[_0x3f312b(0x15e)](Lang[_0x3f312b(0x140)]);var _0x13e52a=await _0x2683d8[_0x3f312b(0x14b)][_0x3f312b(0x134)]();ffmpeg(_0x13e52a)[_0x3f312b(0x143)](_0x3f312b(0x131))['on'](_0x3f312b(0x139),async()=>{const _0x170669=_0x3f312b;await _0x2683d8[_0x170669(0x141)][_0x170669(0x14c)](_0x2683d8[_0x170669(0x149)],{'audio':fs['readFileSync'](_0x170669(0x131)),'mimetype':'audio/mp4','ptt':![]},{'quoted':_0x2683d8[_0x170669(0x157)]});});}),Module({'pattern':'bass\x20?(.*)','fromMe':w,'use':_0x12aa01(0x155),'desc':Lang[_0x12aa01(0x12f)]},async(_0x3c441a,_0x434e17)=>{const _0x27c549=_0x12aa01;if(_0x3c441a[_0x27c549(0x14b)]===![])return await _0x3c441a['sendReply'](Lang[_0x27c549(0x146)]);var _0x13dd89=await _0x3c441a[_0x27c549(0x14b)]['download']();bass(_0x13dd89,_0x434e17[0x1],async function(_0x523ca7){const _0xcf95b=_0x27c549;await _0x3c441a[_0xcf95b(0x141)][_0xcf95b(0x14c)](_0x3c441a[_0xcf95b(0x149)],{'audio':_0x523ca7,'mimetype':_0xcf95b(0x152),'ptt':![]},{'quoted':_0x3c441a['data']});});}),Module({'pattern':_0x12aa01(0x148),'fromMe':w,'use':'edit','desc':Lang[_0x12aa01(0x147)]},async(_0x2a8f02,_0x1f8fdb)=>{const _0x5b5ccc=_0x12aa01;if(_0x2a8f02['reply_message']===![])return await _0x2a8f02['sendMessage'](Lang[_0x5b5ccc(0x13e)]);var _0x2a36bc=await _0x2a8f02[_0x5b5ccc(0x14b)][_0x5b5ccc(0x134)]();ffmpeg(_0x2a36bc)[_0x5b5ccc(0x14e)](_0x5b5ccc(0x13d))['save'](_0x5b5ccc(0x158))['on']('end',async()=>{const _0x11edfa=_0x5b5ccc;await _0x2a8f02[_0x11edfa(0x15e)](fs[_0x11edfa(0x145)](_0x11edfa(0x158)),_0x11edfa(0x15c));});}),Module({'pattern':_0x12aa01(0x138),'fromMe':w,'use':'utility','desc':_0x12aa01(0x13a)},async(_0x453b87,_0x5aadb8)=>{const _0x1f9375=_0x12aa01;if(_0x5aadb8[0x1]=='')return await _0x453b87[_0x1f9375(0x14c)](_0x1f9375(0x136));try{var _0x2797dc=await getBuffer(_0x1f9375(0x14f)+encodeURI(_0x5aadb8[0x1]));}catch{var _0x2797dc=await getBuffer('https://raganork-api.herokuapp.com/api/attp?text='+encodeURI(_0x5aadb8[0x1]+'&apikey=with_love_Afx-Abu'));}fs[_0x1f9375(0x159)](_0x1f9375(0x12d),_0x2797dc,async _0x382ecc=>{const _0x21afde=_0x1f9375;var _0x264357={'author':STICKER_DATA[_0x21afde(0x156)](';')[0x1]||'','packname':_0x453b87[_0x21afde(0x153)],'categories':STICKER_DATA[_0x21afde(0x156)](';')[0x2]||'😂','android':_0x21afde(0x137),'ios':_0x21afde(0x137)};await _0x453b87[_0x21afde(0x14c)](fs[_0x21afde(0x145)](await addExif(await sticker(_0x21afde(0x12d),_0x21afde(0x15a)),_0x264357)),_0x21afde(0x132));});});
