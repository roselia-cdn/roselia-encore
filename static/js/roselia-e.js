"use strict";!function(e,t){let a={},i=a.utils={isObjFunc:e=>t=>({}).toString.call(t)==="[object "+e+"]",extend:$.extend,sameDate:(e,t,a)=>"never"!==e&&"else"!==e&&("always"===e||(a||["Month","Date"]).map(e=>e.toLowerCase().replace(/\b\w/g,e=>e.toUpperCase())).every(a=>(e=>((e,t)=>(a,i)=>t(e(a),e(i)))(e,(e,t)=>e===t))(e=>e["get"+a]&&e["get"+a]())(new Date(e),t))),deepExtend(...e){return this.extend(!0,...e)},render:(e,t,a)=>e.replace(new RegExp((a||["{{","}}"]).join("\\s*?(.*?)\\s*?"),"g"),(e,a)=>new Function("data",(e=>`with(data || {}) {return (${e});}`)(a))(t)),renderObject(e,t,a){let i={};if(["String","Array","Object"].forEach(e=>i[`is${e}`]=this.isObjFunc(e)),i.isString(e))return this.render(e,t,a);if(i.isArray(e))return e.map(e=>this.renderObject(e,t,a));if(i.isObject(e)){let i=this.deepExtend({},e);for(let e in i)i[e]=this.renderObject(i[e],t,a);return i}return e},debounce(e,t){let a;return(...i)=>{clearTimeout(a),a=setTimeout(()=>e(...i),t)}},throttle(e,t){let a,i=0;return(...n)=>{let r=new Date;clearTimeout(a),r-i<t?a=setTimeout(()=>e(...n),t):(i=r,e(...n))}},setPath(...t){e.history.pushState({},"","#"+t.join("/"))},getPath:()=>e.location.hash.length?e.location.hash.substring(1):[],onPathChange(t){e.addEventListener("popstate",t)},positionNum:e=>e>10&&e<20?"th":["th","st","nd","rd"][e%10]||"th",openPath(e){e.length<3?$(".modal.in").attr("manual",!0).modal("hide"):$(".modal").filter((t,a)=>(a.getAttribute("roselia-path")||"").toLowerCase()===e.toLowerCase()).attr("manual",!0).modal("show")}},n=i;a.LazyLoad=function(t){let a={extend:jQuery.extend,deepExtend(...e){return this.extend(!0,...e)},render:n.render,partition(e,t){let a=[[],[]];return e.forEach(e=>a[1^t(e)].push(e)),a},debounce:n.debounce,throttle:n.throttle},i=function(t){let i={load:!0,placeHolder:"static/img/logo.png",renderPlaceHolder:!1,selector:"img",changePlaceHolder:!0,prefix:"roselia",onscrolledimg:null,delim:["{{","}}"],backupSrc:!0,throttleRate:500};this.alive=!1;let n=this.options=a.deepExtend({},i,t);this.setOption=function(e){return this.options=a.deepExtend({},i,t),this},this.load=function(){this.alive&&this.destroy(),this.alive=!0,this.pics=document.querySelectorAll(n.selector),this.pics.forEach=this.pics.forEach||[].forEach,this.options.changePlaceHolder&&this.pics.forEach(e=>{let t=n.prefix+"-src";n.backupSrc&&e.setAttribute(t,e.src),e.src=n.changePlaceHolder?a.render(n.placeHolder,e,n.delim):n.placeHolder}),this.handler(),addEventListener("scroll",this.handler)},this.handler=a.throttle(function(t){let i=document.documentElement.scrollTop,n=e.innerHeight;return new Promise(e=>{e(a.partition(this.pics,e=>e.y>=i&&e.y<=i+n))}).then(([e,t])=>(e.forEach(e=>e.src=e.getAttribute(this.options.prefix+"-src")||e.src),this.pics=t)).then(e=>(e.length||this.destroy(),e)).then(e=>this.options.onscrolledimg&&this.options.onscrolledimg(e))}.bind(this),n.throttleRate),this.destroy=function(){this.alive=!1,this.pics.forEach(e=>e.src=e.getAttribute(this.options.prefix+"-src")||e.src),removeEventListener("scroll",this.handler)},this.options.load&&this.load()};return i.of=function(e){return new i(e)},i.utils=a,i}(),a.memberList=[{jpName:"湊友希那",cnName:"凑友希那",enName:"Minato Yukina",birthday:"10-26",role:"Vo",jpCVName:"相羽あいな",cnCVName:"相羽爱奈",enCVName:"Aiba Aina",bloodType:"A",horoscope:"天蝎",encoreColor:"#c67cb5",memberPicUpper:2},{jpName:"氷川紗夜",cnName:"冰川纱夜",enName:"Hikawa Sayo",birthday:"3-20",role:"Gt",jpCVName:"工藤晴香",cnCVName:"工藤晴香",enCVName:"Kudou Haruka",bloodType:"AB",horoscope:"双鱼",encoreColor:"#81d8d4",memberPicUpper:2},{jpName:"今井リサ",cnName:"今井莉纱",enName:"Imai Lisa",birthday:"8-25",role:"Ba",jpCVName:"遠藤ゆりか",cnCVName:"远藤祐里香",enCVName:"Endō Yurika",bloodType:"O",horoscope:"处女",encoreColor:"#fc926c",memberPicUpper:2,cvPicUpper:2},{jpName:"宇田川あこ",cnName:"宇田川亚子",enName:"Utakawa Ako",birthday:"7-3",role:"Dr",jpCVName:"桜川めぐ",cnCVName:"樱川惠",enCVName:"Sakuragawa Megu",bloodType:"B",horoscope:"巨蟹",encoreColor:"#fb81ca",memberPicUpper:2},{jpName:"白金燐子",cnName:"白金燐子",enName:"Shirokane Rinko",birthday:"10-17",role:"Key",jpCVName:"明坂聡美",cnCVName:"明坂聪美",enCVName:"Akesaka Satomi",bloodType:"O",horoscope:"天秤",encoreColor:"#cbc5ce",memberPicUpper:2}],a.memberList.forEach(e=>{e.memberPicUpper=e.memberPicUpper||2,e.cvPicUpper=e.cvPicUpper||1}),a.member={opened:a.memberList.map(e=>0),openCount:0,upper:a.memberList.length,open(e){this.openCount+=1^this.opened[e],this.opened[e]=1},picMod:0,picSuffix:"jpg",picDiscrip:"流畅体验",changePicMod(){this.picMod^=1,this.picSuffix=["jpg","png"][this.picMod],this.picDiscrip=["流畅体验","丝滑画质"][this.picMod],a.mainVue.$nextTick(()=>a.lazyload.load())}},a.single=[{id:1,title:"BLACK SHOUT",track:["BLACK SHOUT","LOUDER","BLACK SHOUT -instrumental- ","LOUDER -instrumental- ","Roseliaミニドラマ～バンド練習編～ "],releaseDate:"2017-4-19",links:[{origin:"BanG Dream",link:"https://bang-dream.com/cd/roselia-1st-single-%E3%80%8Cblack-shout%E3%80%8D/"},{origin:"NetEase",link:"http://music.163.com/album?id=35423192"},{origin:"萌娘百科",link:"https://zh.moegirl.org/BLACK_SHOUT"}]},{id:2,title:"Re:birth day",track:["Re:birth day","陽だまりロードナイト","Re:birth day -instrumental- ","陽だまりロードナイト -instrumental- ","Roselia ミニドラマ～ふれあい動物編～ "],releaseDate:"2017-6-28",links:[{origin:"BanG Dream",link:"https://bang-dream.com/cd/roselia-2ndsg/"},{origin:"NetEase",link:"http://music.163.com/album?id=35663708"}]},{id:3,title:"熱色スターマイン",track:["熱色スターマイン","－HEROIC ADVENT－","熱色スターマイン -instrumental- ","－HEROIC ADVENT－ -instrumental- ","Roseliaミニドラマ～あこの厨二語辞典編～ "],releaseDate:"2017-8-30",links:[{origin:"BanG Dream",link:"https://bang-dream.com/cd/roselia-3rd-single/"},{origin:"NetEase",link:"http://music.163.com/album?id=36030721"}]},{id:4,title:"ONENESS",track:["ONENESS","Determination Symphony","ONENESS -instrumental- ","Determination Symphony -instrumental- "],releaseDate:"2017-11-29",links:[{origin:"BanG Dream",link:"https://bang-dream.com/cd/roselia4th/"},{origin:"NetEase",link:"http://music.163.com/album?id=36856222"}]},{id:5,title:"Opera of the wasteland",track:["Opera of the wasteland","軌跡","Opera of the wasteland -instrumental- ","軌跡 -instrumental- "],releaseDate:"2018-3-21",links:[{origin:"BanG Dream",link:"https://bang-dream.com/cd/roselia_5th/"},{origin:"NetEase",link:"http://music.163.com/album?id=37987030"}],extension:[{title:"P.S.",content:["和PP'P的⑨单一起买有特典？买买买（钱包卒）"]}]}],a.album=[{id:1,title:"Anfang",track:["Neo-Aspect","BLACK SHOUT","Opera of the wasteland","陽だまりロードナイト","ONENESS","Re:birth day","Legendary","－HEROIC ADVENT－","Determination Symphony","熱色スターマイン","軌跡","LOUDER"],releaseDate:"2018-5-2",links:[{origin:"BanG Dream",link:"https://bang-dream.com/cd/roselia-1st%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0%E3%80%8Canfang%E3%80%8D/"},{origin:"NetEase",link:"http://music.163.com/m/album?id=38509280"}],extension:[{title:"P.S.",content:["嘛，这个好像是买Blu-ray付生産限定盤更有意义呢，通常版的东西就少得可怜了，不过就当单曲买了也不亏（3200+JPY）"]}]}],a.cover=[{id:1,title:"バンドリ！ ガールズバンドパーティ！ カバーコレクション Vol.1",track:["光るなら / Poppin’Party","千本桜 / Poppin’Party","アスノヨゾラ哨戒班 / Afterglow","READY STEADY GO / Afterglow","secret base ～君がくれたもの～ / Pastel＊Palettes","ふわふわ時間 / Pastel＊Palettes","魂のルフラン / Roselia","ETERNAL BLAZE / Roselia","いーあるふぁんくらぶ / ハロー、ハッピーワールド！","ロメオ / ハロー、ハッピーワールド！"],releaseDate:"2018-06-27",links:[{origin:"BanG Dream",link:"https://bang-dream.com/cd/%E3%83%90%E3%83%B3%E3%83%89%E3%83%AA%EF%BC%81-%E3%82%AC%E3%83%BC%E3%83%AB%E3%82%BA%E3%83%90%E3%83%B3%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%EF%BC%81-%E3%82%AB%E3%83%90%E3%83%BC%E3%82%B3%E3%83%AC/"}]}];let r=new Date;["single","album","cover"].map(e=>a[e]).forEach(e=>e.forEach(e=>{a.utils.sameDate(e.releaseDate,r,["month","date","full year"])&&(e.extension=e.extension||[],e.extension.push({title:"Released Today!",content:{cn:"今日发售！",jp:"今発売！",en:"Released Today!"}}))})),a.moreLinks=[{description:"BanG Dream!导航站",target:"https://www.bangdream.moe/"},{description:"BanG Dream! 查卡器",target:"https://bangdream.ga/"},{description:"BanG Dream! 百科",target:"https://www.bangdreamwiki.com/"}],a.langOf=function(){return 1===arguments.length?this.utils.isObjFunc("Array")(arguments[0])?this.langOf(...arguments[0]):this.utils.isObjFunc("String")(arguments[0])?arguments[0]:arguments[0][a.lang]:2===arguments.length?arguments[0][a.lang+arguments[1]]:arguments[this.languages.indexOf(a.lang)]||arguments[0]},a.randomPick=function(e,t,a){return(a=a||(e=>e||""))(Math.floor(Math.random()*(t-e)+e))},a.imgBase=["static/img/","https://app.roselia.moe/encore/"][a.randomPick(0,2,e=>e)],a.languages=["cn","jp","en"],a.displayLanguages=["中文","日本語","English"];let o=(navigator.language||navigator.browserLanguage).toLowerCase(),s=a.languages.filter(e=>o.indexOf(e)>-1);a.lang=s.length?s[0]:"cn",a.birthdayMember=a.memberList.filter(e=>i.sameDate(e.birthday,r)),a.releaseSingle=a.single.filter(e=>i.sameDate(e.releaseDate,r,["full year","month","date"])),e.roselia=a}(window),$(function(){let e=document.title;roselia.mainVue=new Vue({el:"#main",data:{roselia:roselia}}),roselia.lazyload=roselia.LazyLoad.of({load:!1}),roselia.mainVue.$nextTick(()=>{roselia.lazyload.load(),roselia.utils.openPath(roselia.utils.getPath())});let t=$(".modal");t.on("shown.bs.modal",function(e){roselia.lazyload.handler();let t=$(e.target);if(!t.attr("manual")){let t=e.target.getAttribute("roselia-path");t&&roselia.utils.setPath(t)}t.attr("manual",""),document.title=t.find(".modal-title").text()||document.title}),t.on("hidden.bs.modal",function(t){let a=$(t.target);a.attr("manual")||roselia.utils.setPath([]),a.attr("manual",""),document.title=e}),$(".heimu").mouseover(e=>{$(e.target).css("color","white")}).mouseout(e=>{$(e.target).css("color","black")}),addEventListener("popstate",e=>roselia.utils.openPath(roselia.utils.getPath()))});