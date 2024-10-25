!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return a};var e,a={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(t,e,a){t[e]=a.value},r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",d=r.toStringTag||"@@toStringTag";function c(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(e){c=function(t,e,a){return t[e]=a}}function g(t,e,a,n){var i=e&&e.prototype instanceof f?e:f,r=Object.create(i.prototype),l=new M(n||[]);return o(r,"_invoke",{value:S(t,a,l)}),r}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}a.wrap=g;var p="suspendedStart",A="suspendedYield",h="executing",x="completed",v={};function f(){}function m(){}function b(){}var w={};c(w,l,(function(){return this}));var y=Object.getPrototypeOf,k=y&&y(y(z([])));k&&k!==n&&i.call(k,l)&&(w=k);var B=b.prototype=f.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function a(n,o,r,l){var s=u(t[n],t,o);if("throw"!==s.type){var d=s.arg,c=d.value;return c&&"object"==typeof c&&i.call(c,"__await")?e.resolve(c.__await).then((function(t){a("next",t,r,l)}),(function(t){a("throw",t,r,l)})):e.resolve(c).then((function(t){d.value=t,r(d)}),(function(t){return a("throw",t,r,l)}))}l(s.arg)}var n;o(this,"_invoke",{value:function(t,i){function o(){return new e((function(e,n){a(t,i,e,n)}))}return n=n?n.then(o,o):o()}})}function S(t,a,n){var i=p;return function(o,r){if(i===h)throw Error("Generator is already running");if(i===x){if("throw"===o)throw r;return{value:e,done:!0}}for(n.method=o,n.arg=r;;){var l=n.delegate;if(l){var s=R(l,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=x,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=h;var d=u(t,a,n);if("normal"===d.type){if(i=n.done?x:A,d.arg===v)continue;return{value:d.arg,done:n.done}}"throw"===d.type&&(i=x,n.method="throw",n.arg=d.arg)}}}function R(t,a){var n=a.method,i=t.iterator[n];if(i===e)return a.delegate=null,"throw"===n&&t.iterator.return&&(a.method="return",a.arg=e,R(t,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=u(i,t.iterator,a.arg);if("throw"===o.type)return a.method="throw",a.arg=o.arg,a.delegate=null,v;var r=o.arg;return r?r.done?(a[t.resultName]=r.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,v):r:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function U(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function z(t){if(t||""===t){var a=t[l];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function a(){for(;++n<t.length;)if(i.call(t,n))return a.value=t[n],a.done=!1,a;return a.value=e,a.done=!0,a};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return m.prototype=b,o(B,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:m,configurable:!0}),m.displayName=c(b,d,"GeneratorFunction"),a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,d,"GeneratorFunction")),t.prototype=Object.create(B),t},a.awrap=function(t){return{__await:t}},E(C.prototype),c(C.prototype,s,(function(){return this})),a.AsyncIterator=C,a.async=function(t,e,n,i,o){void 0===o&&(o=Promise);var r=new C(g(t,e,n,i),o);return a.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},E(B),c(B,d,"Generator"),c(B,l,(function(){return this})),c(B,"toString",(function(){return"[object Generator]"})),a.keys=function(t){var e=Object(t),a=[];for(var n in e)a.push(n);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},a.values=z,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(U),!t)for(var a in this)"t"===a.charAt(0)&&i.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function n(n,i){return l.type="throw",l.arg=t,a.next=n,i&&(a.method="next",a.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],l=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var s=i.call(r,"catchLoc"),d=i.call(r,"finallyLoc");if(s&&d){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!d)throw Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=t,r.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),U(a),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var i=n.arg;U(a)}return i}}throw Error("illegal catch attempt")},delegateYield:function(t,a,n){return this.delegate={iterator:z(t),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=e),v}},a}function e(t,e,a,n,i,o,r){try{var l=t[o](r),s=l.value}catch(d){return void a(d)}l.done?e(s):Promise.resolve(s).then(n,i)}System.register(["./index-legacy-C8pcx37t.js","./index-legacy-C89asfAn.js","./index-legacy-D5-TBbS9.js","./AboutSA2-legacy-BMMjlNMw.js"],(function(a,n){"use strict";var i,o,r,l,s,d,c,g,u,p,A,h,x,v,f,m,b,w,y,k,B,E,C,S,R,L,U,M,z,J,D,I,Q,K,N,W,j,T,G,F,V,O;return{setters:[t=>{i=t.a},t=>{o=t.c,r=t.F,l=t.v,s=t.av,d=t.f,c=t.h,g=t.i,u=t.t,p=t.u,A=t.d,h=t.j,x=t.n,v=t.Q,f=t.L,m=t.aw,b=t.z,w=t._,y=t.a9,k=t.a2,B=t.m,E=t.q,C=t.ax,S=t.ay,R=t.k,L=t.ad,U=t.M,M=t.a5,z=t.r,J=t.e,D=t.az,I=t.aA,Q=t.A,K=t.aB,N=t.a0,W=t.aC,j=t.N,T=t.Z},t=>{G=t.s,F=t.a,V=t.S},t=>{O=t.C}],execute:function(){var q=document.createElement("style");q.textContent='.bg100[data-v-4e1a1648],.phoneNav .close[data-v-4e1a1648]{background-size:100% 100%;background-repeat:no-repeat}.center[data-v-4e1a1648],.phoneNav[data-v-4e1a1648]{display:flex;justify-content:center;align-items:center}[data-v-4e1a1648]:root{--u: 10px}@media screen and (max-width: 600px){[data-v-4e1a1648]:root{--u: $basePx}}@media screen and (min-width: 600px){[data-v-4e1a1648]:root{--u: 1px}}.phoneNav[data-v-4e1a1648]{width:50rem;position:relative;height:44px;background:#fff;z-index:2;border-bottom:1px solid #f7f7f7}.phoneNav .name[data-v-4e1a1648]{font-size:2.6388888889rem;font-family:TajawalZii;font-style:normal;font-size:17px;line-height:23px;height:26px;margin-top:3px;transition:all .3s;display:flex;justify-content:center;align-items:center;text-align:center;color:#333}.phoneNav .close[data-v-4e1a1648]{position:absolute;right:2.0833333333rem;transform:translateY(-50%);top:50%;width:2.6388888889rem;height:2.6388888889rem;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAFVBMVEUAAAAyMjIwMDAzMzMzMzMyMjIzMzPuJxmUAAAABnRSTlMA5R18lVr2gpf9AAAAoklEQVRIx+2UMQ6DMBAETUweQArX4QdO45o01KnSI2D+/wRKaKxbyxKVp16NLe/5XKNRgx8mOzSz2aEAkxJazVACohUagd0KPQLwU1QvRbW8b1T9FdUTRZUQuvEg1Dwr3fTAWtrNhxz7RZzlfIWOPLEo5JXj3Ne6eJ4ARPkx7VrsgrVRsUWLOL71H2G8WWQvjE5uRF2H9Ys1KSu6H6JrNMo5AI1Wc8mG99OSAAAAAElFTkSuQmCCdGlueQ==);width:24px;height:24px}.avatar[data-v-4e1a1648]{background-repeat:no-repeat;background-size:100% 100%;width:24px;height:24px;margin-right:16px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAJ1BMVEX///8zMzPl5eXy8vJNTU2MjIyurq57e3tgYGBAQEDT09O/v7+ZmZkDhrRPAAACcElEQVRIx8VWsW7UQBBdkpwP4isYMDl8pDBSBAhRQAGioCApIKJKFAmEaC4RCOguKFDnAFHjghTQJHSIJiloqC7AhzHe9fitd+xIqfIae8fPO/NmxrM2J4orTz4SLb/9fQRl9imVeLjfxrmRU4XkTTPnKtXQyLpNQBsrFl/wOAw506tU4OLj78Zc/zW2iws3A9I1a/5Umqdf2eVSIH6RbenfQEWS1Ug/iLGmtH71LVNF1I9MDQvF3ruBgcPUUpa8dRHRJBTcK9TizQ4v54zCOptXaquhJkVsvlSFzd7mTQMOOXTx13XbanS8B5eJkkAaBJ0r7zf5trK/XEzeVW/sEfXLkIhoJObXxHjg+8uqkKRId8nig+ybS/5meE8xuh7hHELfZ3tzgJA6jgNNt4gGEvc2AnUYlIbTXFN7wzqH0Fn6Q9JT229sk4YUDiylqBjvxSDJxzl2bjrsFps7IIBVJ6KLUvdAmqBBRk7AoH2nPSd9BmnyY0Lx7/PlFNFZ06wOT+0FWiykToqkM65JunYgIXDdBQgcKdD9hBR0a9/cc2LsYH1gk4my6B5HWSIUuAFjl9cppM4H0msnS45KAahmIm63qzdfbOW0/CwzaN++qDxf2u5InjYkTdJHZ6pxcS8Ph/imzSWjJ7MjAofSCT5uuVspruwLSDJ83OWeA5nAwDcXUr82eiIKMKxGD2bVekiasw9G3uyYj0lh99CGhlLTP03awVBGQ2qgRdGQGv4sXSANdZjN5s2cNAuOMg0cZTgUNBKcZO1RvdcHdQCcgECkHKb7rT8YwNqxf0PA8jymf0wL4i3hfIF4jZ/uJ2vDnCT+A3XokIOMqTVjAAAAAElFTkSuQmCCdGlueQ==);position:absolute;top:10px;left:16px}.titleContainer[data-v-4e1a1648]{display:flex;flex-direction:column;width:100%;height:100%;justify-content:center;align-items:center}.subtitle[data-v-4e1a1648]{font-family:Noto Sans Arabic UI;font-size:10px;line-height:14px;height:26px;letter-spacing:0px;text-align:center;color:#a6aec0;display:flex;justify-content:center;align-items:center;margin:-1px auto auto;transition:all .3s;position:relative;width:fit-content}.subtitle[data-v-4e1a1648]:after{content:"";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAALVBMVEVMaXGnr7+nrsCmrsCtr7+lrsCmrsCnr7+nr8CnrsCnrr+mr8Cmrr+mr7+mrsBECUX3AAAADnRSTlMAQMHfEO+AIGCkUJBwMKzPzG4AAAAJcEhZcwAAFiUAABYlAUlSJPAAAACkSURBVHicnZFLEgMhCESVj6LO9P2Pm1JMotZsEnZ2A209Qvi/YlMu96lKIoxiy4t6dVVbvAsDIBPXMwNaoj9q6WPuRPAly7wpvCuC9kB6MnKSRyMz6m7ISMmMdKxqsLceNuNW2NTDnhEBdf0MN6Cc39XBp3p/T3JDCFwXygqaIKRgbg9BGlC+gFLnPdYxcK14OmG2SACdt7J+CujW/rE0Lfh/rhevKQZct76WIwAAAABJRU5ErkJggnRpbnk=);background-size:100% 100%;position:absolute;margin:auto;right:-15px;top:0;bottom:0;width:12px;height:12px}.bg100[data-v-668c4915],.mask .close[data-v-668c4915],.mask .img[data-v-668c4915],.search .searchArea .searchIcon[data-v-668c4915]{background-size:100% 100%;background-repeat:no-repeat}.center[data-v-668c4915],.mask[data-v-668c4915],.search .userData .userMessage[data-v-668c4915],.search .userData[data-v-668c4915],.search .message[data-v-668c4915],.search .searchArea[data-v-668c4915],.search .button[data-v-668c4915],.search .question[data-v-668c4915],.search[data-v-668c4915]{display:flex;justify-content:center;align-items:center}[data-v-668c4915]:root{--u: 10px}@media screen and (max-width: 600px){[data-v-668c4915]:root{--u: $basePx}}@media screen and (min-width: 600px){[data-v-668c4915]:root{--u: 1px}}.search[data-v-668c4915]{width:100%;height:92.5px;background:#fff}.search .question[data-v-668c4915]{width:18.5px;height:18.5px;background-image:url(../../assets/img/mobile/login/question);position:absolute;left:-22px;top:50%;background-size:100% 100%;transform:translateY(-50%)}.search .button[data-v-668c4915]{width:65.5px;height:33px;background:linear-gradient(55deg,#8023f7,#a45dff);border-radius:16px;font-size:16px;color:#fff;text-align:center;margin-left:-1px}.search .changButton[data-v-668c4915]{width:68.5px;line-height:15px;margin-right:10px}.search .searchArea[data-v-668c4915]{justify-content:flex-start;width:288.5px;height:31.5px;background:#fff;border:1px solid #9b4ffd;border-radius:16px;display:flex;flex-direction:row;align-items:center;position:relative}.search .searchArea .input[data-v-668c4915]{font-size:15px;font-family:PingFang SC;color:#494a4a;text-align:right;width:192.5px;padding-right:6.5px;user-select:auto;height:29px;line-height:29px;border:none}.search .searchArea .input[data-v-668c4915]:focus{outline:none}.search .searchArea .searchIcon[data-v-668c4915]{width:19px;height:19px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmBAMAAACxJE+eAAAAKlBMVEUAAAAsLCwtLS0rKysrKysrKyssLCwrKysqKiopKSkpKSksLCwpKSkrKyv67xPrAAAADXRSTlMA7HPMrRmdiQhgKVI7YWfm9AAAARxJREFUKM91kb1qAlEQhTeJhEQtUqUTTFKkkEC6kEJImnSBtRZBwXZBbawEfQPBWtgXsNDS0idwdf0Dz7s44+zOrKinmcvHtzN37jqS8nt7ytXy8AbKl5tELzhmk4BjRFkoykDTiFkHQNh6/aWyTmgLl7uaWCKLEEEP2AsrAnn7osuHLHWxzvJxCvjkGp2fuFYAXy+fk4ZDBI7mHxspensWljJ2b2yEgAfnsDLWA9wj2xq7AfzL3nm/K3M/qGg8rHWPOLyH7PgTo/to3wzElz6oiq/vlwXgynwS5dTRd36M/8cAyuiGQFiY1MDpC7tFIjsbJwlMTHuCQr9oYrrJ6Nl37lSkmbP6X4FfxEQLi/kTIuL8XDRmog6xpL6dA2uyzrEsVZGdAAAAAElFTkSuQmCCdGlueQ==)}.search .message[data-v-668c4915]{justify-content:center;width:360px;text-align:right;color:#f02727;font-size:16px;margin-top:11.5px}.search .userData[data-v-668c4915]{width:auto;height:54px;position:relative}.search .userData .userMessage[data-v-668c4915]{flex-direction:column;align-items:flex-end;font-size:11px;color:#666;min-width:135px;margin-left:5px}.search .userData .userMessage div[data-v-668c4915]{text-align:right;white-space:nowrap;max-width:175px}.search .userData .userMessage .nickname[data-v-668c4915]{font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.search .userData img[data-v-668c4915]{border-radius:50%;width:53px;height:53px;margin-left:5px}.mask[data-v-668c4915]{position:fixed;top:0;left:0;width:100%;height:100%;flex-direction:column;z-index:2}.mask .img[data-v-668c4915]{background-image:url(/assets/question-CpUMoAFy.png);width:239.5px;height:468.5px}.mask .close[data-v-668c4915]{background-image:url(../../assets/img/mobile/recharge/close);width:20px;height:20px}.pc[data-v-668c4915]{text-align:left;height:35px;flex-direction:row-reverse!important;justify-content:flex-start}.pc .question[data-v-668c4915]{width:13px;height:13px;left:-17px}.pc .searchArea[data-v-668c4915]{width:193.5px;height:21px}.pc .searchArea .input[data-v-668c4915]{font-size:9px;width:132px;height:10.5px}.pc .searchArea .searchIcon[data-v-668c4915]{width:13.5px;height:13.5px}.pc .button[data-v-668c4915]{width:37.5px;height:21px;font-size:9px}.pc .changButton[data-v-668c4915]{width:60px;display:flex;justify-content:center;align-items:center;line-height:10px;text-align:center}.pc .message[data-v-668c4915]{font-size:9px;width:200px;margin-top:0;margin-right:22.5px;justify-content:flex-end}.pc .userData[data-v-668c4915]{justify-content:flex-end;width:243.5px;position:relative}.pc .userData .userMessage[data-v-668c4915]{width:auto;font-size:9px;justify-content:flex-end;margin-left:10px}.pc .userData .userMessage .nickname[data-v-668c4915]{max-width:130px;font-size:9px}.pc .userData .button[data-v-668c4915]{position:absolute;left:0;top:50%;transform:translateY(-50%)}.pc .userData img[data-v-668c4915]{width:37.5px;height:37.5px;margin-left:9px}[data-v-68223d89]:root{--u: 10px}@media screen and (max-width: 600px){[data-v-68223d89]:root{--u: $basePx}}@media screen and (min-width: 600px){[data-v-68223d89]:root{--u: 1px}}.mask[data-v-68223d89]{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;z-index:2}.about[data-v-68223d89]{padding:25px 22px 20px;background:#fff;border-radius:16px;display:flex;flex-direction:column}.about__title[data-v-68223d89]{margin:0 auto 14px;width:261px;height:23px;line-height:23px;color:#333;font-size:15px;text-align:center}.about__ctx[data-v-68223d89]{margin-bottom:17px}.about__img[data-v-68223d89]{margin:auto;border-radius:4px;background-size:cover;background-repeat:no-repeat;width:261px;height:338px}.about__img.-sawa[data-v-68223d89],.about__img.-sawaKSA[data-v-68223d89],.about__img.-baloot[data-v-68223d89],.about__img.-ludo[data-v-68223d89]{width:261px;height:338px}.about__btn[data-v-68223d89]{width:257px;color:#333;font-size:14px;border-color:#efeef4;text-align:center;height:38px;line-height:36px;border-radius:18px;padding:0 14px;border:1px solid #efeef4;margin:auto}.aboutDots[data-v-68223d89]{display:flex;margin:0 auto 10px}.aboutDot[data-v-68223d89]{margin:0;padding:5px}.aboutDot__inner[data-v-68223d89]{width:6px;height:6px;border-radius:3px;background-color:#aaa}.aboutDot.-on .aboutDot__inner[data-v-68223d89]{background-color:#7858ff}.bg100[data-v-d948ab37],.pc .back .icon[data-v-d948ab37],.login .otherLogin[data-v-d948ab37]{background-size:100% 100%;background-repeat:no-repeat}.center[data-v-d948ab37],.pc .back[data-v-d948ab37],.pc .login .message[data-v-d948ab37],.login .otherLogin .buttonList[data-v-d948ab37],.login .otherLogin[data-v-d948ab37],.login .loginBox[data-v-d948ab37]{display:flex;justify-content:center;align-items:center}[data-v-d948ab37]:root{--u: 10px}@media screen and (max-width: 600px){[data-v-d948ab37]:root{--u: $basePx}}@media screen and (min-width: 600px){[data-v-d948ab37]:root{--u: 1px}}.login[data-v-d948ab37]{width:100%;height:100%;overflow:scroll}.login .loginBox[data-v-d948ab37]{flex-direction:column;margin-top:120px;width:100%;position:relative;z-index:2}.login .loginBox .error-tips-c[data-v-d948ab37]{position:absolute;bottom:-19px;right:0;display:flex;flex-direction:row-reverse;align-items:center;height:16px}.login .loginBox .error-tips-c .error-icon[data-v-d948ab37]{background-size:100% 100%;background-repeat:no-repeat;width:16px;height:16px;flex-shrink:0;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAIVBMVEUAAAD/T0//Tk7/T0//UFD/UFD/T0//Tk7/TU3/TU3/T09XT5mWAAAACnRSTlMA6IhwIBC/NGBQkVHOuAAAAQtJREFUOMu9k6uuAkEMhv+Tc8mRCM4RawGD2pBgUIBEcTEEBZYnABSGkPACJLjlskCfEpj9mdmdJqzjU538007bafFeZrXSFprBRO78r+DRD8QQlZHhMxAShUjxNRVL3ISjJSmKKQcGYrCmclAufKEy4Cs2JTHsgWpihdlIZ6CTWH8UeO8ILJ6+hu+AHlaIukb4FV/gIz88XYAdzbERPpywoVkwwsIJDRcV9Gcd9s6DhhYOLEMJ+5eCDRUDQSbURki5L+TKdBVnFqgosCWKsfsn/iBZsu02lWq67fZ4Aka2DEPPF4pqGFhr6I1PnQXGeQOnRzRnqPUa5CwOaVOJKvAYJstZh2ZeK63xVm7tB2YHthXzwwAAAABJRU5ErkJggnRpbnk=)}.login .loginBox .error-tips-c .error-tips[data-v-d948ab37]{font-family:Noto Sans Arabic UI;font-style:normal;font-size:11px;line-height:15px;text-align:right;color:#ff4f4f;margin-right:4px}.login .loginBox .inputC[data-v-d948ab37]:nth-child(1){margin-top:0}.login .loginBox .inputC[data-v-d948ab37]{position:relative;border-radius:6px;width:calc(100% - 64px);height:48px;padding-left:16px;padding-right:16px;display:flex;flex-direction:row-reverse;align-items:center;background:#f5f7fa;margin-top:32px;caret-color:#7858ff}.login .loginBox .inputD[data-v-d948ab37]{height:48px;width:100%;background:#fff;position:absolute;z-index:0;left:0;top:0;border:1px solid #7858ff;border-radius:6px}.login .loginBox .input[data-v-d948ab37]:-webkit-autofill,.login .loginBox .input[data-v-d948ab37]:-webkit-autofill:focus{transition:background-color 600000s 0s,color 600000s 0s}.login .loginBox .input[data-v-d948ab37]{-webkit-user-select:text!important;position:relative;z-index:1;outline:none;border:none;background:none;font-family:PFDinTextPro NO;font-style:normal;font-size:14px;line-height:19px;text-align:right;width:241px;direction:rtl;color:#272a33;flex:1}.login .loginBox .input[data-v-d948ab37]::-webkit-input-placeholder{font-family:Noto Sans Arabic UI;font-style:normal;font-size:14px;line-height:19px;text-align:right;color:#969fb2}.login .loginBox .icon[data-v-d948ab37]{margin-right:18px;z-index:1;flex-shrink:0}.login .loginBox .question[data-v-d948ab37]{background-size:100% 100%;background-repeat:no-repeat;width:20px;height:20px;background-image:url(data:image/png;base64,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);top:16px}.login .loginBox .hide[data-v-d948ab37]{background-size:100% 100%;background-repeat:no-repeat;width:20px;height:20px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMXSURBVHgB7ZjPbxJBFMffLKR6E/8D/AuEGwej9KJH7V8g/Qu6m6IBNHGbGCCWhvXmjfIXWK966Bo99Ab+B/gfcG1TdnwzIBT2BzNLYWnyPglhM7Mz8747b957uwAEQRAEQRAEQRAEQRAEQdxtzNqnnPjBlqNqpxE5SfWkDdzoiZ+83lJ07GShk9TaOeCj3lwj57tO840LW4T5/rgII3Y+18i8vFN/2w+6P3KHfTC2fbvs6dkUKtipW+IJuQvNuW1ybbN28gE4LJxbNgjbXUH0DnN+FNBoyoUSxnrXeo322b4ODkdR41JRnRe/fwwKT54/xJNeWOgqFp6+gItf339CAli11gHn8MXXwdip0ziMFLz0DDvNsgl+1xa7byfh3sK7UKzj72ED2DGsZeMZKGDa7QxcehixeTZwIW5g9LYGsEbMSjsLbNTByyKsYIOS4NmC3nmwaDETs8EzurctXD7sK+9AXKJXZQIW1nrgyoKni1+OvkLgU54szjBoeIa7qvDlQiV94Kk9nbW0BE+NqRzbuKPRkRoDCBhe1/moXqhIkdfXORgZL9GyUoRQEY0/w/2U7djWEDSIJVgaV8EKhxmdUBefx8WlRG78CylvliNHLIMPJoPGP8Z5cnidixQ5Y4g7m4/jRbEF/8estXr+5L8J4gVLvdJyAUwRnbWLZWwo3ZfBgutyGUTlMdAgtuCxWF4Cv4GnaFwfVsfFySzMrY9kLeCxgByLosdBVJl4QUsWHNz0dXDAtFQuyXtEGgMPzzkXASi73BNEhOcucPYH+NWZ06wOAtbFNbm/2BEVVv1wHxTQFjwu2ANr2KnY0LGVRhYgnZ1E+OJsLP+Gr52vQGX9sAyh+Oqq79IxxQrErgUaxdgDUATH2/JM++dQOsv6gheDh6LY22RS33dnLfhK2CifqYzVFyyDB563MS4mfxMSAAWW8G8Pz/w+3DPyquPiFx6YDnSrnOnYakt8kineaHJRwC5sgNhpKa7YpFmp8LiLkOCNwPj8pyE2DYJrJw1JsJN2sCTMotJnmNeUPs0QBEEQBEEQBJEs/wCuD0Muk4XjDwAAAABJRU5ErkJggg==);top:82px}.login .loginBox .look[data-v-d948ab37]{background-size:100% 100%;background-repeat:no-repeat;width:20px;height:20px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUWSURBVHgB7Vpdbts4EB5S2WwefYPVniDOCeKcoM4JNj1BZaRdOMYCsYFFHGwdWD1B0hPEPcGqJ4h7gvXewI9tYHM6pJzEEmX9jeoUrT4gtqOfIYczHM58JECNGjVq1KhRo8aWIGBL8PpD1/xY7LiRGwrnsLuc+/2zGWwBlStsFLvfbQHCPgA2qQmXvt18b4sZPUt/Yko9+wSwnPoXf06hQrAV9vrjBtyrNnX0kMS1AbEBlYIGQUBAcj/4w9cTYKK0wt5fb1uwlC9Iwkn1Sm6AEHP6JKWX78pavrDCoaLinH624HkRgIMD/+83QZGXcivsdccuiOU15FXUWEPPRyBL4P+g5Cy8oWax5xpmngvVABT71COX5n8T8mMC6HT8y84sz8O5FPZ6V+fktv0cjwYk8gOgmsLeztTvd+ZQEl6XPElIUhxfQJ5BFqLvX5wOMh+D1EZzWTUwSv4qbzgKZvYDFA0AnGdE/ClZ+zjN2iK1EaH+TWlAR86Bf1lsDnERWj4thlBUR3m0SWmRLJSUleouOfpqgerlthWNw+tenWy2uF7KlsdJkVzaglaWTVIW4R257sFzK6vhX57e6L6YPlmgQUDnNpwKUUQsbJKIL2TZxFHDjj9848N3CO/syqP+je07ZGltoLXYshO5/0XZLqKXF6WOuVY167cSf9DS01prg1JISiOZWZQ/PPW93j8BOSx5Jqx5JrVjdILOw5VHC68i8n8J8o45ncm/fqcHm3xt6XmN19YNxKMHgz3N4bBT8QcHLGV746YJfrmSFdQDc0eWKpJ0RGDmddKcDqN6+NN0LNG6Ykau8juURHqkT8WcAs4By9K90Z2Vra2svLLw0rPeQsjMWlKxKdJno5HobUWgsGNdk6GXydU/h9G7ZF3tHiXhnY3a+WvgRLRMglESZr4KiGZ9KHSKCtIsRXHz6/qTAxEKZ0FSROdAwfvYlabWVcI9VSdx0DIBLGDpwPMkQi9fDEhh18ufP5PCcpGQUSGvCChW3m0S4gIHMlaGGuy4En4ySGIRZ/ZV6QILmoxjg0feLYXtuRLnEvbAdl/FnYP4EbgQgqdwUuDc/WUmTWItYqMpgBchEW+AC27gRCu7MwzMag5bwhvsdRA4S5vO8jgpLeXU8aCHYLwuVFgldE6IMXCAzktr8c8DXZ1REQEcIJzbFx1T2hqFN1ikSXVmaaXDXFgdFVLaMJ3MikkTjvaSFjzIfFqWqDKyX0evczYqPZ8NxaKcg5xROyAq98C/6JQOVialTWJXtbetEGU8uiOfrryKPU5BTR1x93jC/BraJH//KTHR3BOSovi+GoJB3loFC5WL/uXrx+Loh6B4Or3RK0RI6JtN8VisZTo9K3wSMPhW/HNRrAyk56xd3m5gUJJpWs06EOu3mQKFAbH8N/CMWG3mXSf20fBwMpFE4BHxJTazuMjezCtBxD8KNzTN8ja9+gktTiMacJaT1H6ErnuSY58p0BG51FZLpMHu2/46EZbaoN5nctSUY3mj4GLRJJfNv5kWbvv0sx4rtl0q1ZgEtyE/9FKml55P5Gbh9qkTq7XVQ2Wm6Fv8ZrxJCLcAH5Zp1XUU3xDP3MzaGkpt5pU/8mAiufRMGbbNIw+UpJCnTMomKpWc4nnMokAcsqmZOMKTBBPapvkIe3LCzQGqP7akLa+cpiHydBoJwi18bAn1kSVNANxT5K/2/Nb2DqZ1hxT0nAZZKub+i5n+rFqxGjVq1KhRo0aNZ8dXfsx5KGb5SFwAAAAASUVORK5CYII=);top:82px}.login .login-bg[data-v-d948ab37]{background-size:100% 100%;background-repeat:no-repeat;width:100%;height:360px;position:absolute;bottom:0;left:0;background-image:url(/assets/bg-C8Rmqjiu.png);background-size:contain;background-position:0 bottom;z-index:1}.login .login-bg[data-v-d948ab37]{background-image:url(/assets/bg3-IJkTssN2.png)}.login .loginButton.-off[data-v-d948ab37]{background:#eae5ff}.login .loginButton[data-v-d948ab37]{background:#7858ff;border-radius:100px;width:calc(100% - 64px);height:48px;margin-top:80px;justify-content:center;font-family:TajawalZii;font-style:normal;font-size:15px;line-height:22px;display:flex;align-items:center;text-align:center;color:#fff}.login .otherLogin[data-v-d948ab37]{flex-direction:column;justify-content:flex-start;width:360px;height:251.5px;position:relative;z-index:2}.login .otherLogin .buttonList[data-v-d948ab37]{margin-top:71px}.login .otherLogin .icon[data-v-d948ab37]{background-size:100% 100%;background-repeat:no-repeat;width:46px;height:46px;margin-left:24px;margin-right:24px}.login .otherLogin .google[data-v-d948ab37]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAdVBMVEUAAADu7u7s7Ozu7u7v7+/s7Ozt7e3r6+vo7e7v7+/////u7+/qQzVChfQ0qFP7vAX4+Pj09PWewfq50vv+69q+5MjzjIRYlPX2rKbwc2iIzZpLsWptwIP90Fn6zMjtV0v+5Z9wovf0hyD8wx+qtzM+l6ZirUB06VS4AAAACnRSTlMA30OIxCFmEPSn6CS0UAAABOBJREFUeNrslsFuqzAURGNjMBCeMC8WNYtAlP7/PzZJJSYtBO61Dcqis4u8OZqZO+TgLZ1mSVEoIY4PCaFUkUipD7tKy6wQxxdSRSYP+0gmKj+uSSWb4YDjCaNpjDHlqNuPpsGrKDak0eBogDCRaUCTHraQVBMMAo6S0Q3JxISDSCOyqCRZzuIATWwY+e0IOBiKCiMVQHxkvjuTRrgagITBJDo0G4CEwggZbEkTyIHOJN4kKcESpjGp7wXDkljG5F6nlMCSSDJ+IenHCZeRdbyp0PyaIJy4IYn0HUhuIYGFSIKabMPyDiRgIZOUG+rB8hYkZBa9LQlY1m+6oPUkvC+KsLEbkoBlfXcz+p6Es2SLlc23J8Hu5kvVJVR2p+omINlBS3WR3MqG10W+WpS9ioK6CP0G8SxFlBLi2SkitWc8iEjNj1u5u2Zt2bmziEhEM8XY3jnX99avZzP7L3w627tuqEZ1nbM+tuQ61JS+HTGgobWBtvBN6bvqhTrn2RZMfigINPTcI/LeFNtVK2otyxb1c2gZlgzVqgbHsgXFLTimtBVJjjO5iU9pTVcR1RnGPbNKC5KYLCgu8olGAjlOQux8YpMgIW4+jkvCTShBPj4kQ9fe1A2/loVBgoQUMR87zK28HZ9d50mClaPm066Oqm2ZJEgo14yq9BNH+jnnQMIvS0asyvW3JWbeO5CwypLdV4VWlUt9pV2IAwmnLMW9tbR8zjVYQBJLjz8tmlYVW9/FvBDe15na2vOdZDRmKOOjpAdJa+1n/cxi40Ggt8SttfWoyPFgb4kHdKmha1RTcEKY/bWqQOfJ8+n/kk5xUFAV6DJ5/vi3pA/iV0hQDsjUz7I0FMiQhoWGYp9JPksuSkNDObJRzmyUnDQsNJRLGMrpD+WrnDPsTRAGwrAgQjuSxpI1JG33wUT3/3/i0My9BF24g1rP7f1oNHns2yv0etf/g5Jl2mYIZiJKIWmJy7DwH4gLv+Y/Do+3j8Op+qUovBD6NLPeW3IAAUWzX52Oxhg/9/WOMWvx6lQTXyhBMshxBqV/I6GU1Dzcx9Wci8KYfi62O+L2kLX5OJqr/Kw9kCWnBgvilgwkMywdI5SBUtE3qu9ncygsHesBhABibN+jMQSW/ZSkp26DGEkNZyYK7Z0vhRN7UJDUaBRQSMMC+ckPlR8+PHHCByisBFgbzI2i+6Fp3TdrGNtjOQkwrLcci6AQ/aA45uzJ9mCtZSZLvSEJJnXcdLYip5Ajj+XAOZ2CQyTZQGUJZ5I9OY2g6ccNfBYDEpo/cIjKQvYo7tmnh3Ao0dzFYsz2B6lBmhzBpOB4ebilx5itnzWnXVQigYmbamCi4ybVVxVHuLgaBJN2bSGA8neGJvgJCL8QoFlUEKdcDCOM6DgcGJRURSNWuYvY/wSDIreUBkGUSRgUyWVXm/I5xWg72SV6kgoXBZVzSipy3TS5S39foyBaUJm4pOL5YdHN1VKgX6nRQlD7iaSmHEmtSpIauCS1tUlq9htiWj+qBbJqXrcxVFS7rKQm4kGpW6ub1Q3nNglIUT6/Dd+iDX+ddtU6GJvyQou6aGETGwTeJIJZfJEFIjiV1lzv0fzVS08u2umCdxWMQtSkV6kL6gU5Ksd1PVU7J1U9mgM4tf6Vp9B1/sudyq2uxldMab2td8spvgD6IXn7IffAMAAAAABJRU5ErkJggnRpbnk=)}.login .otherLogin .facebook[data-v-d948ab37]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKBAMAAACHqc9XAAAAKlBMVEUAAAAXdvEYdvMYd/QYd/QYdvMZd/MZd/MZd/P////h7f6dxvtNlvZxq/iv86/DAAAACHRSTlMAGXCawD/kr/A0ffYAAALUSURBVGje5Zq/btRAEIfvfD5orUAQpTlRUBpdQlwGEqQrE4WglEEIySVSmmvP9jkDgh4f0AfxBJFFH0JeAPEycFbQKPLdzK5/W0TK9wCf9s+sdzyznRtGd3Uw3NjeGg722ztWNhL6T761287xhK7y+oH9XB5Sk2eB5UBGtIjcajh7CS2meGwueUHLWUckzHMzyV2SMZrUCmkYLHE/IY0iVONkTDqZFjcvyYQ3sqRHZoTifEZkRi7N6R6Z8grYH6bYWWp5ROakyyQe2RACQ2FSZChMKAwFHEyfbNmRYgWJmW5CthTNAPbJnk1gbZlMWFtgfXltkfWNqQ3HUNzylNAJ8ZSaO4Scgi61JWh+tMHAO6C2TDvMiEQuamgRuWng/ilrZsJe68tyWrJFXJj7guS8lC1Tk/D/UCqWzOQDda5ZisDgEJ2yRbkKfGlCqmVTX9yPumWiH8X3uiXVI/edbsn1A/3zUvG9qir5WHu65US/r3u65YwEotpyS7eQxKF6in4rFt7qA8DC5zEGLRmHi2iZqVcbbilqC4EWCsSPblVV38qaak5Ly1zBzMTL2oMtoYXls2jpwZbIwvLVieWLaPFhy1sLyych+3BluW1oOREtPSltubwaL/5xJu8RcBpdWzzYEjqz9AELfxm618TSmZMAFk4axk4sMWhJOZUCLFO+7QHLhDMPwHLIWRBgiTgjAywhZ4eAJeBMtb0l56wZsKRqBq9bOIP3AQv/TXiQJeS/LN2iF4RiwJLxTzlgmXBNCrBEBn/lv6o5P8wqMCNqS+68WuFTWyLnVRy8ooRXt+S9tq8Uj6kNmcsKJF4NxQuZqfsqMV6xxqvneCXffVcB73Dg3Ra884N3odx3xPDuHN4pBBc4ctNBlenGpHMcdBS8BNgfsMvd5A7JPHXY/dfZgyQ8qaWvItadvtDAX4vgL1fsWV3jeRVH7LBmfzBc2z4aDnaDzs3iL+U0QzDzaOvNAAAAAElFTkSuQmCCdGlueQ==)}.login .message[data-v-d948ab37]{position:absolute;bottom:-76px;left:50%;transform:translate(-50%);font-size:16px;color:#f02727}.pc[data-v-d948ab37]{width:100%;min-height:calc(100% - 98px);display:flex;justify-content:center;align-items:flex-start;margin-top:12px}.pc .login[data-v-d948ab37]{width:480px;height:308.5px;background:#fff;box-shadow:0 1.5px 15.5px .5px rgba(133,121,148,.21);justify-content:flex-start;position:relative}.pc .login .title[data-v-d948ab37]{font-size:12px;color:#494a4a;margin-top:54.5px}.pc .login .loginBox[data-v-d948ab37]{margin-top:12px;position:relative;z-index:2}.pc .login .loginBox .input[data-v-d948ab37]:focus{border:.5px solid #c6a2f4;opacity:1}.pc .login .loginBox .input[data-v-d948ab37]{width:164.5px;height:21px;border:.5px solid rgba(109,89,135,.3);box-shadow:1.5px 2px 5px rgba(60,50,73,.19);outline:none;border-radius:3px;font-size:9px;user-select:auto;color:#494a4a;line-height:12px}.pc .login .loginBox .input[data-v-d948ab37]::-webkit-input-placeholder{font-size:9px;color:#494a4a;opacity:.47}.pc .login .loginBox .icon[data-v-d948ab37]{width:13px;height:13px;left:-20px}.pc .login .loginBox .question[data-v-d948ab37]{top:4px}.pc .login .loginBox .hide[data-v-d948ab37],.pc .login .loginBox .look[data-v-d948ab37]{top:35px}.pc .login .loginButton[data-v-d948ab37]{width:164.5px;height:27px;font-size:11px;margin-top:20px}.pc .login .otherLogin.ksa[data-v-d948ab37]{background-image:url(/assets/bg4-vlgN2OWt.png)}.pc .login .otherLogin[data-v-d948ab37]{width:480px;height:172.5px;background-image:url(/assets/bg2-DSF34-P0.png);margin-top:17.5px}.pc .login .otherLogin .buttonList[data-v-d948ab37]{margin-top:34px}.pc .login .otherLogin .icon[data-v-d948ab37]{width:40px;height:40px}.pc .login .message[data-v-d948ab37]{font-size:9px;bottom:-25px;width:175px}.pc .back[data-v-d948ab37]{position:absolute;right:-35px;top:0;background:#fff;width:35px;height:20px;font-size:8px;line-height:15px;padding-bottom:2.5px}.pc .back .icon[data-v-d948ab37]{width:15px;height:15px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQCkAAAABnRSTlMAqkN51R0Z+XkpAAAA6klEQVR42u3YMQrCQBBG4TFib2NqCWJt5QEEUyt4ATXM/Y9gmmSXoMEEZsks77tAeM2fYQUAAAAAAAD4QxURK3cNtmJkU2rvKVYeGpzESFFr7y1WDklSNEXKUYO9GFlr8BIr59QpVwnMUpqbdFymJNmWFTM5LSWjmayzmckiz5m8SISZ/K4cS3E1k2OL7+0wHtkWZ4uf6WE8nElni5/8MG44jKfN5E4GfM0kh/ESF5/3gyUuPofxEhc/3hbfh/Hvjzj7qxBCSIcQQgghhBBCCGkRQgghhBBCCCEtQgghpFdFBAAAAAAAAJjrA0WP58SG0zUDAAAAAElFTkSuQmCCdGlueQ==);margin-top:2.5px}\n',document.head.appendChild(q);var P={class:"phoneNav"},Y={class:"titleContainer"},X={class:"name"},Z={key:0,class:"subtitle"},H=o({__name:"index.mobile",props:{title:{},isShowSubDetect:{type:Boolean}},emits:["toLogin"],setup(t,{emit:e}){var a=r((()=>l().user)),n=r((()=>l().skey)),i=e,o="login"===s.currentRoute.value.name;function w(){history.state.back?m():b({name:"pay"})}function y(){G.value?(console.log("side login",F.value),F.value.close(),G.value=!1):n?G.value=!0:i("toLogin")}return(t,e)=>{var i;return d(),c(f,null,[g("div",P,[g("div",Y,[g("div",X,u(t.title),1),t.isShowSubDetect?(d(),c("div",Z,u(p(A._T)("支付环境安全")),1)):h("",!0)]),g("div",{class:"close",onClick:w}),o?h("",!0):(d(),c("div",{key:0,class:"avatar",onClick:y,style:x(n.value?{backgroundImage:`url(${null===(i=a.value)||void 0===i?void 0:i.icon})`}:{})},null,4))]),p(G)?(d(),v(V,{key:0,ref_key:"sideLogin",ref:F,show:p(G)},null,8,["show"])):h("",!0)],64)}}}),_=w(H,[["__scopeId","data-v-4e1a1648"]]),$={class:"mask"},tt=(t=>(B("data-v-668c4915"),t=t(),E(),t))((()=>g("div",{class:"img"},null,-1))),et=w(o({__name:"question.mobile",props:{change:{}},setup:t=>(t,e)=>{var a=y("mask");return k((d(),c("div",$,[tt,g("div",{class:"close",onClick:e[0]||(e[0]=()=>{t.change()})})])),[[a]])}}),[["__scopeId","data-v-668c4915"]]),at="ksa",nt=o({props:{change:{type:Function}},components:{CommonCarouselView:O},created(){console.warn("about sa")},beforeDestroy(){},data:()=>({visual:!1,index:0,dots:[0,1],isAppARE:"are"===at,ksa:new URL("/assets/question_ksa-DfhFqCSe.png",n.meta.url).href,are:new URL("/assets/question_are-CCTCtQGy.png",n.meta.url).href,ludo:new URL("/assets/question_ludo-B0DPOEbD.png",n.meta.url).href,baloot:new URL("/assets/question_baloot-DmpFv5O-.jpg",n.meta.url).href}),methods:{_T:A._T,xpx:C,onCarouselItemChange(t){var e;t<0?e=2-Math.abs(t)%2:e=t%2;console.log("onCarouselItemChange",e,t),this.index=e},onClose(){this.change&&this.change()}}}),it={class:"about__title"},ot={key:2,class:"aboutDots"},rt=["onClick"],lt=[(t=>(B("data-v-68223d89"),t=t(),E(),t))((()=>g("div",{class:"aboutDot__inner"},null,-1)))];var st=w(nt,[["render",function(t,e,a,n,i,o){var r=S("common-carousel-view"),l=y("mask");return k((d(),c("div",{class:"mask mask-mobile",onClick:e[1]||(e[1]=M(((...e)=>t.onClose&&t.onClose(...e)),["stop"]))},[g("div",{class:"about",onClick:M((()=>{}),["stop"])},[g("div",it,u(t._T("什么是Sawa ID")),1),t.isAppARE?(d(),c(f,{key:0},[0==t.index?(d(),c("div",{key:0,class:R(["about__img","-sawaKSA"]),style:{"background-image":"url(../../assets/img/about_id/question_are.png)"}})):h("",!0)],64)):(d(),v(r,{key:1,class:"about__ctx",w:t.xpx(522),h:t.xpx(676),length:2,"on-change":t.onCarouselItemChange,"cur-index":t.index},{default:L((()=>[0==t.index?(d(),c("div",{key:0,class:R(["about__img","-sawaKSA"]),style:x({"background-image":`url(${t.ksa})`})},null,4)):h("",!0),1==t.index?(d(),c("div",{key:1,class:R(["about__img","-ludo"]),style:x({"background-image":`url(${t.ludo})`})},null,4)):h("",!0)])),_:1},8,["w","h","on-change","cur-index"])),t.isAppARE?h("",!0):(d(),c("div",ot,[(d(!0),c(f,null,U(t.dots,((e,a)=>(d(),c("div",{class:R(["aboutDot",{"-on":t.index==a}]),key:a,onClick:e=>t.onCarouselItemChange(a)},lt,10,rt)))),128))])),g("div",{class:"about__btn btn",onClick:e[0]||(e[0]=(...e)=>t.onClose&&t.onClose(...e))},u(t._T("知道了")),1)])])),[[l]])}],["__scopeId","data-v-68223d89"]]),dt="ksa",ct={class:"login"},gt={class:"loginBox"},ut=["placeholder","value"],pt={key:0,class:"inputD"},At=["value","placeholder"],ht={key:0,class:"inputD"},xt=(t=>(B("data-v-d948ab37"),t=t(),E(),t))((()=>g("div",{class:R(["icon","google"]),id:"google-login-btn"},null,-1))),vt=o({__name:"index.moble",setup(a){var n=z("hide"),i=z(),o=z(""),l=z(""),s=z(""),x=z("are"===dt),m=z(!1),b=z(""),w=r((()=>!!o.value));function y(){"hide"===n.value?(n.value="look",i.value.type=""):"look"===n.value&&(n.value="hide",i.value.type="password")}function k(){m.value=!m.value}function B(t){console.log("onUserName",t.target.value);var e=t.target.value.trim();o.value=e}function E(){return C.apply(this,arguments)}function C(){var a;return a=t().mark((function e(){var a,n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=j(),t.next=3,K({userName:o.value,password:l.value,message:s},null==n||null===(a=n.proxy)||void 0===a?void 0:a.$route.params.pos);case 3:s.value&&N(s.value);case 4:case"end":return t.stop()}}),e)})),C=function(){var t=this,n=arguments;return new Promise((function(i,o){var r=a.apply(t,n);function l(t){e(r,i,o,l,s,"next",t)}function s(t){e(r,i,o,l,s,"throw",t)}l(void 0)}))},C.apply(this,arguments)}function S(){var t,e=j();W({message:s},null==e||null===(t=e.proxy)||void 0===t?void 0:t.$route.params.pos)}function L(t){var e=t.target.value.trim();l.value=e}function U(t){b.value=""}function T(t){console.log("onFocus",t),b.value=t}return J((()=>{var t;A.reportWebSensors("act_sawa_official_website_enter_login",{act_init_url:location.href,act_nano_id:D()});var e=j();I({message:s},null==e||null===(t=e.proxy)||void 0===t?void 0:t.$route.params.pos)})),(t,e)=>(d(),c("div",ct,[Q(_,{title:p(A._T)("sawa账号登录")},null,8,["title"]),g("div",gt,[g("div",{class:R(["inputC",{on:"id"===b.value}])},[g("input",{class:"input",placeholder:p(A._T)("请输入sawa账号ID"),value:o.value,type:"text",pattern:"[0-9]*",id:"id-c",onChange:M(B,["stop"]),onInput:B,onFocus:e[0]||(e[0]=t=>T("id")),onBlur:e[1]||(e[1]=t=>U())},null,40,ut),g("div",{class:R(["icon","question"]),onClick:e[2]||(e[2]=()=>{m.value=!m.value})}),"id"===b.value?(d(),c("div",pt)):h("",!0),h("",!0)],2),g("div",{class:R(["inputC",{on:"pwd"===b.value}])},[g("input",{class:"input",id:"pwd-c",type:"password",ref_key:"passwordRef",ref:i,value:l.value,onChange:M(L,["stop"]),onFocus:e[3]||(e[3]=t=>T("pwd")),onBlur:e[4]||(e[4]=t=>U()),placeholder:p(A._T)("请输入密码")},null,40,At),g("div",{class:R(["icon","hide"===n.value?"hide":"look"]),onClick:y},null,2),"pwd"===b.value?(d(),c("div",ht)):h("",!0),h("",!0)],2)]),g("div",{class:R(["otherLogin",x.value?"are":""])},[g("div",{class:R(["loginButton",{"-off":!w.value}]),onClick:E},u(p(A._T)("登录")),3),g("div",{class:"buttonList"},[g("div",{class:R(["icon","facebook"]),onClick:S}),xt])],2),g("div",{class:R(["login-bg",[x.value?"are":""]])},null,2),m.value?(d(),c(f,{key:0},[x.value?(d(),v(et,{key:0,change:k})):(d(),v(st,{key:1,change:k}))],64)):h("",!0)]))}}),ft=w(vt,[["__scopeId","data-v-d948ab37"]]),mt={style:{width:"100%",height:"100%"}};a("default",o({__name:"index",setup:t=>(t,e)=>(d(),c("div",mt,[p(T)()?(d(),v(i,{key:0})):(d(),v(ft,{key:1}))]))}))}}}))}();
