(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Merge"],{"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),o=n("9112");for(var c in a){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{o(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=n("ae40"),o=a("forEach"),c=i("forEach");t.exports=o&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"21a6":function(t,e,n){(function(n){var r,a,i;(function(n,o){a=[],r=o,i="function"===typeof r?r.apply(e,a):r,void 0===i||(t.exports=i)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function r(t,e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){c(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,c=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(t,e,n){var c=o.URL||o.webkitURL,s=document.createElement("a");e=e||t.name||"download",s.download=e,s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?i(s):a(s.href)?r(t,e,n):i(s,s.target="_blank")):(s.href=c.createObjectURL(t),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){i(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,o){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,o),n);else if(a(t))r(t,n,o);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout((function(){i(c)}))}}:function(t,e,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return r(t,e,n);var i="application/octet-stream"===t.type,c=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&c)&&"object"==typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},u.readAsDataURL(t)}else{var l=o.URL||o.webkitURL,d=l.createObjectURL(t);a?a.location=d:location.href=d,a=null,setTimeout((function(){l.revokeObjectURL(d)}),4e4)}});o.saveAs=c.saveAs=c,t.exports=c}))}).call(this,n("c8ba"))},3835:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(s){a=!0,i=s}finally{try{r||null==c["return"]||c["return"]()}finally{if(a)throw i}}return n}}var i=n("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){return r(t)||a(t,e)||Object(i["a"])(t,e)||o()}},"3c11":function(t,e,n){},4160:function(t,e,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"46a8":function(t,e,n){"use strict";n("98b7")},4863:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"page-merge"},[n("div",{staticClass:"page-merge__left"},[n("div",{staticClass:"page-merge__left__content"},[n("canvas",{ref:"canvas",attrs:{width:t.width,height:t.height}})])]),n("div",{staticClass:"page-merge__middle"},[n("ButtonLoadFile",{staticClass:"button-big p-0 a-button a-button--dark a-button-change-background",on:{loaded:t.changeBackground}},[n("i",{staticClass:"ion-md-image"}),t._v(" 背景 ")]),n("ButtonLoadFile",{staticClass:"button-big p-0 a-button a-button--dark a-button--outline",on:{loaded:t.onImageLoaded}},[n("i",{staticClass:"ion-md-folder-open"}),t._v(" 打开 ")]),n("button",{staticClass:"button-big a-button a-button--success a-button-save",on:{click:t.save}},[n("i",{staticClass:"ion-md-cloud-download"}),t._v(" 保存 ")]),n("button",{staticClass:"button-big a-button a-button--danger a-button-save",on:{click:t.clear}},[n("i",{staticClass:"ion-md-cloud-download"}),t._v(" 清空 ")]),n("ul",{staticClass:"mt-2"},t._l(t.imagesUploaded,(function(t){var e=t.src;return n("li",{key:e,staticClass:"img"},[n("img",{attrs:{src:e}})])})),0),n("div",{staticClass:"mt-2"},[n("h1",[t._v("订单信息")]),n("h3",[t._v(t._s(t.$store.state.mergeData.sku))]),n("h3",[t._v(t._s(t.$store.state.mergeData.variant_title))]),n("h3",{staticClass:"text-danger"},[t._v("数量: "+t._s(t.$store.state.mergeData.quantity))])]),0<t.activeBackgroundList.length?n("div",t._l(t.activeBackgroundList,(function(e){return n("span",{key:e.url,staticClass:"ovh d-inline-block mr-1",staticStyle:{border:"2px solid #ddd"},on:{click:function(n){return t.changeBackgroundOnline(e.url)}}},[n("img",{staticClass:"d-block",attrs:{src:e.url,width:"56",height:"200"}}),n("h4",[t._v(t._s(e.fileName))])])})),0):t._e()],1),n("div",{staticClass:"page-merge__right"},[n("div",{staticClass:"form-item"},[n("label",[t._v("订单号"),n("input",{attrs:{type:"text",placeholder:"请输入保存后的订单号"},domProps:{value:t.fileName},on:{input:t.changeFileName}})])]),n("div",{staticClass:"form-item"},[n("label",[t._v("背景宽度(W)"),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.width,expression:"width",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"请输入背景宽度"},domProps:{value:t.width},on:{change:function(e){t.width=e.target.value}}})])]),n("div",{staticClass:"form-item"},[n("label",[t._v("背景高度(H)"),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.height,expression:"height",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"请输入背景高度"},domProps:{value:t.height},on:{change:function(e){t.height=e.target.value}}})])]),n("div",{staticClass:"form-item"},[n("label",[t._v("Y轴偏移"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.offsetY,expression:"offsetY"}],attrs:{type:"number",placeholder:"请输入Y轴偏移"},domProps:{value:t.offsetY},on:{input:function(e){e.target.composing||(t.offsetY=e.target.value)}}})])])])])},a=[],i=(n("99af"),n("7db0"),n("4160"),n("d81d"),n("a9e3"),n("d3b7"),n("159b"),n("ddb0"),n("bf19"),n("3835")),o=n("b85c"),c=(n("96cf"),n("1da1")),s=n("21a6"),u=n("0dec"),l=n("c5fb"),d=n("a094"),f=[{x:400,y:750,h:560,w:560},{x:980,y:1500,h:560,w:560},{x:400,y:2250,h:560,w:560},{x:980,y:3e3,h:560,w:560},{x:400,y:3750,h:560,w:560},{x:980,y:4500,h:560,w:560}];Date.now;function h(t,e,n,r){if(n/r*e>=t){var a=t*r/e,i=(n-a)/2;return{top:0,left:i,width:a,height:r}}var o=e*n/t,c=(r-o)/2;return{top:c,left:0,height:o,width:n}}var g=n("554b"),p=120,v={name:"Merge",components:{ButtonLoadFile:d["a"]},data:function(){return{offsetY:0,fileName:"",width:1417,height:5551+p,context:null,backgroundImage:null,imagesUploaded:[],backgroundMap:{},backgroundURLs:["https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/AFS1001-Black.png?v=1605943842"]}},computed:{activeBackgroundList:function(){return this.backgroundMap[this.$store.state.mergeData.sku]||[]}},watch:{width:function(){this.render()},height:function(){this.render()},offsetY:function(){this.render()}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getBgMap();case 2:return t.imagesUploaded=[],t.context=t.$refs.canvas.getContext("2d"),n=t.$store.state.mergeData,r=n.fileName,a=n.cropImageURLs,t.fileName=r,e.next=8,Object(l["a"])(1===t.activeBackgroundList.length?t.activeBackgroundList[0].url:"#fff");case 8:t.backgroundImage=e.sent,i=Object(o["a"])(a),e.prev=10,i.s();case 12:if((c=i.n()).done){e.next=21;break}return s=c.value,e.t0=t.imagesUploaded,e.next=17,Object(l["a"])(s);case 17:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 19:e.next=12;break;case 21:e.next=26;break;case 23:e.prev=23,e.t2=e["catch"](10),i.e(e.t2);case 26:return e.prev=26,i.f(),e.finish(26);case 29:t.render();case 30:case"end":return e.stop()}}),e,null,[[10,23,26,29]])})))()},methods:{getBgMap:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,n=new u["a"].Query("BackgroundImageMap"),e.next=4,n.find();case 4:r=e.sent,a=r.map((function(t){return t.toJSON()})),a.forEach((function(e){var n=e.sku,r=e.fileName,a=e.url;void 0===t.backgroundMap[n]&&t.$set(t.backgroundMap,n,[]),t.backgroundMap[n].push({fileName:r,url:a})})),t.isLoading=!1;case 8:case"end":return e.stop()}}),e)})))()},changeFileName:function(t){this.fileName=t.target.value,this.render()},addText:function(t){this.context.save(),this.context.fillStyle="#fff",this.context.fillRect(0,0,this.width,p),this.context.textAlign="right",this.context.translate(this.width/2,0),this.context.scale(-1,1),this.context.font="100px Georgia",this.context.fillStyle="#000",this.context.fillText(t,this.width/2,90),this.context.restore()},save:function(){var t=this;this.$refs.canvas.toBlob((function(e){Object(g["changeDpiBlob"])(e,300).then((function(e){var n=t.$store.state.mergeData,r=n.sku,a=n.variant_title;Object(s["saveAs"])(e,"".concat(t.fileName," - [").concat(r,"] - [").concat(a,"].jpg"))}))}),"image/jpeg",1)},changeBackgroundOnline:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,Object(l["a"])(t);case 3:e.backgroundImage=n.sent,e.render(),e.isLoading=!1;case 6:case"end":return n.stop()}}),n)})))()},changeBackground:function(t){var e=t[0].source,n=e.img;e.fileName;this.backgroundImage=n,this.render()},onImageLoaded:function(t){var e,n=Object(o["a"])(t);try{for(n.s();!(e=n.n()).done;){var r=e.value.source;this.fileName=r.fileName;var a=r.img;this.imagesUploaded.push(a)}}catch(i){n.e(i)}finally{n.f()}this.render()},clear:function(){this.imagesUploaded=[],this.render()},render:function(){var t=this.context;if(t.clearRect(0,0,this.width,this.height),this.addText(this.fileName),t.drawImage(this.backgroundImage,0,p,this.width,this.height),0<this.imagesUploaded.length){var e,n=this.imagesUploaded.length,r=Object(o["a"])(f.entries());try{for(r.s();!(e=r.n()).done;){var a=Object(i["a"])(e.value,2),c=a[0],s=a[1],u=s.x,l=s.y,d=s.w,g=s.h,v=this.imagesUploaded[c%n],m=h(v.width,v.height,d,g);t.drawImage(v,0,0,v.width,v.height,u+m.left-d/2,l+m.top+p-g/2+Number(this.offsetY),m.width,m.height)}}catch(b){r.e(b)}finally{r.f()}}}}},m=v,b=(n("858b"),n("2877")),w=Object(b["a"])(m,r,a,!1,null,null,null);e["default"]=w.exports},"554b":function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function a(){for(var t=new Int32Array(256),e=0;e<256;e++){for(var n=e,r=0;r<8;r++)n=1&n?3988292384^n>>>1:n>>>1;t[e]=n}return t}function i(t){var e=-1;o||(o=a());for(var n=0;n<t.length;n++)e=o[255&(e^t[n])]^e>>>8;return-1^e}Object.defineProperty(e,"__esModule",{value:!0}),e.changeDpiBlob=v,e.changeDpiDataUrl=m;var o=void 0,c="image/png",s="image/jpeg",u="AAlwSFlz",l="AAAJcEhZ",d="AAAACXBI",f="p".charCodeAt(0),h="H".charCodeAt(0),g="Y".charCodeAt(0),p="s".charCodeAt(0);function v(t,e){var n=t.slice(0,33);return new Promise((function(r,a){var i=new FileReader;i.onload=function(){var n=new Uint8Array(i.result),a=t.slice(33),o=y(n,e,t.type);r(new Blob([o,a],{type:t.type}))},i.readAsArrayBuffer(n)}))}function m(t,e){var n=t.split(","),a=n[0],i=n[1],o=void 0,u=void 0,l=!1;if(-1!==a.indexOf(c)){o=c;var d=b(i);d>=0?(u=4*Math.ceil((d+28)/3),l=!0):u=44}-1!==a.indexOf(s)&&(o=s,u=24);for(var f=i.substring(0,u),h=i.substring(u),g=atob(f),p=new Uint8Array(g.length),v=0;v<p.length;v++)p[v]=g.charCodeAt(v);var m=y(p,e,o,l),w=btoa(String.fromCharCode.apply(String,r(m)));return[a,",",w,h].join("")}function b(t){var e=t.indexOf(u);return-1===e&&(e=t.indexOf(l)),-1===e&&(e=t.indexOf(d)),e}function w(t){for(var e=t.length-1,n=e;n>=4;n--)if(9===t[n-4]&&t[n-3]===f&&t[n-2]===h&&t[n-1]===g&&t[n]===p)return n-3}function y(t,e,n,r){if(n===s)return t[13]=1,t[14]=e>>8,t[15]=255&e,t[16]=e>>8,t[17]=255&e,t;if(n===c){var a=new Uint8Array(13);e*=39.3701,a[0]=f,a[1]=h,a[2]=g,a[3]=p,a[4]=e>>>24,a[5]=e>>>16,a[6]=e>>>8,a[7]=255&e,a[8]=a[4],a[9]=a[5],a[10]=a[6],a[11]=a[7],a[12]=1;var o=i(a),u=new Uint8Array(4);if(u[0]=o>>>24,u[1]=o>>>16,u[2]=o>>>8,u[3]=255&o,r){var l=w(t);return t.set(a,l),t.set(u,l+13),t}var d=new Uint8Array(4);d[0]=0,d[1]=0,d[2]=0,d[3]=9;var v=new Uint8Array(54);return v.set(t,0),v.set(d,33),v.set(a,37),v.set(u,50),v}}},"858b":function(t,e,n){"use strict";n("3c11")},"98b7":function(t,e,n){},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),i=n("e8b5"),o=n("861d"),c=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),h=n("2d00"),g=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",m=h>=51||!a((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=d("concat"),w=function(t){if(!o(t))return!1;var e=t[g];return void 0!==e?!!e:i(t)},y=!m||!b;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,r,a,i,o=c(this),d=l(o,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?o:arguments[e],w(i)){if(a=s(i.length),f+a>p)throw TypeError(v);for(n=0;n<a;n++,f++)n in i&&u(d,f,i[n])}else{if(f>=p)throw TypeError(v);u(d,f++,i)}return d.length=f,d}})},a094:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"button-load-file"},[n("input",{attrs:{type:"file",accept:"image/*",multiple:""},on:{change:t.onChange}}),t._t("default",[t._v("Upload")])],2)},a=[],i=(n("a630"),n("d81d"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),o={},c=function(t){return new Promise((function(e,n){if(o[t])e(o[t]);else{var r=new Image;r.onload=function(){o[t]=r,e(r)},r.onerror=n,r.src=t}}))},s={name:"ButtonLoadFile",props:{cropSize:{type:Array,default:function(){return[426,269]}}},computed:{cropRate:function(){return this.cropSize[0]/this.cropSize[1]}},data:function(){return{url:""}},methods:{readFile:function(t){var e=this;return new Promise((function(n,r){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(a){var i,o,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,c(a.target.result);case 2:i=r.sent,o=i.width,s=i.height,u=e.crop(i),n({source:{fileName:t.name,url:a.target.result,img:i,width:o,height:s},crop:u});case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),a.onerror=r}))},onChange:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.target,a=r.files,o=Array.from(a),!(0<o.length)){n.next=10;break}return n.next=6,Promise.all(o.map(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.readFile(n));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 6:c=n.sent,e.$emit("loaded",c),n.next=11;break;case 10:e.$emit("reset");case 11:case"end":return n.stop()}}),n)})))()},crop:function(t){var e=document.createElement("canvas"),n=e.getContext("2d"),r=t.width,a=t.height,i=r/a,o=r,c=a,s=0,u=0,l="x";this.cropRate>i?(l="y",c=o/this.cropRate,s=(a-c)/2):(o=c*this.cropRate,u=(r-o)/2),e.width=this.cropSize[0],e.height=this.cropSize[1];var d=[t,u,s,o,c,0,0,this.cropSize[0],this.cropSize[1]];n.drawImage.apply(n,d);var f=e.toDataURL();return{url:f,x:u,y:s,width:o,height:c,cropAxis:l,cropRate:this.cropRate,args:d}}}},u=s,l=(n("46a8"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,null,null);e["a"]=d.exports},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("06c5");function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,o=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(s)throw o}}}}},c5fb:function(t,e,n){"use strict";n("d3b7"),n("25f0");var r={};function a(t){return"[object HTMLImageElement]"===Object.prototype.toString.call(t)}function i(t){return new Promise((function(e,n){if(a(t))e(t);else if(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(t)){var o=document.createElement("canvas");o.width=1,o.height=1;var c=o.getContext("2d");c.fillStyle=t,c.fillRect(0,0,1,1),i(o.toDataURL()).then(e)}else{if(r[t])return void e(r[t]);var s=new Image;s.setAttribute("crossOrigin","Anonymous"),s.onload=function(){r[t]=s,e(s)},s.onerror=n,s.src=t}}))}e["a"]=i}}]);
//# sourceMappingURL=Merge.1f92d96b.js.map