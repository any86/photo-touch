(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Crop"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var r=n("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("d039"),a=n("ad6d"),s="toString",c=RegExp.prototype,u=c[s],p=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),h=u.name!=s;(p||h)&&r(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"2b5d":function(t,e,n){"use strict";n("cec7")},3835:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function i(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}}var o=n("06c5");function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return r(t)||i(t,e)||Object(o["a"])(t,e)||a()}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),o=n("7dd0"),a="String Iterator",s=i.set,c=i.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),o=n("9bdd"),a=n("e95a"),s=n("50c4"),c=n("8418"),u=n("35a1");t.exports=function(t){var e,n,p,h,f,l,v=i(t),d="function"==typeof this?this:Array,y=arguments.length,m=y>1?arguments[1]:void 0,g=void 0!==m,b=u(v),T=0;if(g&&(m=r(m,y>2?arguments[2]:void 0,2)),void 0==b||d==Array&&a(b))for(e=s(v.length),n=new d(e);e>T;T++)l=g?m(v[T],T):v[T],c(n,T,l);else for(h=b.call(v),f=h.next,n=new d;!(p=f.call(h)).done;T++)l=g?o(h,m,[p.value,T],!0):p.value,c(n,T,l);return n.length=T,n}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),o="["+i+"]",a=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),o=function(t){return function(e,n){var o,a,s=String(i(e)),c=r(n),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},"81d5":function(t,e,n){"use strict";var r=n("7b0b"),i=n("23cb"),o=n("50c4");t.exports=function(t){var e=r(this),n=o(e.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,n),c=a>2?arguments[2]:void 0,u=void 0===c?n:i(c,n);while(u>s)e[s++]=t;return e}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(a){throw i(t),a}}},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:i})},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("94ca"),a=n("6eeb"),s=n("5135"),c=n("c6b6"),u=n("7156"),p=n("c04e"),h=n("d039"),f=n("7c73"),l=n("241c").f,v=n("06cf").f,d=n("9bf2").f,y=n("58a8").trim,m="Number",g=i[m],b=g.prototype,T=c(f(b))==m,x=function(t){var e,n,r,i,o,a,s,c,u=p(t,!1);if("string"==typeof u&&u.length>2)if(u=y(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=u.slice(2),a=o.length,s=0;s<a;s++)if(c=o.charCodeAt(s),c<48||c>i)return NaN;return parseInt(o,r)}return+u};if(o(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,P=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof P&&(T?h((function(){b.valueOf.call(n)})):c(n)!=m)?u(new g(x(e)),n,P):x(e)},M=r?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;M.length>E;E++)s(g,w=M[E])&&!s(P,w)&&d(P,w,v(g,w));P.prototype=b,b.constructor=P,a(i,m,P)}},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("06c5");function i(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw a}}}}},c357:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{ref:"c",staticClass:"crop",attrs:{width:t.width,height:t.height},on:{tap:t.onTap,panstart:t.onPanstart,panmove:t.onPanmove,panend:t.onPanend}})},i=[],o=(n("cb29"),n("a9e3"),n("b85c")),a=n("3835"),s=(n("96cf"),n("1da1")),c=function(t,e){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},c(t,e)};function u(t,e){function n(){this.constructor=t}c(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var p=function(){return p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},p.apply(this,arguments)};function h(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function f(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a}var v=function(){function t(){this.listenersMap={}}return t.prototype.target=function(t){var e=this;return{on:function(n,r){e.on(n,r,{target:t})}}},t.prototype.on=function(t,e,n){var r,i,o=(void 0===n?{}:n).target,a=Array.isArray(t)?t:[t];try{for(var s=f(a),c=s.next();!c.done;c=s.next()){var u=c.value;void 0===this.listenersMap[u]&&(this.listenersMap[u]=[]),void 0!==o&&(e.target=o),this.listenersMap[u].push(e)}}catch(p){r={error:p}}finally{try{c&&!c.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}},t.prototype.off=function(t,e){var n=this.listenersMap[t];if(void 0!==n)if(void 0===e)delete this.listenersMap[t];else{var r=n.findIndex((function(t){return t===e}));n.splice(r,1)}},t.prototype.emit=function(t,e,n){var r,i;void 0===n&&(n=function(){return!0});var o=this.listenersMap[t];if(void 0!==o&&0<o.length)try{for(var a=f(o),s=a.next();!s.done;s=a.next()){var c=s.value,u=c.target;n({target:u})&&c(e)}}catch(p){r={error:p}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}},t.prototype.destroy=function(){this.listenersMap={}},t}(),d=v,y=Object.prototype.toString;function m(t){return"[object RegExp]"===y.call(t)}function g(t){return"[object Function]"===y.call(t)}var b="clientX",T="clientY",x=16,w="start",P="move",M="cancel",E="end",S="left",I="right",A="up",O="down",C="none",L="touch",_="mouse",j=L+w,z=L+P,N=L+E,D=L+M,F=_+A,V=_+P,R=_+O,X=window.wx||"on"+j in window,Y="p",k=w,U=P,G=E,$="r",H="f",B=M;function q(t){return Math.round(100*t)/100}var W=function(){function t(){}return t}(),J=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.load=function(t,e){var n=[],r=[];Array.from(t.touches).forEach((function(t){var i=t.clientX,o=t.clientY,a=t.target;(null===e||void 0===e?void 0:e.contains(a))&&(n.push(a),r.push({clientX:i,clientY:o,target:a}))}));var i=Array.from(t.changedTouches).map((function(t){var e=t.clientX,n=t.clientY,r=t.target;return{clientX:e,clientY:n,target:r}}));return{inputType:t.type.replace("touch",""),changedPoints:i,points:r,nativeEvent:t,target:t.target,targets:n}},e}(W),Z=function(t){function e(){var e=t.call(this)||this;return e.target=null,e.isPressed=!1,e}return u(e,t),e.prototype.load=function(t){var e,n=t.clientX,r=t.clientY,i=t.type,o=t.button,a=t.target,s=[{clientX:n,clientY:r,target:a}];R===i&&0===o?(this.target=a,this.isPressed=!0,e=w):this.isPressed&&(V===i?e=P:F===i&&(s=[],e=E,this.isPressed=!1));var c=this.prevPoints||[{clientX:n,clientY:r,target:a}];if(this.prevPoints=[{clientX:n,clientY:r,target:a}],void 0!==e)return{inputType:e,changedPoints:c,points:s,target:this.target,targets:[this.target],nativeEvent:t}},e}(W),K=function(){function t(t){var e=X?J:Z;this.adapter=new e,this.id=0,this.el=t}return t.prototype.transform=function(t){this.prevInput=this.activeInput;var e=this.adapter.load(t,this.el);if(void 0!==e){var n=Number.MAX_SAFE_INTEGER>this.id?++this.id:1,r=p(p({},e),{id:n}),i=tt(r);this.activeInput=i;var o=i.isStart,a=i.pointLength;return o&&(this.startInput=i,this.prevInput=void 0,this.startMultiInput=1<a?i:void 0),p(p({},i),{prevInput:this.prevInput,startMultiInput:this.startMultiInput,startInput:this.startInput})}},t}();function Q(t){var e=t.length;if(0<e){if(1===e){var n=t[0],r=n.clientX,i=n.clientY;return{x:Math.round(r),y:Math.round(i)}}var o=t.reduce((function(t,e){return t.x+=e[b],t.y+=e[T],t}),{x:0,y:0});return{x:Math.round(o.x/e),y:Math.round(o.y/e)}}}function tt(t){var e=t.inputType,n=t.points,r=t.changedPoints,i=t.nativeEvent,o=n.length,a=w===e,s=E===e&&0===o||M===e,c=performance.now(),u=Q(n)||Q(r),h=u.x,f=u.y,l=i.currentTarget;return p(p({},t),{x:h,y:f,timestamp:c,isStart:a,isEnd:s,pointLength:o,currentTarget:l,getOffset:function(t){void 0===t&&(t=l);var e=t.getBoundingClientRect();return{x:h-Math.round(e.left),y:f-Math.round(e.top)}}})}function et(t,e,n){e.target,e.currentTarget;var r,i=e.type,o=h(e,["target","currentTarget","type"]);return document.createEvent?(r=document.createEvent("HTMLEvents"),r.initEvent(i,null===n||void 0===n?void 0:n.bubbles,null===n||void 0===n?void 0:n.cancelable)):r=new Event(i,n),Object.assign(r,o,{match:function(){return e.targets.every((function(t){return r.currentTarget.contains(t)}))}}),t.dispatchEvent(r)}function nt(t,e){if(!e.isPreventDefault)return!1;var n=!0;if(null!==t.target){var r=e.preventDefaultExclude;if(m(r)){if("tagName"in t.target){var i=t.target.tagName;n=!r.test(i)}}else g(r)&&(n=!r(t))}return n}var rt=[j,z,N,D];function it(t,e,n,r){return X||"Touch"===r?(rt.forEach((function(r){t.addEventListener(r,e,n)})),function(){rt.forEach((function(n){t.removeEventListener(n,e)}))}):(t.addEventListener(R,e,n),window.addEventListener(V,e,n),window.addEventListener(F,e,n),function(){t.removeEventListener(R,e),window.removeEventListener(V,e),window.removeEventListener(F,e)})}function ot(t,e,n){var r=null===n||void 0===n?void 0:n.name;if(void 0===r||void 0===t.recognizerMap[r]){var i=new e(n);t.recognizerMap[i.name]=i,i.recognizerMap=t.recognizerMap,t.recognizers.push(t.recognizerMap[i.name])}}function at(t,e){var n,r;if(void 0===e)t.recognizers=[],t.recognizerMap={};else try{for(var i=f(t.recognizers.entries()),o=i.next();!o.done;o=i.next()){var a=l(o.value,2),s=a[0],c=a[1];if(e===c.options.name){t.recognizers.splice(s,1),delete t.recognizerMap[e];break}}}catch(u){n={error:u}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}var st="at:after";function ct(t,e){var n=e.type,r=e.target,i=e.targets;t.emit(n,e,(function(t){if(void 0!==(null===t||void 0===t?void 0:t.target)){var e=t.target;return i.every((function(t){return e.contains(t)}))}return!0})),t.emit(st,e),t.options.domEvents&&void 0!==t.el&&null!==r&&(et(r,e,t.options.domEvents),et(r,p(p({},e),{_type:e.type,type:st}),t.options.domEvents))}var ut={domEvents:{bubbles:!0,cancelable:!0},isPreventDefault:!0,preventDefaultExclude:/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/},pt=function(t){function e(n,r){var i=t.call(this)||this;if(i.recognizerMap={},i.recognizers=[],i.cacheComputedFunctionGroup=Object.create(null),i.el=n,i.input=new K(n),i.options=p(p({},ut),r),i.recognizerMap=e.recognizerMap,i.recognizers=e.recognizers,void 0!==n){n.style.webkitTapHighlightColor="rgba(0,0,0,0)";var o=!1;try{var a={};Object.defineProperty(a,"passive",{get:function(){o=!0}}),window.addEventListener("_",(function(){}),a)}catch(s){}i.on("unbind",it(n,i.catchEvent.bind(i),!(i.options.isPreventDefault||!o)&&{passive:!0},i.options.device))}return i}return u(e,t),e.prototype.use=function(t,e){ot(this,t,e)},e.prototype.removeUse=function(t){at(this,t)},e.prototype.catchEvent=function(t){var e,n,r=this;nt(t,this.options)&&t.preventDefault();var i=this.input.transform(t);if(void 0!==i){var o="at:"+L,a=o+i.inputType;this.emit(o,i),this.emit(a,i);var s=this.options.domEvents;if(!1!==s){var c=t.target;null!==c&&(et(c,p(p({},i),{type:o}),s),et(c,p(p({},i),{type:a}),s))}var u=Object.create(null),h=function(t){if(t.disabled)return"continue";t.computedGroup=u,t.computeFunctionMap=l.cacheComputedFunctionGroup,t.recognize(i,(function(e,n){var o=p(p(p({},i),n),{type:e,baseType:t.name});Object.freeze(o),void 0===r.beforeEachHook?ct(r,o):r.beforeEachHook(t,(function(){ct(r,o)}))})),u=t.computedGroup,l.cacheComputedFunctionGroup=t.computeFunctionMap},l=this;try{for(var v=f(this.recognizers),d=v.next();!d.done;d=v.next()){var y=d.value;h(y)}}catch(m){e={error:m}}finally{try{d&&!d.done&&(n=v.return)&&n.call(v)}finally{if(e)throw e.error}}}},e.prototype.beforeEach=function(t){this.beforeEachHook=t},e.prototype.get=function(t){return this.recognizerMap[t]},e.prototype.set=function(t){this.options=p(p({},this.options),t)},e.prototype.destroy=function(){this.emit("unbind"),this.listenersMap={}},e.version="0.7.7",e.recognizers=[],e.recognizerMap={},e.use=function(t,n){ot(e,t,n)},e.removeUse=function(t){at(e,t)},e}(d),ht=pt;function ft(t){-1!==[G,B,$,H].indexOf(t.status)&&(t.status=Y)}function lt(t,e,n){var r,i,o,a,s,c,u,p={1:(r={},r[Y]=(i={},i[P]=k,i),r[k]=(o={},o[P]=U,o[E]=G,o[M]=B,o),r[U]=(a={},a[P]=U,a[E]=G,a[M]=B,a),r),0:(s={},s[k]=(c={},c[P]=B,c[E]=G,c[M]=B,c),s[U]=(u={},u[w]=H,u[P]=B,u[E]=G,u[M]=B,u),s)};return void 0!==p[Number(t)][e]&&p[Number(t)][e][n]||e}function vt(t,e,n){var r=t.test(e);ft(t);var i=e.inputType;t.status=lt(r,t.status,i);var o=t.computed;t.isRecognized=[k,U].includes(t.status);var a=t.name,s=t.status,c=t.isRecognized;return c&&n(a,o),(c||[G,B].includes(t.status))&&n(a+s,o),r}var dt=function(){function t(t){this.disabled=!1,this.status=Y,this.isRecognized=!1,this.recognizerMap={},this.computedGroup={},this.computed={},this.computeFunctionMap={},this.options=t,this.name=this.options.name}return t.prototype.set=function(t){return void 0!==t&&(this.options=p(p({},this.options),t)),this},t.prototype.isValidPointLength=function(t){return 0===this.options.pointLength||this.options.pointLength===t},t.prototype.compute=function(t,e){var n,r,i=Object.create(null);try{for(var o=f(t),a=o.next();!a.done;a=o.next()){var s=a.value,c=s._id,u=this,p=u.computedGroup,h=u.computeFunctionMap;for(var l in void 0===h[c]&&(h[c]=s()),p[c]=p[c]||h[c](e),p[c])i[l]=p[c][l]}}catch(v){n={error:v}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i},t}(),yt=dt,mt=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},gt=function(t,e){return t.x*e.x+t.y*e.y},bt=function(t,e){var n=mt(t)*mt(e);if(0===n)return 0;var r=gt(t,e)/n;return r>1&&(r=1),Math.acos(r)},Tt=function(t,e){return t.x*e.y-e.x*t.y},xt=function(t){return t/Math.PI*180},wt=function(t,e){var n=bt(t,e);return Tt(t,e)>0&&(n*=-1),xt(n)},Pt=function(t,e){return t===e?C:Math.abs(t)>Math.abs(e)?0<t?I:S:0<e?O:A};function Mt(t){var e=t.startV,n=t.prevV,r=t.activeV,i=Math.round(wt(r,n)),o=Math.round(wt(r,e));return{angle:o,deltaAngle:i}}function Et(){return function(t){var e=t.prevInput,n=0,r=0,i=0;if(void 0!==e&&(n=t.x-e.x,r=t.y-e.y,0!==n||0!==r)){var o=Math.sqrt(Math.pow(n,2)+Math.pow(r,2));i=Math.round(xt(Math.acos(Math.abs(n)/o)))}return{deltaX:n,deltaY:r,deltaXYAngle:i}}}function St(){var t=0,e=0,n=0,r=0,i=0,o=C;return function(a){var s=a.inputType,c=a.startInput;return w===s?(t=0,e=0,n=0,r=0,i=0,o=C):P===s&&(t=Math.round(a.points[0][b]-c.points[0][b]),e=Math.round(a.points[0][T]-c.points[0][T]),n=Math.abs(t),r=Math.abs(e),i=Math.round(mt({x:n,y:r})),o=Pt(t,e)),{displacementX:t,displacementY:e,distanceX:n,distanceY:r,distance:i,overallDirection:o}}}function It(){var t=0;return function(e){var n=e.inputType;return w===n&&(t=e.pointLength),{maxPointLength:t}}}function At(t){var e=t.startV,n=t.prevV,r=t.activeV,i=q(mt(r)/mt(n)),o=q(mt(r)/mt(e));return{scale:o,deltaScale:i}}function Ot(){var t,e,n=0,r=0,i=0,o=0;return function(a){if(void 0!==a){var s=a.inputType;e=e||a.startInput;var c=a.timestamp-e.timestamp;if(P===s&&x<c){var u=a.x-e.x,p=a.y-e.y;i=Math.round(u/c*100)/100,o=Math.round(p/c*100)/100,n=Math.abs(i),r=Math.abs(o),t=Pt(u,p)||t,e=a}}return{velocityX:n,velocityY:r,speedX:i,speedY:o,direction:t}}}function Ct(t){return{x:t.points[1][b]-t.points[0][b],y:t.points[1][T]-t.points[0][T]}}function Lt(){return function(t){var e=t.prevInput,n=t.startMultiInput;if(void 0!==n&&void 0!==e&&t.id!==n.id&&1<e.pointLength&&1<t.pointLength)return{startV:Ct(n),prevV:Ct(e),activeV:Ct(t)}}}Et._id="ComputeDeltaXY",St._id="computeDistance",It._id="computeMaxLength",Ot._id="ComputeVAndDir",Lt._id="ComputeVectorForMutli";var _t={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250},jt=function(t){function e(e){var n=t.call(this,p(p({},_t),e))||this;return n.tapCount=0,n}return u(e,t),e.prototype._isValidDistanceFromPrevTap=function(t){if(void 0!==this.prevTapPoint){var e=mt({x:t.x-this.prevTapPoint.x,y:t.y-this.prevTapPoint.y});return this.prevTapPoint=t,this.options.maxDistanceFromPrevTap>=e}return this.prevTapPoint=t,!0},e.prototype._isValidInterval=function(){var t=performance.now();if(void 0===this.prevTapTime)return this.prevTapTime=t,!0;var e=t-this.prevTapTime;return this.prevTapTime=t,e<this.options.waitNextTapTime},e.prototype.recognize=function(t,e){var n=t.inputType,r=t.x,i=t.y;this.computed=this.compute([It,St],t),E===n&&(this.status=Y,this.test(t)?(this.cancelCountDownToFail(),this._isValidDistanceFromPrevTap({x:r,y:i})&&this._isValidInterval()?this.tapCount++:this.tapCount=1,0===this.tapCount%this.options.tapTimes?(this.status=$,e(this.options.name,p(p({},this.computed),{tapCount:this.tapCount})),this.reset()):this.countDownToFail()):(this.reset(),this.status=H))},e.prototype.countDownToFail=function(){var t=this;this._countDownToFailTimer=setTimeout((function(){t.status=H,t.reset()}),this.options.waitNextTapTime)},e.prototype.cancelCountDownToFail=function(){clearTimeout(this._countDownToFailTimer)},e.prototype.reset=function(){this.tapCount=0,this.prevTapPoint=void 0,this.prevTapTime=void 0},e.prototype.test=function(t){var e=t.startInput,n=t.pointLength,r=t.timestamp-e.timestamp,i=this.computed,o=i.maxPointLength,a=i.distance;return o===this.options.pointLength&&0===n&&this.options.maxDistance>=a&&this.options.maxPressTime>r},e}(yt),zt=jt,Nt={name:"pan",threshold:10,pointLength:1},Dt=function(t){function e(e){return t.call(this,p(p({},Nt),e))||this}return u(e,t),e.prototype.test=function(t){var e=t.pointLength,n=this.computed.distance;return(this.isRecognized||this.options.threshold<=n)&&this.isValidPointLength(e)},e.prototype.recognize=function(t,e){this.computed=this.compute([Ot,St,Et],t);var n=void 0!==this.computed.direction&&vt(this,t,e);n&&e(this.options.name+this.computed.direction,this.computed)},e}(yt),Ft=Dt,Vt={name:"swipe",threshold:10,velocity:.3,pointLength:1},Rt=function(t){function e(e){return t.call(this,p(p({},Vt),e))||this}return u(e,t),e.prototype.test=function(t){var e=t.inputType;if(E!==e)return!1;var n=this.computed,r=n.velocityX,i=n.velocityY,o=n.maxPointLength,a=n.distance;return this.options.pointLength===o&&this.options.threshold<a&&this.options.velocity<Math.max(r,i)},e.prototype.recognize=function(t,e){this.computed=this.compute([It,Ot,St],t),this.test(t)&&(e(this.options.name,this.computed),e(this.options.name+this.computed.direction,this.computed))},e}(yt),Xt=Rt,Yt={name:"press",pointLength:1,maxDistance:9,minPressTime:251},kt=function(t){function e(e){return t.call(this,p(p({},Yt),e))||this}return u(e,t),e.prototype.recognize=function(t,e){var n=this,r=t.inputType,i=t.startInput,o=t.pointLength;if(w===r&&this.isValidPointLength(o))ft(this),this.cancel(),this._timeoutId=setTimeout((function(){n.status=$,e(n.options.name,t)}),this.options.minPressTime);else if(E===r&&$===this.status)e(""+this.options.name+A,this.computed);else if($!==this.status){var a=t.timestamp-i.timestamp;(!this.test(t)||this.options.minPressTime>a&&[E,M].includes(r))&&(this.cancel(),this.status=H)}},e.prototype.test=function(t){this.computed=this.compute([St],t);var e=this.computed.distance;return this.options.maxDistance>e},e.prototype.cancel=function(){clearTimeout(this._timeoutId)},e}(yt),Ut=kt,Gt={name:"pinch",threshold:0,pointLength:2},$t=function(t){function e(e){return t.call(this,p(p({},Gt),e))||this}return u(e,t),e.prototype.test=function(t){var e=t.pointLength,n=this.computed.scale;return this.isValidPointLength(e)&&void 0!==n&&(this.options.threshold<Math.abs(n-1)||this.isRecognized)},e.prototype.recognize=function(t,e){var n=this.compute([Lt],t);"activeV"in n&&(this.computed=p(p({},this.computed),At(n))),vt(this,t,e)},e}(yt),Ht=$t,Bt={name:"rotate",threshold:0,pointLength:2},qt=function(t){function e(e){return t.call(this,p(p({},Bt),e))||this}return u(e,t),e.prototype.test=function(t){var e=t.pointLength,n=this.computed.angle;return this.isValidPointLength(e)&&(this.options.threshold<Math.abs(n)||this.isRecognized)},e.prototype.recognize=function(t,e){var n=this.compute([Lt],t);"activeV"in n&&(this.computed=p(p({},this.computed),Mt(n))),vt(this,t,e)},e}(yt),Wt=qt;ht.use(zt),ht.use(Ft),ht.use(Xt),ht.use(Ut),ht.use(Ht),ht.use(Wt),ht.Tap=zt,ht.Pan=Ft,ht.Swipe=Xt,ht.Press=Ut,ht.Pinch=Ht,ht.Rotate=Wt,ht.STATUS_POSSIBLE=Y,ht.STATUS_START=k,ht.STATUS_MOVE=U,ht.STATUS_END=G,ht.STATUS_CANCELLED=B,ht.STATUS_FAILED=H,ht.STATUS_RECOGNIZED=$;var Jt=ht,Zt={name:"Crop",props:{width:{type:Number,default:2e3},height:{type:Number,default:2e3}},data:function(){return{at:null,context:null,stack:[],paths:[],activePath:[],activePathPoints:[],hitItem:null,canDrawPath:!0}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/Purple-and-Yellow-Playful-Monster-Daycare-Halloween-Flyer.jpg?v=1595652895",t.context=t.$refs.c.getContext("2d"),t.at=new Jt(t.$el),t.at.get("pan").set({threshold:0});case 4:case"end":return e.stop()}}),e)})))()},methods:{switchPointToCanvas:function(t){var e=Object(a["a"])(t,2),n=e[0],r=e[1],i=this.$refs.c.getBoundingClientRect(),o=i.top,s=i.left,c=this.$refs.c.offsetWidth,u=this.width/c;return[Math.round((n-s)*u),Math.round((r-o)*u)]},onPanstart:function(t){this.hitItem=this.hitTest(t),this.canDrawPath=!(void 0===this.hitItem&&0<this.stack.length);var e=this.context,n=this.switchPointToCanvas([t.x,t.y]),r=Object(a["a"])(n,2),i=r[0],o=r[1];this.drawCircle({x:i,y:o,r:20,fill:"#69c"}),e.globalCompositeOperation="destination-over",this.activePath=[[i,o]],this.paths.push(this.activePath),e.save(),e.strokeStyle="#f50",e.lineWidth=16,e.beginPath(),e.moveTo(i,o)},onPanmove:function(t){if(this.canDrawPath){var e=this.switchPointToCanvas([t.x,t.y]),n=Object(a["a"])(e,2),r=n[0],i=n[1];this.activePath.push([r,i]);var o=this.context;o.lineTo(r,i),o.stroke()}},onPanend:function(t){if(this.canDrawPath){var e=this.switchPointToCanvas([t.x,t.y]),n=Object(a["a"])(e,2),r=n[0],i=n[1],o=this.context;o.closePath(),o.restore(),o.globalCompositeOperation="source-over",this.drawCircle({x:r,y:i,r:20,fill:"#123"}),console.log(this.paths)}},onTap:function(t){var e=this.context,n=this.switchPointToCanvas([t.x,t.y]),r=Object(a["a"])(n,2),i=r[0],o=r[1];if(void 0===this.activePath.s)this.activePath={s:[i,o]},this.paths.push(this.activePath),e.moveTo(i,o);else{var s=this.context,c=this.activePath.s,u=[c[0]+(i-c[0])/2,c[1]+(o-c[1])/2];this.activePath.c=u,this.activePath.e=[i,o],console.log(c,u,[i,o]),s.quadraticCurveTo(u[0],u[1],i,o),s.strokeStyle="#f10",s.lineWidth=16,s.stroke(),this.activePath={}}},drawCircle:function(t){var e=t.x,n=t.y,r=t.r,i=t.fill,o=this.context;o.save(),o.beginPath(),o.arc(e,n,r,0,2*Math.PI,!1),o.fillStyle=i,o.fill(),o.closePath(),o.restore()},hitTest:function(t){var e,n=this.switchPointToCanvas([t.x,t.y]),r=Object(a["a"])(n,2),i=r[0],s=r[1],c=Object(o["a"])(this.stack);try{for(c.s();!(e=c.n()).done;){var u=e.value;if("path"===u.type){var p=u.points[0];if(this.drawCircle({x:p.x,y:p.y,r:20}),this.context.isPointInPath(i,s))return u}}}catch(h){c.e(h)}finally{c.f()}},draw:function(){var t,e=Object(o["a"])(this.stack);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.drawCircle(n)}}catch(r){e.e(r)}finally{e.f()}}}},Kt=Zt,Qt=(n("2b5d"),n("2877")),te=Object(Qt["a"])(Kt,r,i,!1,null,"964d1c06",null);e["default"]=te.exports},cb29:function(t,e,n){var r=n("23e7"),i=n("81d5"),o=n("44d2");r({target:"Array",proto:!0},{fill:i}),o("fill")},cec7:function(t,e,n){},d28b:function(t,e,n){var r=n("746f");r("iterator")},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("e260"),a=n("9112"),s=n("b622"),c=s("iterator"),u=s("toStringTag"),p=o.values;for(var h in i){var f=r[h],l=f&&f.prototype;if(l){if(l[c]!==p)try{a(l,c,p)}catch(d){l[c]=p}if(l[u]||a(l,u,h),i[h])for(var v in o)if(l[v]!==o[v])try{a(l,v,o[v])}catch(d){l[v]=o[v]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),p=o.Symbol;if(i&&"function"==typeof p&&(!("description"in p.prototype)||void 0!==p().description)){var h={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new p(t):void 0===t?p():p(t);return""===t&&(h[e]=!0),e};u(f,p);var l=f.prototype=p.prototype;l.constructor=f;var v=l.toString,d="Symbol(test)"==String(p("test")),y=/^Symbol\((.*)\)[^)]+$/;c(l,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=v.call(t);if(a(h,t))return"";var n=d?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),o=n("e8b5"),a=n("23cb"),s=n("50c4"),c=n("fc6a"),u=n("8418"),p=n("b622"),h=n("1dde"),f=n("ae40"),l=h("slice"),v=f("slice",{ACCESSORS:!0,0:0,1:2}),d=p("species"),y=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!l||!v},{slice:function(t,e){var n,r,p,h=c(this),f=s(h.length),l=a(t,f),v=a(void 0===e?f:e,f);if(o(h)&&(n=h.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[d],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return y.call(h,l,v);for(r=new(void 0===n?Array:n)(m(v-l,0)),p=0;l<v;l++,p++)l in h&&u(r,p,h[l]);return r.length=p,r}})}}]);
//# sourceMappingURL=Crop.4070df0a.js.map