(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Crop"],{"2b5d":function(t,e,n){"use strict";n("cec7")},3835:function(t,e,n){"use strict";function i(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function r(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){r=!0,o=c}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}}var o=n("06c5");function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return i(t)||r(t,e)||Object(o["a"])(t,e)||a()}},"81d5":function(t,e,n){"use strict";var i=n("7b0b"),r=n("23cb"),o=n("50c4");t.exports=function(t){var e=i(this),n=o(e.length),a=arguments.length,s=r(a>1?arguments[1]:void 0,n),c=a>2?arguments[2]:void 0,u=void 0===c?n:r(c,n);while(u>s)e[s++]=t;return e}},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var i=n("06c5");function r(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(i["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw a}}}}},c357:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{ref:"c",staticClass:"crop",attrs:{width:t.width,height:t.height},on:{tap:t.onTap,panstart:t.onPanstart,panmove:t.onPanmove,panend:t.onPanend}})},r=[],o=(n("cb29"),n("a9e3"),n("b85c")),a=n("3835"),s=(n("96cf"),n("1da1")),c=function(t,e){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},c(t,e)};function u(t,e){function n(){this.constructor=t}c(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var p=function(){return p=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},p.apply(this,arguments)};function h(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}function l(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,o=n.call(t),a=[];try{while((void 0===e||e-- >0)&&!(i=o.next()).done)a.push(i.value)}catch(s){r={error:s}}finally{try{i&&!i.done&&(n=o["return"])&&n.call(o)}finally{if(r)throw r.error}}return a}var v=function(){function t(){this.listenersMap={}}return t.prototype.target=function(t){var e=this;return{on:function(n,i){e.on(n,i,{target:t})}}},t.prototype.on=function(t,e,n){var i,r,o=(void 0===n?{}:n).target,a=Array.isArray(t)?t:[t];try{for(var s=l(a),c=s.next();!c.done;c=s.next()){var u=c.value;void 0===this.listenersMap[u]&&(this.listenersMap[u]=[]),void 0!==o&&(e.target=o),this.listenersMap[u].push(e)}}catch(p){i={error:p}}finally{try{c&&!c.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}},t.prototype.off=function(t,e){var n=this.listenersMap[t];if(void 0!==n)if(void 0===e)delete this.listenersMap[t];else{var i=n.findIndex((function(t){return t===e}));n.splice(i,1)}},t.prototype.emit=function(t,e,n){var i,r;void 0===n&&(n=function(){return!0});var o=this.listenersMap[t];if(void 0!==o&&0<o.length)try{for(var a=l(o),s=a.next();!s.done;s=a.next()){var c=s.value,u=c.target;n({target:u})&&c(e)}}catch(p){i={error:p}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}},t.prototype.destroy=function(){this.listenersMap={}},t}(),d=v,y=Object.prototype.toString;function m(t){return"[object RegExp]"===y.call(t)}function g(t){return"[object Function]"===y.call(t)}var b="clientX",T="clientY",w=16,x="start",P="move",M="cancel",E="end",O="left",L="right",S="up",C="down",I="none",z="touch",_="mouse",j=z+x,D=z+P,A=z+E,V=z+M,F=_+S,X=_+P,Y=_+C,k=window.wx||"on"+j in window,N="p",R=x,U=P,G=E,H="r",$="f",B=M;function q(t){return Math.round(100*t)/100}var W=function(){function t(){}return t}(),J=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.load=function(t,e){var n=[],i=[];Array.from(t.touches).forEach((function(t){var r=t.clientX,o=t.clientY,a=t.target;(null===e||void 0===e?void 0:e.contains(a))&&(n.push(a),i.push({clientX:r,clientY:o,target:a}))}));var r=Array.from(t.changedTouches).map((function(t){var e=t.clientX,n=t.clientY,i=t.target;return{clientX:e,clientY:n,target:i}}));return{inputType:t.type.replace("touch",""),changedPoints:r,points:i,nativeEvent:t,target:t.target,targets:n}},e}(W),Z=function(t){function e(){var e=t.call(this)||this;return e.target=null,e.isPressed=!1,e}return u(e,t),e.prototype.load=function(t){var e,n=t.clientX,i=t.clientY,r=t.type,o=t.button,a=t.target,s=[{clientX:n,clientY:i,target:a}];Y===r&&0===o?(this.target=a,this.isPressed=!0,e=x):this.isPressed&&(X===r?e=P:F===r&&(s=[],e=E,this.isPressed=!1));var c=this.prevPoints||[{clientX:n,clientY:i,target:a}];if(this.prevPoints=[{clientX:n,clientY:i,target:a}],void 0!==e)return{inputType:e,changedPoints:c,points:s,target:this.target,targets:[this.target],nativeEvent:t}},e}(W),K=function(){function t(t){var e=k?J:Z;this.adapter=new e,this.id=0,this.el=t}return t.prototype.transform=function(t){this.prevInput=this.activeInput;var e=this.adapter.load(t,this.el);if(void 0!==e){var n=Number.MAX_SAFE_INTEGER>this.id?++this.id:1,i=p(p({},e),{id:n}),r=tt(i);this.activeInput=r;var o=r.isStart,a=r.pointLength;return o&&(this.startInput=r,this.prevInput=void 0,this.startMultiInput=1<a?r:void 0),p(p({},r),{prevInput:this.prevInput,startMultiInput:this.startMultiInput,startInput:this.startInput})}},t}();function Q(t){var e=t.length;if(0<e){if(1===e){var n=t[0],i=n.clientX,r=n.clientY;return{x:Math.round(i),y:Math.round(r)}}var o=t.reduce((function(t,e){return t.x+=e[b],t.y+=e[T],t}),{x:0,y:0});return{x:Math.round(o.x/e),y:Math.round(o.y/e)}}}function tt(t){var e=t.inputType,n=t.points,i=t.changedPoints,r=t.nativeEvent,o=n.length,a=x===e,s=E===e&&0===o||M===e,c=performance.now(),u=Q(n)||Q(i),h=u.x,l=u.y,f=r.currentTarget;return p(p({},t),{x:h,y:l,timestamp:c,isStart:a,isEnd:s,pointLength:o,currentTarget:f,getOffset:function(t){void 0===t&&(t=f);var e=t.getBoundingClientRect();return{x:h-Math.round(e.left),y:l-Math.round(e.top)}}})}function et(t,e,n){e.target,e.currentTarget;var i,r=e.type,o=h(e,["target","currentTarget","type"]);return document.createEvent?(i=document.createEvent("HTMLEvents"),i.initEvent(r,null===n||void 0===n?void 0:n.bubbles,null===n||void 0===n?void 0:n.cancelable)):i=new Event(r,n),Object.assign(i,o,{match:function(){return e.targets.every((function(t){return i.currentTarget.contains(t)}))}}),t.dispatchEvent(i)}function nt(t,e){if(!e.isPreventDefault)return!1;var n=!0;if(null!==t.target){var i=e.preventDefaultExclude;if(m(i)){if("tagName"in t.target){var r=t.target.tagName;n=!i.test(r)}}else g(i)&&(n=!i(t))}return n}var it=[j,D,A,V];function rt(t,e,n,i){return k||"Touch"===i?(it.forEach((function(i){t.addEventListener(i,e,n)})),function(){it.forEach((function(n){t.removeEventListener(n,e)}))}):(t.addEventListener(Y,e,n),window.addEventListener(X,e,n),window.addEventListener(F,e,n),function(){t.removeEventListener(Y,e),window.removeEventListener(X,e),window.removeEventListener(F,e)})}function ot(t,e,n){var i=null===n||void 0===n?void 0:n.name;if(void 0===i||void 0===t.recognizerMap[i]){var r=new e(n);t.recognizerMap[r.name]=r,r.recognizerMap=t.recognizerMap,t.recognizers.push(t.recognizerMap[r.name])}}function at(t,e){var n,i;if(void 0===e)t.recognizers=[],t.recognizerMap={};else try{for(var r=l(t.recognizers.entries()),o=r.next();!o.done;o=r.next()){var a=f(o.value,2),s=a[0],c=a[1];if(e===c.options.name){t.recognizers.splice(s,1),delete t.recognizerMap[e];break}}}catch(u){n={error:u}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}}var st="at:after";function ct(t,e){var n=e.type,i=e.target,r=e.targets;t.emit(n,e,(function(t){if(void 0!==(null===t||void 0===t?void 0:t.target)){var e=t.target;return r.every((function(t){return e.contains(t)}))}return!0})),t.emit(st,e),t.options.domEvents&&void 0!==t.el&&null!==i&&(et(i,e,t.options.domEvents),et(i,p(p({},e),{_type:e.type,type:st}),t.options.domEvents))}var ut={domEvents:{bubbles:!0,cancelable:!0},isPreventDefault:!0,preventDefaultExclude:/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/},pt=function(t){function e(n,i){var r=t.call(this)||this;if(r.recognizerMap={},r.recognizers=[],r.cacheComputedFunctionGroup=Object.create(null),r.el=n,r.input=new K(n),r.options=p(p({},ut),i),r.recognizerMap=e.recognizerMap,r.recognizers=e.recognizers,void 0!==n){n.style.webkitTapHighlightColor="rgba(0,0,0,0)";var o=!1;try{var a={};Object.defineProperty(a,"passive",{get:function(){o=!0}}),window.addEventListener("_",(function(){}),a)}catch(s){}r.on("unbind",rt(n,r.catchEvent.bind(r),!(r.options.isPreventDefault||!o)&&{passive:!0},r.options.device))}return r}return u(e,t),e.prototype.use=function(t,e){ot(this,t,e)},e.prototype.removeUse=function(t){at(this,t)},e.prototype.catchEvent=function(t){var e,n,i=this;nt(t,this.options)&&t.preventDefault();var r=this.input.transform(t);if(void 0!==r){var o="at:"+z,a=o+r.inputType;this.emit(o,r),this.emit(a,r);var s=this.options.domEvents;if(!1!==s){var c=t.target;null!==c&&(et(c,p(p({},r),{type:o}),s),et(c,p(p({},r),{type:a}),s))}var u=Object.create(null),h=function(t){if(t.disabled)return"continue";t.computedGroup=u,t.computeFunctionMap=f.cacheComputedFunctionGroup,t.recognize(r,(function(e,n){var o=p(p(p({},r),n),{type:e,baseType:t.name});Object.freeze(o),void 0===i.beforeEachHook?ct(i,o):i.beforeEachHook(t,(function(){ct(i,o)}))})),u=t.computedGroup,f.cacheComputedFunctionGroup=t.computeFunctionMap},f=this;try{for(var v=l(this.recognizers),d=v.next();!d.done;d=v.next()){var y=d.value;h(y)}}catch(m){e={error:m}}finally{try{d&&!d.done&&(n=v.return)&&n.call(v)}finally{if(e)throw e.error}}}},e.prototype.beforeEach=function(t){this.beforeEachHook=t},e.prototype.get=function(t){return this.recognizerMap[t]},e.prototype.set=function(t){this.options=p(p({},this.options),t)},e.prototype.destroy=function(){this.emit("unbind"),this.listenersMap={}},e.version="0.7.7",e.recognizers=[],e.recognizerMap={},e.use=function(t,n){ot(e,t,n)},e.removeUse=function(t){at(e,t)},e}(d),ht=pt;function lt(t){-1!==[G,B,H,$].indexOf(t.status)&&(t.status=N)}function ft(t,e,n){var i,r,o,a,s,c,u,p={1:(i={},i[N]=(r={},r[P]=R,r),i[R]=(o={},o[P]=U,o[E]=G,o[M]=B,o),i[U]=(a={},a[P]=U,a[E]=G,a[M]=B,a),i),0:(s={},s[R]=(c={},c[P]=B,c[E]=G,c[M]=B,c),s[U]=(u={},u[x]=$,u[P]=B,u[E]=G,u[M]=B,u),s)};return void 0!==p[Number(t)][e]&&p[Number(t)][e][n]||e}function vt(t,e,n){var i=t.test(e);lt(t);var r=e.inputType;t.status=ft(i,t.status,r);var o=t.computed;t.isRecognized=[R,U].includes(t.status);var a=t.name,s=t.status,c=t.isRecognized;return c&&n(a,o),(c||[G,B].includes(t.status))&&n(a+s,o),i}var dt=function(){function t(t){this.disabled=!1,this.status=N,this.isRecognized=!1,this.recognizerMap={},this.computedGroup={},this.computed={},this.computeFunctionMap={},this.options=t,this.name=this.options.name}return t.prototype.set=function(t){return void 0!==t&&(this.options=p(p({},this.options),t)),this},t.prototype.isValidPointLength=function(t){return 0===this.options.pointLength||this.options.pointLength===t},t.prototype.compute=function(t,e){var n,i,r=Object.create(null);try{for(var o=l(t),a=o.next();!a.done;a=o.next()){var s=a.value,c=s._id,u=this,p=u.computedGroup,h=u.computeFunctionMap;for(var f in void 0===h[c]&&(h[c]=s()),p[c]=p[c]||h[c](e),p[c])r[f]=p[c][f]}}catch(v){n={error:v}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return r},t}(),yt=dt,mt=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},gt=function(t,e){return t.x*e.x+t.y*e.y},bt=function(t,e){var n=mt(t)*mt(e);if(0===n)return 0;var i=gt(t,e)/n;return i>1&&(i=1),Math.acos(i)},Tt=function(t,e){return t.x*e.y-e.x*t.y},wt=function(t){return t/Math.PI*180},xt=function(t,e){var n=bt(t,e);return Tt(t,e)>0&&(n*=-1),wt(n)},Pt=function(t,e){return t===e?I:Math.abs(t)>Math.abs(e)?0<t?L:O:0<e?C:S};function Mt(t){var e=t.startV,n=t.prevV,i=t.activeV,r=Math.round(xt(i,n)),o=Math.round(xt(i,e));return{angle:o,deltaAngle:r}}function Et(){return function(t){var e=t.prevInput,n=0,i=0,r=0;if(void 0!==e&&(n=t.x-e.x,i=t.y-e.y,0!==n||0!==i)){var o=Math.sqrt(Math.pow(n,2)+Math.pow(i,2));r=Math.round(wt(Math.acos(Math.abs(n)/o)))}return{deltaX:n,deltaY:i,deltaXYAngle:r}}}function Ot(){var t=0,e=0,n=0,i=0,r=0,o=I;return function(a){var s=a.inputType,c=a.startInput;return x===s?(t=0,e=0,n=0,i=0,r=0,o=I):P===s&&(t=Math.round(a.points[0][b]-c.points[0][b]),e=Math.round(a.points[0][T]-c.points[0][T]),n=Math.abs(t),i=Math.abs(e),r=Math.round(mt({x:n,y:i})),o=Pt(t,e)),{displacementX:t,displacementY:e,distanceX:n,distanceY:i,distance:r,overallDirection:o}}}function Lt(){var t=0;return function(e){var n=e.inputType;return x===n&&(t=e.pointLength),{maxPointLength:t}}}function St(t){var e=t.startV,n=t.prevV,i=t.activeV,r=q(mt(i)/mt(n)),o=q(mt(i)/mt(e));return{scale:o,deltaScale:r}}function Ct(){var t,e,n=0,i=0,r=0,o=0;return function(a){if(void 0!==a){var s=a.inputType;e=e||a.startInput;var c=a.timestamp-e.timestamp;if(P===s&&w<c){var u=a.x-e.x,p=a.y-e.y;r=Math.round(u/c*100)/100,o=Math.round(p/c*100)/100,n=Math.abs(r),i=Math.abs(o),t=Pt(u,p)||t,e=a}}return{velocityX:n,velocityY:i,speedX:r,speedY:o,direction:t}}}function It(t){return{x:t.points[1][b]-t.points[0][b],y:t.points[1][T]-t.points[0][T]}}function zt(){return function(t){var e=t.prevInput,n=t.startMultiInput;if(void 0!==n&&void 0!==e&&t.id!==n.id&&1<e.pointLength&&1<t.pointLength)return{startV:It(n),prevV:It(e),activeV:It(t)}}}Et._id="ComputeDeltaXY",Ot._id="computeDistance",Lt._id="computeMaxLength",Ct._id="ComputeVAndDir",zt._id="ComputeVectorForMutli";var _t={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250},jt=function(t){function e(e){var n=t.call(this,p(p({},_t),e))||this;return n.tapCount=0,n}return u(e,t),e.prototype._isValidDistanceFromPrevTap=function(t){if(void 0!==this.prevTapPoint){var e=mt({x:t.x-this.prevTapPoint.x,y:t.y-this.prevTapPoint.y});return this.prevTapPoint=t,this.options.maxDistanceFromPrevTap>=e}return this.prevTapPoint=t,!0},e.prototype._isValidInterval=function(){var t=performance.now();if(void 0===this.prevTapTime)return this.prevTapTime=t,!0;var e=t-this.prevTapTime;return this.prevTapTime=t,e<this.options.waitNextTapTime},e.prototype.recognize=function(t,e){var n=t.inputType,i=t.x,r=t.y;this.computed=this.compute([Lt,Ot],t),E===n&&(this.status=N,this.test(t)?(this.cancelCountDownToFail(),this._isValidDistanceFromPrevTap({x:i,y:r})&&this._isValidInterval()?this.tapCount++:this.tapCount=1,0===this.tapCount%this.options.tapTimes?(this.status=H,e(this.options.name,p(p({},this.computed),{tapCount:this.tapCount})),this.reset()):this.countDownToFail()):(this.reset(),this.status=$))},e.prototype.countDownToFail=function(){var t=this;this._countDownToFailTimer=setTimeout((function(){t.status=$,t.reset()}),this.options.waitNextTapTime)},e.prototype.cancelCountDownToFail=function(){clearTimeout(this._countDownToFailTimer)},e.prototype.reset=function(){this.tapCount=0,this.prevTapPoint=void 0,this.prevTapTime=void 0},e.prototype.test=function(t){var e=t.startInput,n=t.pointLength,i=t.timestamp-e.timestamp,r=this.computed,o=r.maxPointLength,a=r.distance;return o===this.options.pointLength&&0===n&&this.options.maxDistance>=a&&this.options.maxPressTime>i},e}(yt),Dt=jt,At={name:"pan",threshold:10,pointLength:1},Vt=function(t){function e(e){return t.call(this,p(p({},At),e))||this}return u(e,t),e.prototype.test=function(t){var e=t.pointLength,n=this.computed.distance;return(this.isRecognized||this.options.threshold<=n)&&this.isValidPointLength(e)},e.prototype.recognize=function(t,e){this.computed=this.compute([Ct,Ot,Et],t);var n=void 0!==this.computed.direction&&vt(this,t,e);n&&e(this.options.name+this.computed.direction,this.computed)},e}(yt),Ft=Vt,Xt={name:"swipe",threshold:10,velocity:.3,pointLength:1},Yt=function(t){function e(e){return t.call(this,p(p({},Xt),e))||this}return u(e,t),e.prototype.test=function(t){var e=t.inputType;if(E!==e)return!1;var n=this.computed,i=n.velocityX,r=n.velocityY,o=n.maxPointLength,a=n.distance;return this.options.pointLength===o&&this.options.threshold<a&&this.options.velocity<Math.max(i,r)},e.prototype.recognize=function(t,e){this.computed=this.compute([Lt,Ct,Ot],t),this.test(t)&&(e(this.options.name,this.computed),e(this.options.name+this.computed.direction,this.computed))},e}(yt),kt=Yt,Nt={name:"press",pointLength:1,maxDistance:9,minPressTime:251},Rt=function(t){function e(e){return t.call(this,p(p({},Nt),e))||this}return u(e,t),e.prototype.recognize=function(t,e){var n=this,i=t.inputType,r=t.startInput,o=t.pointLength;if(x===i&&this.isValidPointLength(o))lt(this),this.cancel(),this._timeoutId=setTimeout((function(){n.status=H,e(n.options.name,t)}),this.options.minPressTime);else if(E===i&&H===this.status)e(""+this.options.name+S,this.computed);else if(H!==this.status){var a=t.timestamp-r.timestamp;(!this.test(t)||this.options.minPressTime>a&&[E,M].includes(i))&&(this.cancel(),this.status=$)}},e.prototype.test=function(t){this.computed=this.compute([Ot],t);var e=this.computed.distance;return this.options.maxDistance>e},e.prototype.cancel=function(){clearTimeout(this._timeoutId)},e}(yt),Ut=Rt,Gt={name:"pinch",threshold:0,pointLength:2},Ht=function(t){function e(e){return t.call(this,p(p({},Gt),e))||this}return u(e,t),e.prototype.test=function(t){var e=t.pointLength,n=this.computed.scale;return this.isValidPointLength(e)&&void 0!==n&&(this.options.threshold<Math.abs(n-1)||this.isRecognized)},e.prototype.recognize=function(t,e){var n=this.compute([zt],t);"activeV"in n&&(this.computed=p(p({},this.computed),St(n))),vt(this,t,e)},e}(yt),$t=Ht,Bt={name:"rotate",threshold:0,pointLength:2},qt=function(t){function e(e){return t.call(this,p(p({},Bt),e))||this}return u(e,t),e.prototype.test=function(t){var e=t.pointLength,n=this.computed.angle;return this.isValidPointLength(e)&&(this.options.threshold<Math.abs(n)||this.isRecognized)},e.prototype.recognize=function(t,e){var n=this.compute([zt],t);"activeV"in n&&(this.computed=p(p({},this.computed),Mt(n))),vt(this,t,e)},e}(yt),Wt=qt;ht.use(Dt),ht.use(Ft),ht.use(kt),ht.use(Ut),ht.use($t),ht.use(Wt),ht.Tap=Dt,ht.Pan=Ft,ht.Swipe=kt,ht.Press=Ut,ht.Pinch=$t,ht.Rotate=Wt,ht.STATUS_POSSIBLE=N,ht.STATUS_START=R,ht.STATUS_MOVE=U,ht.STATUS_END=G,ht.STATUS_CANCELLED=B,ht.STATUS_FAILED=$,ht.STATUS_RECOGNIZED=H;var Jt=ht,Zt={name:"Crop",props:{width:{type:Number,default:2e3},height:{type:Number,default:2e3}},data:function(){return{at:null,context:null,stack:[],paths:[],activePath:[],activePathPoints:[],hitItem:null,canDrawPath:!0}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"https://cdn.shopifycdn.net/s/files/1/0276/2922/4000/files/Purple-and-Yellow-Playful-Monster-Daycare-Halloween-Flyer.jpg?v=1595652895",t.context=t.$refs.c.getContext("2d"),t.at=new Jt(t.$el),t.at.get("pan").set({threshold:0});case 4:case"end":return e.stop()}}),e)})))()},methods:{switchPointToCanvas:function(t){var e=Object(a["a"])(t,2),n=e[0],i=e[1],r=this.$refs.c.getBoundingClientRect(),o=r.top,s=r.left,c=this.$refs.c.offsetWidth,u=this.width/c;return[Math.round((n-s)*u),Math.round((i-o)*u)]},onPanstart:function(t){this.hitItem=this.hitTest(t),this.canDrawPath=!(void 0===this.hitItem&&0<this.stack.length);var e=this.context,n=this.switchPointToCanvas([t.x,t.y]),i=Object(a["a"])(n,2),r=i[0],o=i[1];this.drawCircle({x:r,y:o,r:20,fill:"#69c"}),e.globalCompositeOperation="destination-over",this.activePath=[[r,o]],this.paths.push(this.activePath),e.save(),e.strokeStyle="#f50",e.lineWidth=16,e.beginPath(),e.moveTo(r,o)},onPanmove:function(t){if(this.canDrawPath){var e=this.switchPointToCanvas([t.x,t.y]),n=Object(a["a"])(e,2),i=n[0],r=n[1];this.activePath.push([i,r]);var o=this.context;o.lineTo(i,r),o.stroke()}},onPanend:function(t){if(this.canDrawPath){var e=this.switchPointToCanvas([t.x,t.y]),n=Object(a["a"])(e,2),i=n[0],r=n[1],o=this.context;o.closePath(),o.restore(),o.globalCompositeOperation="source-over",this.drawCircle({x:i,y:r,r:20,fill:"#123"}),console.log(this.paths)}},onTap:function(t){var e=this.context,n=this.switchPointToCanvas([t.x,t.y]),i=Object(a["a"])(n,2),r=i[0],o=i[1];if(void 0===this.activePath.s)this.activePath={s:[r,o]},this.paths.push(this.activePath),e.moveTo(r,o);else{var s=this.context,c=this.activePath.s,u=[c[0]+(r-c[0])/2,c[1]+(o-c[1])/2];this.activePath.c=u,this.activePath.e=[r,o],console.log(c,u,[r,o]),s.quadraticCurveTo(u[0],u[1],r,o),s.strokeStyle="#f10",s.lineWidth=16,s.stroke(),this.activePath={}}},drawCircle:function(t){var e=t.x,n=t.y,i=t.r,r=t.fill,o=this.context;o.save(),o.beginPath(),o.arc(e,n,i,0,2*Math.PI,!1),o.fillStyle=r,o.fill(),o.closePath(),o.restore()},hitTest:function(t){var e,n=this.switchPointToCanvas([t.x,t.y]),i=Object(a["a"])(n,2),r=i[0],s=i[1],c=Object(o["a"])(this.stack);try{for(c.s();!(e=c.n()).done;){var u=e.value;if("path"===u.type){var p=u.points[0];if(this.drawCircle({x:p.x,y:p.y,r:20}),this.context.isPointInPath(r,s))return u}}}catch(h){c.e(h)}finally{c.f()}},draw:function(){var t,e=Object(o["a"])(this.stack);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.drawCircle(n)}}catch(i){e.e(i)}finally{e.f()}}}},Kt=Zt,Qt=(n("2b5d"),n("2877")),te=Object(Qt["a"])(Kt,i,r,!1,null,"964d1c06",null);e["default"]=te.exports},cb29:function(t,e,n){var i=n("23e7"),r=n("81d5"),o=n("44d2");i({target:"Array",proto:!0},{fill:r}),o("fill")},cec7:function(t,e,n){}}]);
//# sourceMappingURL=Crop.27b3f931.js.map