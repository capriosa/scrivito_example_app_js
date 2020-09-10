/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.1.0
 * Author  : _nK http://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){Date.now||(Date.now=function(){return(new Date).getTime()}),window.requestAnimationFrame||function(){"use strict";for(var e=["webkit","moz"],t=0;t<e.length&&!window.requestAnimationFrame;++t){var i=e[t];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(e){var t=Date.now(),i=Math.max(n+16,t);return setTimeout(function(){e(n=i)},i-t)},window.cancelAnimationFrame=clearTimeout}}();var t=function(){for(var e="transform WebkitTransform MozTransform OTransform msTransform".split(" "),t=document.createElement("div"),i=0;i<e.length;i++)if(t&&void 0!==t.style[e[i]])return e[i];return!1}(),i=function(){if(!window.getComputedStyle)return!1;var e,t=document.createElement("p"),i={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};(document.body||document.documentElement).insertBefore(t,null);for(var n in i)void 0!==t.style[n]&&(t.style[n]="translate3d(1px,1px,1px)",e=window.getComputedStyle(t).getPropertyValue(i[n]));return(document.body||document.documentElement).removeChild(t),void 0!==e&&e.length>0&&"none"!==e}(),n=navigator.userAgent.toLowerCase().indexOf("android")>-1,o=!!window.opera,r=[],s=function(){function t(t,s){var a,l=this;l.$item=e(t),l.defaults={speed:.5,imgSrc:null,imgWidth:null,imgHeight:null,enableTransform:!0,zIndex:-100},a=l.$item.data("jarallax")||{},l.options=e.extend({},l.defaults,a,s),l.options.speed=Math.min(1,Math.max(0,parseFloat(l.options.speed))),l.instanceID=i++,l.image={src:l.options.imgSrc||null,$container:null,$item:null,width:l.options.imgWidth||null,height:l.options.imgHeight||null,useImgTag:n||o},l.initImg()&&(l.init(),r.push(l))}var i=0;return t}();s.prototype.initImg=function(){var e=this;return null===e.image.src&&(e.image.src=e.$item.css("background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),e.image.src&&"none"!==e.image.src?!0:!1},s.prototype.init=function(){function i(){n.coverImage(),n.clipContainer(),n.onScroll(!0),n.$item.data("jarallax-original-styles",n.$item.attr("style")),setTimeout(function(){n.$item.css({"background-image":"none","background-attachment":"scroll","background-size":"auto"})},0)}var n=this,o={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden","pointer-events":"none",transition:"transform linear -1ms, -webkit-transform linear -1ms"},r={position:"fixed"};n.image.$container=e("<div>").css(o).css({visibility:"hidden","z-index":n.options.zIndex}).attr("id","jarallax-container-"+n.instanceID).prependTo(n.$item),n.image.useImgTag&&t?(n.image.$item=e("<img>").attr("src",n.image.src),r=e.extend({"max-width":"none"},o,r)):(n.image.$item=e("<div>"),r=e.extend({"background-position":"50% 50%","background-repeat":"no-repeat no-repeat","background-image":'url("'+n.image.src+'")'},o,r)),n.image.$item.css(r).prependTo(n.image.$container),n.image.width&&n.image.height?i():n.getImageSize(n.image.src,function(e,t){n.image.width=e,n.image.height=t,i()})},s.prototype.destroy=function(){for(var t=this,i=0,n=r.length;n>i;i++)if(r[i].instanceID===t.instanceID){r.splice(i,1);break}e("head #jarallax-clip-"+t.instanceID).remove(),t.$item.attr("style",t.$item.data("jarallax-original-styles")),t.$item.removeData("jarallax-original-styles"),t.image.$container.remove(),delete t.$item[0].jarallax},s.prototype.round=function(e){return Math.floor(100*e)/100},s.prototype.getImageSize=function(e,t){if(!e||!t)return!1;var i=new Image;i.onload=function(){t(i.width,i.height)},i.src=e},s.prototype.clipContainer=function(){var t=this,i=t.image.$container.outerWidth(!0),n=t.image.$container.outerHeight(!0),o=e("head #jarallax-clip-"+t.instanceID);o.length||(e("head").append('<style type="text/css" id="jarallax-clip-'+t.instanceID+'"></style>'),o=e("head #jarallax-clip-"+t.instanceID));var r=["#jarallax-container-"+t.instanceID+" {","   clip: rect(0px "+i+"px "+n+"px 0);","   clip: rect(0px, "+i+"px, "+n+"px, 0);","}"].join("\n");o[0].styleSheet?o[0].styleSheet.cssText=r:o.html(r)},s.prototype.coverImage=function(){var i=this;if(i.image.width&&i.image.height){var n,o,r=i.image.$container.outerWidth(!0),s=i.image.$container.outerHeight(!0),a=e(window).outerWidth(!0),l=e(window).outerHeight(!0),c=i.image.width,u=i.image.height,d={width:Math.max(a,r)*Math.max(i.options.speed,1),height:Math.max(l,s)*Math.max(i.options.speed,1)};d.width/d.height>c/u?(n=d.width,o=d.width*u/c):(n=d.height*c/u,o=d.height),i.image.useImgTag&&t?(d.width=i.round(n),d.height=i.round(o),d.marginLeft=i.round(-(n-r)/2),d.marginTop=i.round(-(o-s)/2)):d.backgroundSize=i.round(n)+"px "+i.round(o)+"px",i.image.$item.css(d)}},s.prototype.onScroll=function(n){var o=this;if(o.image.width&&o.image.height){var r=e(window).scrollTop(),s=e(window).scrollLeft(),a=(e(window).width(),e(window).height()),l=o.$item.offset().top,c=o.$item.offset().left,u=o.$item.outerHeight(!0),d={visibility:"visible",backgroundPosition:"50% 50%"},h=n?!1:r>l+u||l>r+a;if(!h){var p=-(r-l)*o.options.speed,f=-(s-c)*o.options.speed;p=o.round(p),f=o.round(f),t&&o.options.enableTransform?(d.transform="translateY("+p+"px) translateX("+f+"px)",i&&(d.transform="translate3d("+f+"px, "+p+"px, 0)")):d.backgroundPosition=f+"px "+p+"px",o.image.$item.css(d)}}},function(){e(window).on("scroll.jarallax",function(){window.requestAnimationFrame(function(){for(var e=0,t=r.length;t>e;e++)r[e].onScroll()})});var t;e(window).on("resize.jarallax orientationchange.jarallax load.jarallax",function(){clearTimeout(t),t=setTimeout(function(){window.requestAnimationFrame(function(){for(var e=0,t=r.length;t>e;e++){var i=r[e];i.coverImage(),i.clipContainer(),i.onScroll()}})},100)})}();var a=e.fn.jarallax;e.fn.jarallax=function(){var e,t=this,i=arguments[0],n=Array.prototype.slice.call(arguments,1),o=t.length,r=0;for(r;o>r;r++)if("object"==typeof i||"undefined"==typeof i?t[r].jarallax||(t[r].jarallax=new s(t[r],i)):e=t[r].jarallax?t[r].jarallax[i].apply(t[r].jarallax,n):void 0,"undefined"!=typeof e)return e;return this},e.fn.jarallax.noConflict=function(){return e.fn.jarallax=a,this},e(document).on("ready.data-jarallax",function(){e("[data-jarallax]").jarallax()})});