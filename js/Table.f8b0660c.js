(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Table"],{"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),a=n("2d00"),s=i("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3f0e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("BackTop",[t._v(t._s(t.r))]),n("Table",{attrs:{data:t.list,stripe:"",columns:t.columns}})],1)},i=[],a=(n("4160"),n("b0c0"),n("159b"),n("5530")),s=n("5a0c"),u=n.n(s),o=n("fc48"),c={name:"TableView",data:function(){var t=this;return{r:0,columns:[{title:"订单号",key:"orderName"},{title:"姓名",key:"name"},{title:"地址",width:260,render:function(t,e){var n=e.row;return t("span",[t("p",n.address1),t("p",n.address2)])}},{title:"城市",key:"city"},{title:"省州(缩写)",key:"province_code"},{title:"邮编",key:"zip"},{title:"电话",key:"phone"},{title:"邮箱",key:"email"},{title:"总数",render:function(t,e){var n=e.row;return t("b",{class:["font-2",1<n.totalQuantity?"text-danger":"text-dark"]},n.totalQuantity)}},{title:"剩余",render:function(e,n){var r=n.row;return e("span",t.calc(r))}},{title:"更新日期",render:function(t,e){var n=e.row;return t("span",u()(n.updated_at).locale("zh-cn").format("YYYY-MM-DD hh:mm"))}}]}},computed:{list:function(){var t=this,e=[];return this.r=0,o.forEach((function(n){var r=n.name,i=n.email,s=n.totalQuantity,u=n.updated_at,o=n.total_price,c=n.shipping_address;t.r+=t.calc({totalQuantity:s,total_price:o}),e.push(Object(a["a"])({orderName:r,email:i,totalQuantity:s,total_price:o,updated_at:u},c))})),e}},methods:{calc:function(t){var e=35+10*(t.totalQuantity-1),n=6.5*t.total_price*.92-e-10*t.totalQuantity;return Math.round(n)-65}}},f=c,h=n("2877"),d=Object(h["a"])(f,r,i,!1,null,"3a0e9925",null);e["default"]=d.exports},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",a="week",s="month",u="quarter",o="year",c="date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,h=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),a=n-i<0,u=e.clone().add(r+(a?-1:1),s);return+(-(r+(n-i)/(a?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(f){return{M:s,y:o,w:a,d:i,D:c,h:r,m:n,s:e,ms:t,Q:u}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",v={};v[p]=d;var y=function(t){return t instanceof w},m=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(p=r),r||!n&&p},M=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},g=$;g.l=m,g.i=y,g.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function d(t){this.$L=m(t.locale,null,!0),this.parse(t)}var l=d.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return g},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return M(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<M(t)},l.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,u){var f=this,h=!!g.u(u)||u,d=g.p(t),l=function(t,e){var n=g.w(f.$u?Date.UTC(f.$y,e,t):new Date(f.$y,e,t),f);return h?n:n.endOf(i)},$=function(t,e){return g.w(f.toDate()[t].apply(f.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),f)},p=this.$W,v=this.$M,y=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case o:return h?l(1,0):l(31,11);case s:return h?l(1,v):l(0,v+1);case a:var M=this.$locale().weekStart||0,w=(p<M?p+7:p)-M;return l(h?y-w:y+(6-w),v);case i:case c:return $(m+"Hours",0);case r:return $(m+"Minutes",1);case n:return $(m+"Seconds",2);case e:return $(m+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(a,u){var f,h=g.p(a),d="set"+(this.$u?"UTC":""),l=(f={},f[i]=d+"Date",f[c]=d+"Date",f[s]=d+"Month",f[o]=d+"FullYear",f[r]=d+"Hours",f[n]=d+"Minutes",f[e]=d+"Seconds",f[t]=d+"Milliseconds",f)[h],$=h===i?this.$D+(u-this.$W):u;if(h===s||h===o){var p=this.clone().set(c,1);p.$d[l]($),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[g.p(t)]()},l.add=function(t,u){var c,f=this;t=Number(t);var h=g.p(u),d=function(e){var n=M(f);return g.w(n.date(n.date()+Math.round(e*t)),f)};if(h===s)return this.set(s,this.$M+t);if(h===o)return this.set(o,this.$y+t);if(h===i)return d(1);if(h===a)return d(7);var l=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[h]||1,$=this.$d.getTime()+t*l;return g.w($,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),a=this.$H,s=this.$m,u=this.$M,o=i.weekdays,c=i.months,f=function(t,r,i,a){return t&&(t[r]||t(e,n))||i[r].substr(0,a)},d=function(t){return g.s(a%12||12,t,"0")},l=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:g.s(u+1,2,"0"),MMM:f(i.monthsShort,u,c,3),MMMM:f(c,u),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,o,2),ddd:f(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:g.s(a,2,"0"),h:d(1),hh:d(2),a:l(a,s,!0),A:l(a,s,!1),m:String(s),mm:g.s(s,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(h,(function(t,e){return e||$[t]||r.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,c,f){var h,d=g.p(c),l=M(t),$=6e4*(l.utcOffset()-this.utcOffset()),p=this-l,v=g.m(this,l);return v=(h={},h[o]=v/12,h[s]=v,h[u]=v/3,h[a]=(p-$)/6048e5,h[i]=(p-$)/864e5,h[r]=p/36e5,h[n]=p/6e4,h[e]=p/1e3,h)[d]||p,f?v:g.a(v)},l.daysInMonth=function(){return this.endOf(s).$D},l.$locale=function(){return v[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=m(t,e,!0);return r&&(n.$L=r),n},l.clone=function(){return g.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},d}(),S=w.prototype;return M.prototype=S,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",s],["$y",o],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t(e,w,M),M},M.locale=m,M.isDayjs=y,M.unix=function(t){return M(1e3*t)},M.en=v[p],M.Ls=v,M.p={},M}))},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),a=n("b622"),s=a("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),a=n("5135"),s=Object.defineProperty,u={},o=function(t){throw t};t.exports=function(t,e){if(a(u,t))return u[t];e||(e={});var n=[][t],c=!!a(e,"ACCESSORS")&&e.ACCESSORS,f=a(e,0)?e[0]:o,h=a(e,1)?e[1]:void 0;return u[t]=!!n&&!i((function(){if(c&&!r)return!0;var t={length:-1};c?s(t,1,{enumerable:!0,get:o}):t[1]=1,n.call(t,f,h)}))}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,s=a.toString,u=/^\s*function ([^ (]*)/,o="name";r&&!(o in a)&&i(a,o,{configurable:!0,get:function(){try{return s.call(this).match(u)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),a=n("7b0b"),s=n("50c4"),u=n("65f0"),o=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,f=4==t,h=6==t,d=5==t||h;return function(l,$,p,v){for(var y,m,M=a(l),g=i(M),w=r($,p,3),S=s(g.length),D=0,b=v||u,_=e?b(l,S):n?b(l,0):void 0;S>D;D++)if((d||D in g)&&(y=g[D],m=w(y,D,M),t))if(e)_[D]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return D;case 2:o.call(_,y)}else if(f)return!1;return h?-1:c||f?f:_}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=Table.f8b0660c.js.map