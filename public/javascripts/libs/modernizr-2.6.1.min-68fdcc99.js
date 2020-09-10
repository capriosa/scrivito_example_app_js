window.Modernizr=function(e,t,i){function n(e){b.cssText=e}function o(e,t){return n(C.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function r(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var n in e){var o=e[n];if(!r(o,"-")&&b[o]!==i)return"pfx"==t?o:!0}return!1}function l(e,t,n){for(var o in e){var r=t[e[o]];if(r!==i)return n===!1?e[o]:s(r,"function")?r.bind(n||t):r}return!1}function c(e,t,i){var n=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(n+" ")+n).split(" ");return s(t,"string")||s(t,"undefined")?a(o,t):(o=(e+" "+S.join(n+" ")+n).split(" "),l(o,t,i))}function d(){f.input=function(i){for(var n=0,o=i.length;o>n;n++)P[i[n]]=i[n]in w;return P.list&&(P.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),P}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var n,o,s,r=0,a=e.length;a>r;r++)w.setAttribute("type",o=e[r]),n="text"!==w.type,n&&(w.value=x,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==i?(m.appendChild(w),s=t.defaultView,n=s.getComputedStyle&&"textfield"!==s.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,m.removeChild(w)):/^(search|tel)$/.test(o)||(n=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=x)),O[e[r]]=!!n;return O}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var u,h,p="2.6.1",f={},g=!0,m=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,w=t.createElement("input"),x=":)",$={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),T="Webkit Moz O ms",k=T.split(" "),S=T.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},A={},O={},P={},j=[],z=j.slice,M=function(e,i,n,o){var s,r,a,l=t.createElement("div"),c=t.body,d=c?c:t.createElement("body");if(parseInt(n,10))for(;n--;)a=t.createElement("div"),a.id=o?o[n]:v+(n+1),l.appendChild(a);return s=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(c?l:d).innerHTML+=s,d.appendChild(l),c||(d.style.background="",m.appendChild(d)),r=i(l,e),c?l.parentNode.removeChild(l):d.parentNode.removeChild(d),!!r},q=function(t){var i=e.matchMedia||e.msMatchMedia;if(i)return i(t).matches;var n;return M("@media "+t+" { #"+v+" { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),n},D=function(){function e(e,o){o=o||t.createElement(n[e]||"div"),e="on"+e;var r=e in o;return r||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),r=s(o[e],"function"),s(o[e],"undefined")||(o[e]=i),o.removeAttribute(e))),o=null,r}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),I={}.hasOwnProperty;h=s(I,"undefined")||s(I.call,"undefined")?function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")}:function(e,t){return I.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var i=z.call(arguments,1),n=function(){if(this instanceof n){var o=function(){};o.prototype=t.prototype;var s=new o,r=t.apply(s,i.concat(z.call(arguments)));return Object(r)===r?r:s}return t.apply(e,i.concat(z.call(arguments)))};return n}),A.flexbox=function(){return c("flexWrap")},A.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},A.canvastext=function(){return!!f.canvas&&!!s(t.createElement("canvas").getContext("2d").fillText,"function")},A.webgl=function(){return!!e.WebGLRenderingContext},A.touch=function(){var i;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?i=!0:M(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){i=9===e.offsetTop}),i},A.geolocation=function(){return"geolocation"in navigator},A.postmessage=function(){return!!e.postMessage},A.websqldatabase=function(){return!!e.openDatabase},A.indexedDB=function(){return!!c("indexedDB",e)},A.hashchange=function(){return D("hashchange",e)&&(t.documentMode===i||t.documentMode>7)},A.history=function(){return!!e.history&&!!history.pushState},A.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},A.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},A.rgba=function(){return n("background-color:rgba(150,255,150,.5)"),r(b.backgroundColor,"rgba")},A.hsla=function(){return n("background-color:hsla(120,40%,100%,.5)"),r(b.backgroundColor,"rgba")||r(b.backgroundColor,"hsla")},A.multiplebgs=function(){return n("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},A.backgroundsize=function(){return c("backgroundSize")},A.borderimage=function(){return c("borderImage")},A.borderradius=function(){return c("borderRadius")},A.boxshadow=function(){return c("boxShadow")},A.textshadow=function(){return""===t.createElement("div").style.textShadow},A.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},A.cssanimations=function(){return c("animationName")},A.csscolumns=function(){return c("columnCount")},A.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return n((e+"-webkit- ".split(" ").join(t+e)+C.join(i+e)).slice(0,-e.length)),r(b.backgroundImage,"gradient")},A.cssreflections=function(){return c("boxReflect")},A.csstransforms=function(){return!!c("transform")},A.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in m.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},A.csstransitions=function(){return c("transition")},A.fontface=function(){var e;return M('@font-face {font-family:"font";src:url("https://")}',function(i,n){var o=t.getElementById("smodernizr"),s=o.sheet||o.styleSheet,r=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"";e=/src/i.test(r)&&0===r.indexOf(n.split(" ")[0])}),e},A.generatedcontent=function(){var e;return M(['#modernizr:after{content:"',x,'";visibility:hidden}'].join(""),function(t){e=t.offsetHeight>=1}),e},A.video=function(){var e=t.createElement("video"),i=!1;try{(i=!!e.canPlayType)&&(i=new Boolean(i),i.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),i.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),i.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(n){}return i},A.audio=function(){var e=t.createElement("audio"),i=!1;try{(i=!!e.canPlayType)&&(i=new Boolean(i),i.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),i.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),i.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),i.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return i},A.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},A.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},A.webworkers=function(){return!!e.Worker},A.applicationcache=function(){return!!e.applicationCache},A.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect},A.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==E.svg},A.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test($.call(t.createElementNS(E.svg,"animate")))},A.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test($.call(t.createElementNS(E.svg,"clipPath")))};for(var L in A)h(A,L)&&(u=L.toLowerCase(),f[u]=A[L](),j.push((f[u]?"":"no-")+u));return f.input||d(),f.addTest=function(e,t){if("object"==typeof e)for(var n in e)h(e,n)&&f.addTest(n,e[n]);else{if(e=e.toLowerCase(),f[e]!==i)return f;t="function"==typeof t?t():t,g&&(m.className+=" "+(t?"":"no-")+e),f[e]=t}return f},n(""),y=w=null,function(e,t){function i(e,t){var i=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return i.innerHTML="x<style>"+t+"</style>",n.insertBefore(i.lastChild,n.firstChild)}function n(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=m[e[f]];return t||(t={},g++,e[f]=g,m[g]=t),t}function s(e,i,n){if(i||(i=t),d)return i.createElement(e);n||(n=o(i));var s;return s=n.cache[e]?n.cache[e].cloneNode():p.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),s.canHaveChildren&&!h.test(e)?n.frag.appendChild(s):s}function r(e,i){if(e||(e=t),d)return e.createDocumentFragment();i=i||o(e);for(var s=i.frag.cloneNode(),r=0,a=n(),l=a.length;l>r;r++)s.createElement(a[r]);return s}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(i){return v.shivMethods?s(i,e,t):t.createElem(i)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function l(e){e||(e=t);var n=o(e);return v.shivCSS&&!c&&!n.hasCSS&&(n.hasCSS=!!i(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),d||a(e,n),e}var c,d,u=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f="_html5shiv",g=0,m={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(i){c=!0,d=!0}}();var v={elements:u.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:u.shivCSS!==!1,supportsUnknownElements:d,shivMethods:u.shivMethods!==!1,type:"default",shivDocument:l,createElement:s,createDocumentFragment:r};e.html5=v,l(t)}(this,t),f._version=p,f._prefixes=C,f._domPrefixes=S,f._cssomPrefixes=k,f.mq=q,f.hasEvent=D,f.testProp=function(e){return a([e])},f.testAllProps=c,f.testStyles=M,f.prefixed=function(e,t,i){return t?c(e,t,i):c(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+j.join(" "):""),f}(this,this.document),function(e,t,i){function n(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function s(){}function r(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function a(){var e=v.shift();y=1,e?e.t?f(function(){("c"==e.t?h.injectCss:h.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),a()):y=0}function l(e,i,n,o,s,l,c){function d(t){if(!p&&r(u.readyState)&&(b.r=p=1,!y&&a(),u.onload=u.onreadystatechange=null,t)){"img"!=e&&f(function(){x.removeChild(u)},50);for(var n in S[i])S[i].hasOwnProperty(n)&&S[i][n].onload()}}var c=c||h.errorTimeout,u={},p=0,m=0,b={t:n,s:i,e:s,a:l,x:c};1===S[i]&&(m=1,S[i]=[],u=t.createElement(e)),"object"==e?u.data=i:(u.src=i,u.type=e),u.width=u.height="0",u.onerror=u.onload=u.onreadystatechange=function(){d.call(this,m)},v.splice(o,0,b),"img"!=e&&(m||2===S[i]?(x.insertBefore(u,w?null:g),f(d,c)):S[i].push(u))}function c(e,t,i,n,s){return y=0,t=t||"j",o(e)?l("c"==t?C:$,e,t,this.i++,i,n,s):(v.splice(this.i++,0,e),1==v.length&&a()),this}function d(){var e=h;return e.loader={load:c,i:0},e}var u,h,p=t.documentElement,f=e.setTimeout,g=t.getElementsByTagName("script")[0],m={}.toString,v=[],y=0,b="MozAppearance"in p.style,w=b&&!!t.createRange().compareNode,x=w?p:g.parentNode,p=e.opera&&"[object Opera]"==m.call(e.opera),p=!!t.attachEvent&&!p,$=b?"object":p?"script":"img",C=p?"script":$,T=Array.isArray||function(e){return"[object Array]"==m.call(e)},k=[],S={},E={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};h=function(e){function t(e){var t,i,n,e=e.split("!"),o=k.length,s=e.pop(),r=e.length,s={url:s,origUrl:s,prefixes:e};for(i=0;r>i;i++)n=e[i].split("="),(t=E[n.shift()])&&(s=t(s,n));for(i=0;o>i;i++)s=k[i](s);return s}function r(e,o,s,r,l){var c=t(e),u=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=n(o)?o:o[e]||o[r]||o[e.split("/").pop().split("?")[0]]||a),c.instead?c.instead(e,o,s,r,l):(S[c.url]?c.noexec=!0:S[c.url]=1,s.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":i,c.noexec,c.attrs,c.timeout),(n(o)||n(u))&&s.load(function(){d(),o&&o(c.origUrl,l,r),u&&u(c.origUrl,l,r),S[c.url]=2})))}function l(e,t){function i(e,i){if(e){if(o(e))i||(u=function(){var e=[].slice.call(arguments);h.apply(this,e),p()}),r(e,u,t,0,c);else if(Object(e)===e)for(l in a=function(){var t,i=0;for(t in e)e.hasOwnProperty(t)&&i++;return i}(),e)e.hasOwnProperty(l)&&(!i&&!--a&&(n(u)?u=function(){var e=[].slice.call(arguments);h.apply(this,e),p()}:u[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(h[l])),r(e[l],u,t,l,c))}else!i&&p()}var a,l,c=!!e.test,d=e.load||e.both,u=e.callback||s,h=u,p=e.complete||s;i(c?e.yep:e.nope,!!d),d&&i(d)}var c,u,p=this.yepnope.loader;if(o(e))r(e,0,p,0);else if(T(e))for(c=0;c<e.length;c++)u=e[c],o(u)?r(u,0,p,0):T(u)?h(u):Object(u)===u&&l(u,p);else Object(e)===e&&l(e,p)},h.addPrefix=function(e,t){E[e]=t},h.addFilter=function(e){k.push(e)},h.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",u=function(){t.removeEventListener("DOMContentLoaded",u,0),t.readyState="complete"},0)),e.yepnope=d(),e.yepnope.executeStack=a,e.yepnope.injectJs=function(e,i,n,o,l,c){var d,u,p=t.createElement("script"),o=o||h.errorTimeout;p.src=e;for(u in n)p.setAttribute(u,n[u]);i=c?a:i||s,p.onreadystatechange=p.onload=function(){!d&&r(p.readyState)&&(d=1,i(),p.onload=p.onreadystatechange=null)},f(function(){d||(d=1,i(1))},o),l?p.onload():g.parentNode.insertBefore(p,g)},e.yepnope.injectCss=function(e,i,n,o,r,l){var c,o=t.createElement("link"),i=l?a:i||s;o.href=e,o.rel="stylesheet",o.type="text/css";for(c in n)o.setAttribute(c,n[c]);r||(g.parentNode.insertBefore(o,g),f(i,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};