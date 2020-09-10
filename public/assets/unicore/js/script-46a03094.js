!function($){$.extend($.easing,{easeInOutCubic:function(e,t,i,n,o){return(t/=o/2)<1?n/2*t*t*t+i:n/2*((t-=2)*t*t+2)+i}}),$.fn.outerFind=function(e){return this.find(e).addBack(e)},function(e,t){var i=function(e,t,i){var n;return function(){function o(){i||e.apply(s,r),n=null}var s=this,r=arguments;n?clearTimeout(n):i&&e.apply(s,r),n=setTimeout(o,t||100)}};jQuery.fn[t]=function(e){return e?this.bind("resize",i(e)):this.trigger(t)}}(jQuery,"smartresize"),$.isMobile=function(e){var t=[],i={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};return e="undefined"==$.type(e)?"*":e.toLowerCase(),"*"==e?t=$.map(i,function(e){return e}):e in i&&t.push(i[e]),!(!t.length||!navigator.userAgent.match(new RegExp(t.join("|"),"i")))};var isSupportViewportUnits=function(){var e=$('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),t=e[0],i=parseInt(window.innerHeight/2,10),n=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);return e.remove(),n==i}();$(function(){function calculate16by9(){$(this).css("height",9*$(this).parent().width()/16)}$("html").addClass($.isMobile()?"mobile":"desktop"),$(window).scroll(function(){$(".mbr-navbar--sticky").each(function(){var e=$(window).scrollTop()>10?"addClass":"removeClass";$(this)[e]("mbr-navbar--stuck").not(".mbr-navbar--open")[e]("mbr-navbar--short")})}),$(document).on("add.cards",function(e){if((0!=$(e.target).find(".parallax").length||0!=$(e.target).find(".testimonials4").length)&&($.stellar({horizontalOffset:50,verticalOffset:50,responsive:!0}),$.stellar("refresh")),0!=$(e.target).find(".testimonials2").length||0!=$(e.target).find(".testimonials4").length){var t=$(e.target).attr("id");$(e.target).find("."+t).slick({arrows:!1,autoplay:!1,dots:!0})}else if(0!=$(e.target).find(".testimonials3").length){var t=$(e.target).attr("id");$(e.target).find("."+t).slick({dots:!0,infinite:!0,arrows:!1,speed:300,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}}),$(document).on("add.cards change.cards",function(e){$(e.target).outerFind(".mbr-hamburger:not(.mbr-added)").each(function(){$(this).addClass("mbr-added").click(function(){$(this).toggleClass("mbr-hamburger--open").parents(".mbr-navbar").toggleClass("mbr-navbar--open").removeClass("mbr-navbar--short")}).parents(".mbr-navbar").find("a:not(.mbr-hamburger)").click(function(){$(".mbr-hamburger--open").click()})})}),$(window).smartresize(function(){$(window).width()>991&&$(".mbr-navbar--auto-collapse .mbr-hamburger--open").click()}).keydown(function(e){27==e.which&&$(".mbr-hamburger--open").click()}),$.isMobile()&&navigator.userAgent.match(/Chrome/i)?!function(e,t){var i=[e,e];i[t>e?0:1]=t,$(window).smartresize(function(){var e=$(window).height();$.inArray(e,i)<0&&(e=i[$(window).width()>e?1:0]),$(".mbr-section--full-height").css("height",e+"px")})}($(window).width(),$(window).height()):isSupportViewportUnits||($(window).smartresize(function(){$(".mbr-section--full-height").css("height",$(window).height()+"px")}),$(document).on("add.cards",function(e){$("html").hasClass("mbr-site-loaded")&&$(e.target).outerFind(".mbr-section--full-height").length&&$(window).resize()})),$(window).smartresize(function(){$(".mbr-section--16by9").each(calculate16by9)}),$(document).on("add.cards change.cards",function(e){var t=$(e.target).outerFind(".mbr-section--16by9");t.length?t.attr("data-16by9","true").each(calculate16by9):$(e.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")}),$.fn.jarallax&&!$.isMobile()&&($(document).on("destroy.parallax",function(e){$(e.target).outerFind(".mbr-parallax-background").jarallax("destroy").css("position","")}),$(document).on("add.cards change.cards",function(e){$(e.target).outerFind(".mbr-parallax-background").jarallax().css("position","relative")})),$.fn.socialLikes&&$(document).on("add.cards",function(e){$(e.target).outerFind(".mbr-social-likes:not(.mbr-added)").on("counter.social-likes",function(e,t,i){i>999&&$(".social-likes__counter",e.target).html(Math.floor(i/1e3)+"k")}).socialLikes({initHtml:!1})});var fixedTopTimeout,scrollTimeout,prevScrollTop=0,fixedTop=null,isDesktop=!$.isMobile();$(window).scroll(function(){scrollTimeout&&clearTimeout(scrollTimeout);var e=$(window).scrollTop(),t=prevScrollTop>=e||isDesktop;if(prevScrollTop=e,fixedTop){var i=e>fixedTop.breakPoint;t?i!=fixedTop.fixed&&(isDesktop?(fixedTop.fixed=i,$(fixedTop.elm).toggleClass("is-fixed")):scrollTimeout=setTimeout(function(){fixedTop.fixed=i,$(fixedTop.elm).toggleClass("is-fixed")},40)):(fixedTop.fixed=!1,$(fixedTop.elm).removeClass("is-fixed"))}}),$(document).on("add.cards delete.cards",function(){fixedTopTimeout&&clearTimeout(fixedTopTimeout),fixedTopTimeout=setTimeout(function(){fixedTop&&(fixedTop.fixed=!1,$(fixedTop.elm).removeClass("is-fixed")),$(".mbr-fixed-top:first").each(function(){fixedTop={breakPoint:$(this).offset().top+3*$(this).height(),fixed:!1,elm:this},$(window).scroll()})},650)});var loadGoogleMap=function(){var $this=$(this),markers=[],coord=function(e){return new google.maps.LatLng(e[0],e[1])},params=$.extend({zoom:14,type:"ROADMAP",center:null,markerIcon:null,showInfo:!0},eval("("+($this.data("google-map-params")||"{}")+")"));if($this.find(".mbr-google-map__marker").each(function(){var e=$(this).data("coordinates");e&&markers.push({coord:e.split(/\s*,\s*/),icon:$(this).data("icon")||params.markerIcon,content:$(this).html(),template:$(this).html("{{content}}").removeAttr("data-coordinates data-icon")[0].outerHTML})}).end().html("").addClass("mbr-google-map--loaded"),markers.length){var map=this.Map=new google.maps.Map(this,{scrollwheel:!1,draggable:!$.isMobile(),zoom:params.zoom,mapTypeId:google.maps.MapTypeId[params.type],center:coord(params.center||markers[0].coord)});$(window).smartresize(function(){var e=map.getCenter();google.maps.event.trigger(map,"resize"),map.setCenter(e)}),map.Geocoder=new google.maps.Geocoder,map.Markers=[],$.each(markers,function(e,t){var i=new google.maps.Marker({map:map,position:coord(t.coord),icon:t.icon,animation:google.maps.Animation.DROP}),n=i.InfoWindow=new google.maps.InfoWindow;n._setContent=n.setContent,n.setContent=function(e){return this._setContent(e?t.template.replace("{{content}}",e):"")},n.setContent(t.content),google.maps.event.addListener(i,"click",function(){n.anchor&&n.anchor.visible?n.close():n.getContent()&&n.open(map,i)}),t.content&&params.showInfo&&google.maps.event.addListenerOnce(i,"animation_changed",function(){setTimeout(function(){n.open(map,i)},350)}),map.Markers.push(i)})}};$(document).on("add.cards",function(e){window.google&&google.maps&&$(e.target).outerFind(".mbr-google-map").each(function(){loadGoogleMap.call(this)})}),$(window).smartresize(function(){$(".mbr-embedded-video").each(function(){$(this).height($(this).width()*parseInt($(this).attr("height")||315)/parseInt($(this).attr("width")||560))})}),$(document).on("add.cards",function(e){$("html").hasClass("mbr-site-loaded")&&$(e.target).outerFind("iframe").length&&$(window).resize()}),$(document).on("add.cards",function(event){$(event.target).outerFind("[data-bg-video]").each(function(){for(var result,videoURL=$(this).data("bg-video"),patterns=[/\?v=([^&]+)/,/(?:embed|\.be)\/([-a-z0-9_]+)/i,/^([-a-z0-9_]+)$/i],i=0;i<patterns.length;i++)if(result=patterns[i].exec(videoURL)){var previewURL="http"+("https:"==location.protocol?"s":"")+":";previewURL+="//img.youtube.com/vi/"+result[1]+"/maxresdefault.jpg";var $img=$('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",backgroundPosition:"center"});if($(".container:eq(0)",this).before($img),$("<img>").on("load",function(){if(120==(this.naturalWidth||this.width)){var e=this.src.split("/").pop();switch(e){case"maxresdefault.jpg":this.src=this.src.replace(e,"sddefault.jpg");break;case"sddefault.jpg":this.src=this.src.replace(e,"hqdefault.jpg")}}else $img.css("background-image",'url("'+this.src+'")').show()}).attr("src",previewURL),$.fn.YTPlayer&&!$.isMobile()){var params=eval("("+($(this).data("bg-video-params")||"{}")+")");$(".container:eq(0)",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer($.extend({videoURL:result[1],containment:"self",showControls:!1,mute:!0},params))}break}})}),$("body > *:not(style, script)").trigger("add.cards"),$("html").addClass("mbr-site-loaded"),$(window).resize().scroll(),$("html").hasClass("is-builder")||$(document).click(function(e){try{var t=e.target;if($(t).parents().hasClass("accordion")||$(t).parents().hasClass("toggle"))return;do if(t.hash){var i=/#bottom|#top/g.test(t.hash);$(i?"body":t.hash).each(function(){e.preventDefault();var i=$(".mbr-navbar--sticky").length?64:0,n="#bottom"==t.hash?$(this).height()-$(window).height():$(this).offset().top-i;$("html, body").stop().animate({scrollTop:n},800,"easeInOutCubic")});break}while(t=t.parentNode)}catch(e){}})})}(jQuery),$(document).ready(function(){"use strict";0!=$(".swipebox-video").length&&$(".swipebox-video").swipebox(),$("body").on("click",".page-scroll",function(e){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-80},1500,"easeInOutExpo"),e.preventDefault()}),$("body").scrollspy({target:".navbar",offset:105}),$(window).scroll(function(){var e=$(this).scrollTop();e>80?$(".navbar-inverse").addClass("scrolled"):$(".navbar-inverse").removeClass("scrolled")}),$(".hl-point1 .trigger").on("click",function(){$(".hl-point1 .h1-point-info").toggleClass("active"),$(".hl-point2 .h1-point-info").removeClass("active"),$(".hl-point3 .h1-point-info").removeClass("active")}),$(".hl-point2 .trigger").on("click",function(){$(".hl-point2 .h1-point-info").toggleClass("active"),$(".hl-point1 .h1-point-info").removeClass("active"),$(".hl-point3 .h1-point-info").removeClass("active")}),$(".hl-point3 .trigger").on("click",function(){$(".hl-point3 .h1-point-info").toggleClass("active"),$(".hl-point2 .h1-point-info").removeClass("active"),$(".hl-point1 .h1-point-info").removeClass("active")})}),$(".btn-settings").on("click",function(){$(this).parent().toggleClass("active")}),$(".switch-handle").on("click",function(){$(this).toggleClass("active"),$("body").toggleClass("boxed")}),$(".color-list div").on("click",function(){if($(this).hasClass("active"))return!1;$("link.color-scheme-link").remove(),$(this).addClass("active").siblings().removeClass("active");var e=$(this).attr("data-src"),t=$('<link class="color-scheme-link" rel="stylesheet" />');t.attr("href",e).appendTo("head")}),$(".count").each(function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:2e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}})}),$(function(){$(".btn-circle").on("click",function(){$(".btn-circle.btn-info").removeClass("btn-info").addClass("btn-default"),$(this).addClass("btn-info").removeClass("btn-default").blur()})}),$(document).ready(function(){$(".ai-list1").hover(function(){$(".ai-slide-img-inner").addClass("ai-slide1-active"),$(".ai-slide-img-inner").removeClass("ai-slide2-active"),$(".ai-slide-img-inner").removeClass("ai-slide3-active")}),$(".ai-list2").hover(function(){$(".ai-slide-img-inner").addClass("ai-slide2-active"),$(".ai-slide-img-inner").removeClass("ai-slide1-active"),$(".ai-slide-img-inner").removeClass("ai-slide3-active")}),$(".ai-list3").hover(function(){$(".ai-slide-img-inner").addClass("ai-slide3-active"),$(".ai-slide-img-inner").removeClass("ai-slide1-active"),$(".ai-slide-img-inner").removeClass("ai-slide2-active")});{var e=$(".dropdown-menu").css("background-color");$(".simplemenu").css("background-color")}$(".nav-dropdown").css("background-color",e),$(".simplemenu").css("background-color",e),$("nav.navbar .container").css("background-color","transparent")});