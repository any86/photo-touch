(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Merge"],{"1e8b":function(e,t,n){"use strict";n("bd0c")},"21a6":function(e,t,n){(function(n){var r,a,o;(function(n,i){a=[],r=i,o="function"===typeof r?r.apply(t,a):r,void 0===o||(e.exports=o)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){c(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(e,t,n){var c=i.URL||i.webkitURL,u=document.createElement("a");t=t||e.name||"download",u.download=t,u.rel="noopener","string"==typeof e?(u.href=e,u.origin===location.origin?o(u):a(u.href)?r(e,t,n):o(u,u.target="_blank")):(u.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(u.href)}),4e4),setTimeout((function(){o(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(a(e))r(e,n,i);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){o(c)}))}}:function(e,t,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var o="application/octet-stream"===e.type,c=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||o&&c)&&"object"==typeof FileReader){var s=new FileReader;s.onloadend=function(){var e=s.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},s.readAsDataURL(e)}else{var l=i.URL||i.webkitURL,d=l.createObjectURL(e);a?a.location=d:location.href=d,a=null,setTimeout((function(){l.revokeObjectURL(d)}),4e4)}});i.saveAs=c.saveAs=c,e.exports=c}))}).call(this,n("c8ba"))},3835:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function a(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)if(n.push(i.value),t&&n.length===t)break}catch(u){a=!0,o=u}finally{try{r||null==c["return"]||c["return"]()}finally{if(a)throw o}}return n}}var o=n("06c5");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){return r(e)||a(e,t)||Object(o["a"])(e,t)||i()}},4863:function(e,t,n){"use strict";n.r(t);var r=n("5c40"),a=n("830f"),o={class:"page-merge"},i={class:"page-merge__left"},c={class:"page-merge__left__content"},u={class:"page-merge__middle"},s=Object(r["j"])("i",{class:"ion-md-cloud-download"},null,-1),l=Object(r["i"])(" 保存 "),d=Object(r["j"])("i",{class:"ion-md-image"},null,-1),f=Object(r["i"])(" 背景 "),h=Object(r["j"])("i",{class:"ion-md-folder-open"},null,-1),b=Object(r["i"])(" 打开 "),p={class:"mt-2"},m={class:"page-merge__right"},g={class:"form-item"},v=Object(r["i"])("文件名"),w={class:"form-item"},j=Object(r["i"])("背景宽度(W)"),y={class:"form-item"},O=Object(r["i"])("背景高度(H)"),x={class:"form-item"},A=Object(r["i"])("Y轴偏移");function R(e,t){var n=Object(r["w"])("ButtonLoadFile");return Object(r["s"])(),Object(r["e"])("article",o,[Object(r["j"])("div",i,[Object(r["j"])("div",c,[Object(r["j"])("canvas",{ref:"canvas",width:e.width,height:e.height},null,8,["width","height"])])]),Object(r["j"])("div",u,[Object(r["j"])("button",{class:"button-big a-button a-button--success a-button-save",onClick:t[1]||(t[1]=function(){return e.save.apply(e,arguments)})},[s,l]),Object(r["j"])(n,{onLoaded:e.changeBackground,class:"button-big p-0 a-button a-button--dark a-button-change-background"},{default:Object(r["C"])((function(){return[d,f]})),_:1},8,["onLoaded"]),Object(r["j"])(n,{onLoaded:e.onImageLoaded,class:"button-big p-0 a-button a-button--dark a-button--outline"},{default:Object(r["C"])((function(){return[h,b]})),_:1},8,["onLoaded"]),Object(r["j"])("ul",p,[(Object(r["s"])(!0),Object(r["e"])(r["b"],null,Object(r["u"])(e.imagesUploaded,(function(e){var t=e.src;return Object(r["s"])(),Object(r["e"])("li",{class:"img",key:t},[Object(r["j"])("img",{src:t},null,8,["src"])])})),128))])]),Object(r["j"])("div",m,[Object(r["j"])("div",g,[Object(r["j"])("label",null,[v,Object(r["D"])(Object(r["j"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.fileName=t}),type:"text",placeholder:"请输入保存后的文件名"},null,512),[[a["b"],e.fileName,void 0,{lazy:!0}]])])]),Object(r["j"])("div",w,[Object(r["j"])("label",null,[j,Object(r["D"])(Object(r["j"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.width=t}),type:"text",placeholder:"请输入背景宽度"},null,512),[[a["b"],e.width,void 0,{lazy:!0}]])])]),Object(r["j"])("div",y,[Object(r["j"])("label",null,[O,Object(r["D"])(Object(r["j"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.height=t}),type:"text",placeholder:"请输入背景高度"},null,512),[[a["b"],e.height,void 0,{lazy:!0}]])])]),Object(r["j"])("div",x,[Object(r["j"])("label",null,[A,Object(r["D"])(Object(r["j"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.offsetY=t}),type:"number",placeholder:"请输入Y轴偏移"},null,512),[[a["b"],e.offsetY]])])])])])}n("d3b7"),n("ddb0");var k=n("3835"),U=n("b85c"),L=(n("96cf"),n("1da1")),S=n("21a6"),I=n("c5fb"),E=n("a094"),B=[{x:400,y:750,h:560,w:560},{x:980,y:1500,h:560,w:560},{x:400,y:2250,h:560,w:560},{x:980,y:3e3,h:560,w:560},{x:400,y:3750,h:560,w:560},{x:980,y:4500,h:560,w:560}];Date.now;function C(e,t,n,r){if(n/r*t>=e){var a=e*r/t,o=(n-a)/2;return{top:0,left:o,width:a,height:r}}var i=t*n/e,c=(r-i)/2;return{top:c,left:0,height:i,width:n}}var _=n("554b"),T=200,D={name:"Merge",components:{ButtonLoadFile:E["a"]},data:function(){return{offsetY:0,fileName:"",width:1417,height:5551+T,context:null,backgroundImage:null,imagesUploaded:[],backgroundURLs:["https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/AFS300.png?v=1605190751"]}},watch:{width:function(){this.render()},height:function(){this.render()},fileName:function(){this.render()},offsetY:function(){this.render()}},mounted:function(){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.context=e.$refs.canvas.getContext("2d"),e.addText(e.fileName),t.next=4,Object(I["a"])(e.backgroundURLs[0]);case 4:e.backgroundImage=t.sent,e.context.drawImage(e.backgroundImage,0,T);case 6:case"end":return t.stop()}}),t)})))()},methods:{addText:function(e){this.context.save(),this.context.textAlign="right",this.context.translate(this.width/2,0),this.context.scale(-1,1),this.context.font="100px Georgia",this.context.fillText(e,this.width/2,140),this.context.restore()},save:function(){var e=this;this.$refs.canvas.toBlob((function(t){Object(_["changeDpiBlob"])(t,300).then((function(t){Object(S["saveAs"])(t,"".concat(e.fileName,".png"))}))}),"image/png",1)},changeBackgroundOnline:function(e){var t=this;return Object(L["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(I["a"])(e);case 2:t.backgroundImage=n.sent,t.render();case 4:case"end":return n.stop()}}),n)})))()},changeBackground:function(e){var t=e[0].source,n=t.img;t.fileName;this.backgroundImage=n,this.render()},onImageLoaded:function(e){var t,n=Object(U["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value.source;this.fileName=r.fileName;var a=r.img;this.imagesUploaded.push(a)}}catch(o){n.e(o)}finally{n.f()}this.render()},render:function(e){var t=this.context;if(t.clearRect(0,0,this.width,this.height),this.addText(this.fileName),t.drawImage(this.backgroundImage,0,T,this.width,this.height),0<this.imagesUploaded.length){var n,r=this.imagesUploaded.length,a=Object(U["a"])(B.entries());try{for(a.s();!(n=a.n()).done;){var o=Object(k["a"])(n.value,2),i=o[0],c=o[1],u=c.x,s=c.y,l=c.w,d=c.h,f=this.imagesUploaded[i%r],h=C(f.width,f.height,l,d);t.drawImage(f,0,0,f.width,f.height,u+h.left-l/2,s+h.top+T-d/2+this.offsetY,h.width,h.height)}}catch(b){a.e(b)}finally{a.f()}}}}};n("1e8b");D.render=R;t["default"]=D},"554b":function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(){for(var e=new Int32Array(256),t=0;t<256;t++){for(var n=t,r=0;r<8;r++)n=1&n?3988292384^n>>>1:n>>>1;e[t]=n}return e}function o(e){var t=-1;i||(i=a());for(var n=0;n<e.length;n++)t=i[255&(t^e[n])]^t>>>8;return-1^t}Object.defineProperty(t,"__esModule",{value:!0}),t.changeDpiBlob=m,t.changeDpiDataUrl=g;var i=void 0,c="image/png",u="image/jpeg",s="AAlwSFlz",l="AAAJcEhZ",d="AAAACXBI",f="p".charCodeAt(0),h="H".charCodeAt(0),b="Y".charCodeAt(0),p="s".charCodeAt(0);function m(e,t){var n=e.slice(0,33);return new Promise((function(r,a){var o=new FileReader;o.onload=function(){var n=new Uint8Array(o.result),a=e.slice(33),i=j(n,t,e.type);r(new Blob([i,a],{type:e.type}))},o.readAsArrayBuffer(n)}))}function g(e,t){var n=e.split(","),a=n[0],o=n[1],i=void 0,s=void 0,l=!1;if(-1!==a.indexOf(c)){i=c;var d=v(o);d>=0?(s=4*Math.ceil((d+28)/3),l=!0):s=44}-1!==a.indexOf(u)&&(i=u,s=24);for(var f=o.substring(0,s),h=o.substring(s),b=atob(f),p=new Uint8Array(b.length),m=0;m<p.length;m++)p[m]=b.charCodeAt(m);var g=j(p,t,i,l),w=btoa(String.fromCharCode.apply(String,r(g)));return[a,",",w,h].join("")}function v(e){var t=e.indexOf(s);return-1===t&&(t=e.indexOf(l)),-1===t&&(t=e.indexOf(d)),t}function w(e){for(var t=e.length-1,n=t;n>=4;n--)if(9===e[n-4]&&e[n-3]===f&&e[n-2]===h&&e[n-1]===b&&e[n]===p)return n-3}function j(e,t,n,r){if(n===u)return e[13]=1,e[14]=t>>8,e[15]=255&t,e[16]=t>>8,e[17]=255&t,e;if(n===c){var a=new Uint8Array(13);t*=39.3701,a[0]=f,a[1]=h,a[2]=b,a[3]=p,a[4]=t>>>24,a[5]=t>>>16,a[6]=t>>>8,a[7]=255&t,a[8]=a[4],a[9]=a[5],a[10]=a[6],a[11]=a[7],a[12]=1;var i=o(a),s=new Uint8Array(4);if(s[0]=i>>>24,s[1]=i>>>16,s[2]=i>>>8,s[3]=255&i,r){var l=w(e);return e.set(a,l),e.set(s,l+13),e}var d=new Uint8Array(4);d[0]=0,d[1]=0,d[2]=0,d[3]=9;var m=new Uint8Array(54);return m.set(e,0),m.set(d,33),m.set(a,37),m.set(s,50),m}}},6533:function(e,t,n){},"6fd2":function(e,t,n){"use strict";n("6533")},a094:function(e,t,n){"use strict";var r=n("5c40"),a={class:"button-load-file"},o=Object(r["i"])("Upload");function i(e,t){return Object(r["s"])(),Object(r["e"])("label",a,[Object(r["j"])("input",{type:"file",accept:"image/*",multiple:"",onChange:t[1]||(t[1]=function(){return e.onChange.apply(e,arguments)})},null,32),Object(r["v"])(e.$slots,"default",{},(function(){return[o]}))])}n("a630"),n("d81d"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf");var c=n("1da1"),u={},s=function(e){return new Promise((function(t,n){if(u[e])t(u[e]);else{var r=new Image;r.onload=function(){u[e]=r,t(r)},r.onerror=n,r.src=e}}))},l={name:"ButtonLoadFile",props:{cropSize:{type:Array,default:function(){return[426,269]}}},computed:{cropRate:function(){return this.cropSize[0]/this.cropSize[1]}},data:function(){return{url:""}},methods:{readFile:function(e){var t=this;return new Promise((function(n,r){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){var r=Object(c["a"])(regeneratorRuntime.mark((function r(a){var o,i,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,s(a.target.result);case 2:o=r.sent,i=o.width,c=o.height,u=t.crop(o),n({source:{fileName:e.name,url:a.target.result,img:o,width:i,height:c},crop:u});case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),a.onerror=r}))},onChange:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.target,a=r.files,o=Array.from(a),!(0<o.length)){n.next=10;break}return n.next=6,Promise.all(o.map(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.readFile(n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:i=n.sent,t.$emit("loaded",i),n.next=11;break;case 10:t.$emit("reset");case 11:case"end":return n.stop()}}),n)})))()},crop:function(e){var t=document.createElement("canvas"),n=t.getContext("2d"),r=e.width,a=e.height,o=r/a,i=r,c=a,u=0,s=0,l="x";this.cropRate>o?(l="y",c=i/this.cropRate,u=(a-c)/2):(i=c*this.cropRate,s=(r-i)/2),t.width=this.cropSize[0],t.height=this.cropSize[1];var d=[e,s,u,i,c,0,0,this.cropSize[0],this.cropSize[1]];n.drawImage.apply(n,d);var f=t.toDataURL();return{url:f,x:s,y:u,width:i,height:c,cropAxis:l,cropRate:this.cropRate,args:d}}}};n("6fd2");l.render=i;t["a"]=l},b85c:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("06c5");function a(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(r["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(u)throw i}}}}},bd0c:function(e,t,n){},c5fb:function(e,t,n){"use strict";n("d3b7"),n("25f0");var r={};function a(e){return"[object HTMLImageElement]"===Object.prototype.toString.call(e)}function o(e){return new Promise((function(t,n){if(a(e))t(e);else if(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(e)){var i=document.createElement("canvas");i.width=1,i.height=1;var c=i.getContext("2d");c.fillStyle=e,c.fillRect(0,0,1,1),o(i.toDataURL()).then(t)}else{if(r[e])return void t(r[e]);var u=new Image;u.setAttribute("crossOrigin","Anonymous"),u.onload=function(){r[e]=u,t(u)},u.onerror=n,u.src=e}}))}t["a"]=o},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map,o=n("1dde"),i=n("ae40"),c=o("map"),u=i("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=Merge.bd3f8065.js.map