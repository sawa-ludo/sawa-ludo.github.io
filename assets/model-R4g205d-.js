import{c as K,f as C,h as $,i as N,u as S,v as V,n as Q,t as Z,d as L,k,Q as tt,j as et,L as nt,_ as rt,N as G,S as ot,aW as at,F as Y,as as it,U as st,aX as ut,aY as ft,e as lt,aZ as ct,z as ht,av as F,a0 as W,a_ as _t,a$ as dt,b0 as pt,b1 as gt}from"./index-ClTYhiaF.js";import{s as w,a as M,S as Et}from"./index-DMtIoUJl.js";var mt={VUE_APP_BASE_URL:"https://arab-pk.badambiz.com/",VUE_APP_ENV:"production",VUE_APP_LANGUAGE:"ar",VUE_APP_PROJ_NAME:"",VUE_APP_DEPLOY_SERVER:"ar",VUE_APP_DEPLOY_SERVER_DIST:"",VUE_APP_PROXY_URL:"https://test20-pk.badambiz.com/",VUE_APP_PUBLIC_PATH:"/",VUE_APP_CDN_PATH:"https://sawa-official.github.io/",VUE_APP_TRANSLATE_PROJ:"sawa-h5",VUE_APP_TRANSLATE_SHEET:"sawa官网优化",VUE_APP_TRANSLATE_DOCUMENT:"",VUE_APP_TRANSLATE_SHEET_LANG:"",VUE_APP_FLAVOR:"ksa",VUE_APP_DEPLOY:"github",VUE_APP_SUFFIX:"mobile",VUE_APP_CWD:"代表项目本地根目录不要尝试改变这个值否则你会被炒鱿鱼",VUE_APP_EXTERNALS:"",VUE_APP_ICON:"https://oss-pk-arab.badambiz.com/4c9334bb9c4d7bd3389f9ac272dcf7dc_logo_ksa.ico",VUE_APP_TITLE:"SawaKSA",VUE_APP_SOURCEMAP:"false",VUE_APP_DISABLE_CSS_MODULE:"false",VUE_APP_RELEASE_URL:"https://arab-pk-release.badambiz.com/",VUE_APP_DIST:"dist/mobile",VUE_APP_VERSION:"1.0.323",VITE_APP_TEST:1,VUE_APP_NO_GEN_INDEX_HTML:"true",VUE_APP_FLAVOR2:"ludo",VUE_APP_WEBSITE_VERSION:"1.0.323"};const yt={class:"pcNav"},At={class:"pcNavInner"},bt={key:1,class:"btn-login"},Pt=K({__name:"index.pc",props:{title:{}},emits:["toLogin"],setup(u,{emit:d}){const p=d,_=mt.VUE_APP_FLAVOR;function f(){w.value?(console.log("side login",M.value),M.value.close(),w.value=!1):V().skey?w.value=!0:p("toLogin")}return(g,y)=>{var b,R;return C(),$(nt,null,[N("div",yt,[N("div",At,[N("div",{class:"nameC",onClick:f},[(b=S(V)().user)!=null&&b.icon?(C(),$("div",{key:0,class:"avatar",style:Q(S(V)().skey?{backgroundImage:"url(".concat((R=S(V)().user)==null?void 0:R.icon,")")}:{})},null,4)):(C(),$("div",bt,Z(S(L._T)("去登录")),1))]),N("div",{class:k(S(_)==="ksa"?"logoD":"logoC")},null,2)])]),S(w)?(C(),tt(Et,{key:0,ref_key:"sideLogin",ref:M,show:S(w)},null,8,["show"])):et("",!0)],64)}}}),Bt=rt(Pt,[["__scopeId","data-v-6a1268ea"]]);function vt(u,d={}){const p=G(),_=(p==null?void 0:p.proxy)||{};function f(g,y={}){ot.report(g,{...y,...d})}u==="test_report_ow"&&f(u,{a:_.a})}var H;(function(u){u.LOAD="LOAD",u.EXEC="EXEC",u.WRITE_FILE="WRITE_FILE",u.READ_FILE="READ_FILE",u.DELETE_FILE="DELETE_FILE",u.RENAME="RENAME",u.CREATE_DIR="CREATE_DIR",u.LIST_DIR="LIST_DIR",u.DELETE_DIR="DELETE_DIR",u.ERROR="ERROR",u.DOWNLOAD="DOWNLOAD",u.PROGRESS="PROGRESS",u.LOG="LOG",u.MOUNT="MOUNT",u.UNMOUNT="UNMOUNT"})(H||(H={}));var J={exports:{}};(function(u,d){(function(p){u.exports=p()})(function(p){var _=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function f(a,o){var e=a[0],t=a[1],r=a[2],n=a[3];e+=(t&r|~t&n)+o[0]-680876936|0,e=(e<<7|e>>>25)+t|0,n+=(e&t|~e&r)+o[1]-389564586|0,n=(n<<12|n>>>20)+e|0,r+=(n&e|~n&t)+o[2]+606105819|0,r=(r<<17|r>>>15)+n|0,t+=(r&n|~r&e)+o[3]-1044525330|0,t=(t<<22|t>>>10)+r|0,e+=(t&r|~t&n)+o[4]-176418897|0,e=(e<<7|e>>>25)+t|0,n+=(e&t|~e&r)+o[5]+1200080426|0,n=(n<<12|n>>>20)+e|0,r+=(n&e|~n&t)+o[6]-1473231341|0,r=(r<<17|r>>>15)+n|0,t+=(r&n|~r&e)+o[7]-45705983|0,t=(t<<22|t>>>10)+r|0,e+=(t&r|~t&n)+o[8]+1770035416|0,e=(e<<7|e>>>25)+t|0,n+=(e&t|~e&r)+o[9]-1958414417|0,n=(n<<12|n>>>20)+e|0,r+=(n&e|~n&t)+o[10]-42063|0,r=(r<<17|r>>>15)+n|0,t+=(r&n|~r&e)+o[11]-1990404162|0,t=(t<<22|t>>>10)+r|0,e+=(t&r|~t&n)+o[12]+1804603682|0,e=(e<<7|e>>>25)+t|0,n+=(e&t|~e&r)+o[13]-40341101|0,n=(n<<12|n>>>20)+e|0,r+=(n&e|~n&t)+o[14]-1502002290|0,r=(r<<17|r>>>15)+n|0,t+=(r&n|~r&e)+o[15]+1236535329|0,t=(t<<22|t>>>10)+r|0,e+=(t&n|r&~n)+o[1]-165796510|0,e=(e<<5|e>>>27)+t|0,n+=(e&r|t&~r)+o[6]-1069501632|0,n=(n<<9|n>>>23)+e|0,r+=(n&t|e&~t)+o[11]+643717713|0,r=(r<<14|r>>>18)+n|0,t+=(r&e|n&~e)+o[0]-373897302|0,t=(t<<20|t>>>12)+r|0,e+=(t&n|r&~n)+o[5]-701558691|0,e=(e<<5|e>>>27)+t|0,n+=(e&r|t&~r)+o[10]+38016083|0,n=(n<<9|n>>>23)+e|0,r+=(n&t|e&~t)+o[15]-660478335|0,r=(r<<14|r>>>18)+n|0,t+=(r&e|n&~e)+o[4]-405537848|0,t=(t<<20|t>>>12)+r|0,e+=(t&n|r&~n)+o[9]+568446438|0,e=(e<<5|e>>>27)+t|0,n+=(e&r|t&~r)+o[14]-1019803690|0,n=(n<<9|n>>>23)+e|0,r+=(n&t|e&~t)+o[3]-187363961|0,r=(r<<14|r>>>18)+n|0,t+=(r&e|n&~e)+o[8]+1163531501|0,t=(t<<20|t>>>12)+r|0,e+=(t&n|r&~n)+o[13]-1444681467|0,e=(e<<5|e>>>27)+t|0,n+=(e&r|t&~r)+o[2]-51403784|0,n=(n<<9|n>>>23)+e|0,r+=(n&t|e&~t)+o[7]+1735328473|0,r=(r<<14|r>>>18)+n|0,t+=(r&e|n&~e)+o[12]-1926607734|0,t=(t<<20|t>>>12)+r|0,e+=(t^r^n)+o[5]-378558|0,e=(e<<4|e>>>28)+t|0,n+=(e^t^r)+o[8]-2022574463|0,n=(n<<11|n>>>21)+e|0,r+=(n^e^t)+o[11]+1839030562|0,r=(r<<16|r>>>16)+n|0,t+=(r^n^e)+o[14]-35309556|0,t=(t<<23|t>>>9)+r|0,e+=(t^r^n)+o[1]-1530992060|0,e=(e<<4|e>>>28)+t|0,n+=(e^t^r)+o[4]+1272893353|0,n=(n<<11|n>>>21)+e|0,r+=(n^e^t)+o[7]-155497632|0,r=(r<<16|r>>>16)+n|0,t+=(r^n^e)+o[10]-1094730640|0,t=(t<<23|t>>>9)+r|0,e+=(t^r^n)+o[13]+681279174|0,e=(e<<4|e>>>28)+t|0,n+=(e^t^r)+o[0]-358537222|0,n=(n<<11|n>>>21)+e|0,r+=(n^e^t)+o[3]-722521979|0,r=(r<<16|r>>>16)+n|0,t+=(r^n^e)+o[6]+76029189|0,t=(t<<23|t>>>9)+r|0,e+=(t^r^n)+o[9]-640364487|0,e=(e<<4|e>>>28)+t|0,n+=(e^t^r)+o[12]-421815835|0,n=(n<<11|n>>>21)+e|0,r+=(n^e^t)+o[15]+530742520|0,r=(r<<16|r>>>16)+n|0,t+=(r^n^e)+o[2]-995338651|0,t=(t<<23|t>>>9)+r|0,e+=(r^(t|~n))+o[0]-198630844|0,e=(e<<6|e>>>26)+t|0,n+=(t^(e|~r))+o[7]+1126891415|0,n=(n<<10|n>>>22)+e|0,r+=(e^(n|~t))+o[14]-1416354905|0,r=(r<<15|r>>>17)+n|0,t+=(n^(r|~e))+o[5]-57434055|0,t=(t<<21|t>>>11)+r|0,e+=(r^(t|~n))+o[12]+1700485571|0,e=(e<<6|e>>>26)+t|0,n+=(t^(e|~r))+o[3]-1894986606|0,n=(n<<10|n>>>22)+e|0,r+=(e^(n|~t))+o[10]-1051523|0,r=(r<<15|r>>>17)+n|0,t+=(n^(r|~e))+o[1]-2054922799|0,t=(t<<21|t>>>11)+r|0,e+=(r^(t|~n))+o[8]+1873313359|0,e=(e<<6|e>>>26)+t|0,n+=(t^(e|~r))+o[15]-30611744|0,n=(n<<10|n>>>22)+e|0,r+=(e^(n|~t))+o[6]-1560198380|0,r=(r<<15|r>>>17)+n|0,t+=(n^(r|~e))+o[13]+1309151649|0,t=(t<<21|t>>>11)+r|0,e+=(r^(t|~n))+o[4]-145523070|0,e=(e<<6|e>>>26)+t|0,n+=(t^(e|~r))+o[11]-1120210379|0,n=(n<<10|n>>>22)+e|0,r+=(e^(n|~t))+o[2]+718787259|0,r=(r<<15|r>>>17)+n|0,t+=(n^(r|~e))+o[9]-343485551|0,t=(t<<21|t>>>11)+r|0,a[0]=e+a[0]|0,a[1]=t+a[1]|0,a[2]=r+a[2]|0,a[3]=n+a[3]|0}function g(a){var o=[],e;for(e=0;e<64;e+=4)o[e>>2]=a.charCodeAt(e)+(a.charCodeAt(e+1)<<8)+(a.charCodeAt(e+2)<<16)+(a.charCodeAt(e+3)<<24);return o}function y(a){var o=[],e;for(e=0;e<64;e+=4)o[e>>2]=a[e]+(a[e+1]<<8)+(a[e+2]<<16)+(a[e+3]<<24);return o}function b(a){var o=a.length,e=[1732584193,-271733879,-1732584194,271733878],t,r,n,i,s,c;for(t=64;t<=o;t+=64)f(e,g(a.substring(t-64,t)));for(a=a.substring(t-64),r=a.length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<r;t+=1)n[t>>2]|=a.charCodeAt(t)<<(t%4<<3);if(n[t>>2]|=128<<(t%4<<3),t>55)for(f(e,n),t=0;t<16;t+=1)n[t]=0;return i=o*8,i=i.toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(i[2],16),c=parseInt(i[1],16)||0,n[14]=s,n[15]=c,f(e,n),e}function R(a){var o=a.length,e=[1732584193,-271733879,-1732584194,271733878],t,r,n,i,s,c;for(t=64;t<=o;t+=64)f(e,y(a.subarray(t-64,t)));for(a=t-64<o?a.subarray(t-64):new Uint8Array(0),r=a.length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<r;t+=1)n[t>>2]|=a[t]<<(t%4<<3);if(n[t>>2]|=128<<(t%4<<3),t>55)for(f(e,n),t=0;t<16;t+=1)n[t]=0;return i=o*8,i=i.toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(i[2],16),c=parseInt(i[1],16)||0,n[14]=s,n[15]=c,f(e,n),e}function D(a){var o="",e;for(e=0;e<4;e+=1)o+=_[a>>e*8+4&15]+_[a>>e*8&15];return o}function v(a){var o;for(o=0;o<a.length;o+=1)a[o]=D(a[o]);return a.join("")}v(b("hello")),typeof ArrayBuffer<"u"&&!ArrayBuffer.prototype.slice&&function(){function a(o,e){return o=o|0||0,o<0?Math.max(o+e,0):Math.min(o,e)}ArrayBuffer.prototype.slice=function(o,e){var t=this.byteLength,r=a(o,t),n=t,i,s,c,E;return e!==p&&(n=a(e,t)),r>n?new ArrayBuffer(0):(i=n-r,s=new ArrayBuffer(i),c=new Uint8Array(s),E=new Uint8Array(this,r,i),c.set(E),s)}}();function O(a){return/[\u0080-\uFFFF]/.test(a)&&(a=unescape(encodeURIComponent(a))),a}function T(a,o){var e=a.length,t=new ArrayBuffer(e),r=new Uint8Array(t),n;for(n=0;n<e;n+=1)r[n]=a.charCodeAt(n);return o?r:t}function B(a){return String.fromCharCode.apply(null,new Uint8Array(a))}function x(a,o,e){var t=new Uint8Array(a.byteLength+o.byteLength);return t.set(new Uint8Array(a)),t.set(new Uint8Array(o),a.byteLength),t}function I(a){var o=[],e=a.length,t;for(t=0;t<e-1;t+=2)o.push(parseInt(a.substr(t,2),16));return String.fromCharCode.apply(String,o)}function l(){this.reset()}return l.prototype.append=function(a){return this.appendBinary(O(a)),this},l.prototype.appendBinary=function(a){this._buff+=a,this._length+=a.length;var o=this._buff.length,e;for(e=64;e<=o;e+=64)f(this._hash,g(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},l.prototype.end=function(a){var o=this._buff,e=o.length,t,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n;for(t=0;t<e;t+=1)r[t>>2]|=o.charCodeAt(t)<<(t%4<<3);return this._finish(r,e),n=v(this._hash),a&&(n=I(n)),this.reset(),n},l.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},l.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},l.prototype.setState=function(a){return this._buff=a.buff,this._length=a.length,this._hash=a.hash,this},l.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},l.prototype._finish=function(a,o){var e=o,t,r,n;if(a[e>>2]|=128<<(e%4<<3),e>55)for(f(this._hash,a),e=0;e<16;e+=1)a[e]=0;t=this._length*8,t=t.toString(16).match(/(.*?)(.{0,8})$/),r=parseInt(t[2],16),n=parseInt(t[1],16)||0,a[14]=r,a[15]=n,f(this._hash,a)},l.hash=function(a,o){return l.hashBinary(O(a),o)},l.hashBinary=function(a,o){var e=b(a),t=v(e);return o?I(t):t},l.ArrayBuffer=function(){this.reset()},l.ArrayBuffer.prototype.append=function(a){var o=x(this._buff.buffer,a),e=o.length,t;for(this._length+=a.byteLength,t=64;t<=e;t+=64)f(this._hash,y(o.subarray(t-64,t)));return this._buff=t-64<e?new Uint8Array(o.buffer.slice(t-64)):new Uint8Array(0),this},l.ArrayBuffer.prototype.end=function(a){var o=this._buff,e=o.length,t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r,n;for(r=0;r<e;r+=1)t[r>>2]|=o[r]<<(r%4<<3);return this._finish(t,e),n=v(this._hash),a&&(n=I(n)),this.reset(),n},l.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},l.ArrayBuffer.prototype.getState=function(){var a=l.prototype.getState.call(this);return a.buff=B(a.buff),a},l.ArrayBuffer.prototype.setState=function(a){return a.buff=T(a.buff,!0),l.prototype.setState.call(this,a)},l.ArrayBuffer.prototype.destroy=l.prototype.destroy,l.ArrayBuffer.prototype._finish=l.prototype._finish,l.ArrayBuffer.hash=function(a,o){var e=R(new Uint8Array(a)),t=v(e);return o?I(t):t},l})})(J);var Ut=J.exports;const St=at(Ut),j=Y(()=>{let u={};const{user:d,skey:p}=V(),{pay2User:_,pay2Uid:f}=it();return p&&d&&(u={icon:d.icon,nickname:d.nickname,display_uid:d.display_uid,type:"loginAccount",uid:d.uid}),_&&(u={icon:_.icon,nickname:_.nickname,display_uid:_.display_uid,type:"rechargeAccount",uid:f||_.uid}),u});function Ct(){st("feedBack",G());const u={},d=L._T("充值问题反馈"),p=ut(),{feedbackContent:_,fileInfoMap:f,fileList:g,fileInput:y}=ft(p),b=Y(()=>{const r=_.value.length>0;console.log("fileInfoMap",f.value);let n=!0;return f.value.forEach(i=>{i.uploaded||(n=!1)}),r&&n});lt(()=>{It()}),ct((r,n)=>(r.name!=="login"&&B(),!0));function R(r){if(!y.value){console.log("fileInput is null");return}y.value.click()}async function D(r){const i=r.target.files;let s=i?i.length:0,c=3-g.value.length;c=c<0?0:c,s=Math.min(s,c);for(let E=0;E<s;E++){const h=i?i[E]:null;if(h){if(f.value.has(h.name))return;if(h.type.indexOf("image")>-1){const A=new FileReader;A.onload=async P=>{console.log(" img onload e",P,P.target.result),f.value.set(h.name,{coverUrl:P.target.result,type:h.type,name:h.name,uploaded:!1});const m=await o(h),U=f.value.get(h.name);U&&(U.remoteUrl=m,U.uploaded=!0,f.value.set(h.name,U))},A.readAsDataURL(h),g.value.push(h)}}}}function v(r){f.value.delete(g.value[r].name),g.value.splice(r,1)}function O(r){if(!r)return"";let n=Math.floor(r/3600),i=Math.floor(r/60),s=Math.floor(r%60);return n>0&&(n=n<10?"0"+n:n),i=i<10?"0"+i:i,s=s<10?"0"+s:s,n?"".concat(n,":").concat(i,":").concat(s):"".concat(i,":").concat(s)}function T(){const r=navigator.userAgent;let n="unknown",i="unknown";return/Android/.test(r)?(n="Android",i=/Android ([\d\.]+)/.test(r)?RegExp.$1:"unknown"):/iPhone|iPad|iPod/.test(r)?(n="iOS",i=/OS (\d+)_(\d+)_?(\d+)?/.test(r)?[RegExp.$1,RegExp.$2,RegExp.$3].join("."):"unknown"):/Windows/.test(r)?(n="Windows",i=/Windows NT ([\d\.]+)/.test(r)?RegExp.$1:"unknown"):/Mac OS X/.test(r)&&(n="Mac OS X",i=/Mac OS X (\d+)[_\.](\d+)[_\.]?(\d+)?/.test(r)?[RegExp.$1,RegExp.$2,RegExp.$3].join("."):"unknown"),i&&i[i.length-1]==="."&&(i=i.substring(0,i.length-1)),{os:n,version:i}}function B(){p.setFeedbackContent(""),p.setFileInfoMap(new Map),p.setFileList([])}async function x(){if(!b.value)return;if(!_.value){W(L._T("请输入反馈内容"));return}if(_.value.length>300){W(L._T("文案过长，请调整文案字数"));return}const r=j.value.uid,n=_.value;console.log("submit url:",f.value);let i=[];for(const[z,X]of f.value.entries()){if(!X.remoteUrl)return;const q=X.remoteUrl||"";i.push(q)}i=i.filter(z=>z);const{os:s,version:c}=T(),E="".concat(s),h=c,A=L.api.getUUid();console.log("222222");const[P,{result:m,data:U,message:wt}]=await _t(r,n,i,E,h,A);if(P&&m===0){B(),F.push({name:"feedbackSuccess"});return}}function I(r){return Uint8Array.from(r.match(/.{1,2}/g).map(n=>parseInt(n,16)))}function l(r){return new Promise(n=>{try{const i=new FileReader;i.readAsBinaryString(r),i.onload=s=>{if(s.target){const c=St.hashBinary(s.target.result),E=I(c);n(btoa(String.fromCharCode.apply(null,E)))}}}catch(i){n("")}})}async function a(r,n,i,s,c=0,E=!1){const h=r.tokens[0],A=JSON.parse(h.headers);for(const m in A){const U=A[m];A[m]=U.join(",")}let P;try{P=await gt.request({url:h.url||"",method:h.method,headers:A,data:i,timeout:3e5}).catch(m=>(console.info("upload2 catch",m),{status:-1e3,data:m.toString()}))}catch(m){return console.info("upload2 err",m),""}if(P.status===200)return console.log("link 222",E,h.result,h.url,""),E?h.result||h.url||"":c<3?a(r,n,i,s,c+1):""}async function o(r){const n=await l(r),i={name:r.name,size:r.size,content_type:r.type,md5:n},s=await dt("audit",[JSON.stringify(i)]);if(pt(s)){const c=await a(s[1].data,r.size,r,null,null,!0);if(console.log("link 111 :",c),c)return c}return""}function e(r){if(!(g.value[r].type.indexOf("image")>-1))return;const i=document.getElementById("largeImage"),s=document.getElementById("overlay");i.src=f.value.get(g.value[r].name).coverUrl,i.classList.add("show_img"),s.style.display="flex"}function t(){const r=document.getElementById("largeImage"),n=document.getElementById("overlay");r.classList.remove("show_img"),n.style.display="none",r.src=""}return{expose:u,feedbackContent:_,title:d,userInfo:j,canSubmit:b,fileInput:y,fileList:g,fileInfoMap:f,report:vt,close:Lt,submit:x,switchAccount:Rt,triggerFileInput:R,getFile:D,removeFile:v,durationShow:O,showLargePic:e,showSmallPic:t}}function Lt(){console.log("close"),ht({name:"pay"})}function Rt(){F.push({name:"login",query:{from:"feedback"}})}function It(){const u=window.innerHeight;L.getPlatform().isIPhone||window.addEventListener("resize",()=>{const d=document.querySelector(".btn-area");if(console.log("resize:",d),d){if(L.getPlatform().isPc)return;window.innerHeight<u?d.style.position="static":d.style.position="fixed"}})}export{Bt as L,Ct as s,j as u};
