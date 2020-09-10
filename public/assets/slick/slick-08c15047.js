!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";var e=window.Slick||{};e=function(){function e(e,n){var o,s=this;s.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:t(e),appendDots:t(e),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,e){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(e+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},s.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},t.extend(s,s.initials),s.activeBreakpoint=null,s.animType=null,s.animProp=null,s.breakpoints=[],s.breakpointSettings=[],s.cssTransitions=!1,s.hidden="hidden",s.paused=!1,s.positionProp=null,s.respondTo=null,s.rowCount=1,s.shouldClick=!0,s.$slider=t(e),s.$slidesCache=null,s.transformType=null,s.transitionType=null,s.visibilityChange="visibilitychange",s.windowWidth=0,s.windowTimer=null,o=t(e).data("slick")||{},s.options=t.extend({},s.defaults,o,n),s.currentSlide=s.options.initialSlide,s.originalSettings=s.options,"undefined"!=typeof document.mozHidden?(s.hidden="mozHidden",s.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(s.hidden="webkitHidden",s.visibilityChange="webkitvisibilitychange"),s.autoPlay=t.proxy(s.autoPlay,s),s.autoPlayClear=t.proxy(s.autoPlayClear,s),s.changeSlide=t.proxy(s.changeSlide,s),s.clickHandler=t.proxy(s.clickHandler,s),s.selectHandler=t.proxy(s.selectHandler,s),s.setPosition=t.proxy(s.setPosition,s),s.swipeHandler=t.proxy(s.swipeHandler,s),s.dragHandler=t.proxy(s.dragHandler,s),s.keyHandler=t.proxy(s.keyHandler,s),s.autoPlayIterator=t.proxy(s.autoPlayIterator,s),s.instanceUid=i++,s.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,s.registerBreakpoints(),s.init(!0),s.checkResponsive(!0)}var i=0;return e}(),e.prototype.addSlide=e.prototype.slickAdd=function(e,i,n){var o=this;if("boolean"==typeof i)n=i,i=null;else if(0>i||i>=o.slideCount)return!1;o.unload(),"number"==typeof i?0===i&&0===o.$slides.length?t(e).appendTo(o.$slideTrack):n?t(e).insertBefore(o.$slides.eq(i)):t(e).insertAfter(o.$slides.eq(i)):n===!0?t(e).prependTo(o.$slideTrack):t(e).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each(function(e,i){t(i).attr("data-slick-index",e)}),o.$slidesCache=o.$slides,o.reinit()},e.prototype.animateHeight=function(){var t=this;if(1===t.options.slidesToShow&&t.options.adaptiveHeight===!0&&t.options.vertical===!1){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.animate({height:e},t.options.speed)}},e.prototype.animateSlide=function(e,i){var n={},o=this;o.animateHeight(),o.options.rtl===!0&&o.options.vertical===!1&&(e=-e),o.transformsEnabled===!1?o.options.vertical===!1?o.$slideTrack.animate({left:e},o.options.speed,o.options.easing,i):o.$slideTrack.animate({top:e},o.options.speed,o.options.easing,i):o.cssTransitions===!1?(o.options.rtl===!0&&(o.currentLeft=-o.currentLeft),t({animStart:o.currentLeft}).animate({animStart:e},{duration:o.options.speed,easing:o.options.easing,step:function(t){t=Math.ceil(t),o.options.vertical===!1?(n[o.animType]="translate("+t+"px, 0px)",o.$slideTrack.css(n)):(n[o.animType]="translate(0px,"+t+"px)",o.$slideTrack.css(n))},complete:function(){i&&i.call()}})):(o.applyTransition(),e=Math.ceil(e),n[o.animType]=o.options.vertical===!1?"translate3d("+e+"px, 0px, 0px)":"translate3d(0px,"+e+"px, 0px)",o.$slideTrack.css(n),i&&setTimeout(function(){o.disableTransition(),i.call()},o.options.speed))},e.prototype.asNavFor=function(e){var i=this,n=i.options.asNavFor;n&&null!==n&&(n=t(n).not(i.$slider)),null!==n&&"object"==typeof n&&n.each(function(){var i=t(this).slick("getSlick");i.unslicked||i.slideHandler(e,!0)})},e.prototype.applyTransition=function(t){var e=this,i={};i[e.transitionType]=e.options.fade===!1?e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:"opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(i):e.$slides.eq(t).css(i)},e.prototype.autoPlay=function(){var t=this;t.autoPlayTimer&&clearInterval(t.autoPlayTimer),t.slideCount>t.options.slidesToShow&&t.paused!==!0&&(t.autoPlayTimer=setInterval(t.autoPlayIterator,t.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var t=this;t.autoPlayTimer&&clearInterval(t.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var t=this;t.options.infinite===!1?1===t.direction?(t.currentSlide+1===t.slideCount-1&&(t.direction=0),t.slideHandler(t.currentSlide+t.options.slidesToScroll)):(t.currentSlide-1===0&&(t.direction=1),t.slideHandler(t.currentSlide-t.options.slidesToScroll)):t.slideHandler(t.currentSlide+t.options.slidesToScroll)},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=t(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=t(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,i,n=this;if(n.options.dots===!0&&n.slideCount>n.options.slidesToShow){for(i='<ul class="'+n.options.dotsClass+'">',e=0;e<=n.getDotCount();e+=1)i+="<li>"+n.options.customPaging.call(this,n,e)+"</li>";i+="</ul>",n.$dots=t(i).appendTo(n.options.appendDots),n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,i){t(i).attr("data-slick-index",e).data("originalStyling",t(i).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?t('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),(e.options.centerMode===!0||e.options.swipeToSlide===!0)&&(e.options.slidesToScroll=1),t("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var t,e,i,n,o,s,r,a=this;if(n=document.createDocumentFragment(),s=a.$slider.children(),a.options.rows>1){for(r=a.options.slidesPerRow*a.options.rows,o=Math.ceil(s.length/r),t=0;o>t;t++){var l=document.createElement("div");for(e=0;e<a.options.rows;e++){var c=document.createElement("div");for(i=0;i<a.options.slidesPerRow;i++){var d=t*r+(e*a.options.slidesPerRow+i);s.get(d)&&c.appendChild(s.get(d))}l.appendChild(c)}n.appendChild(l)}a.$slider.html(n),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,i){var n,o,s,r=this,a=!1,l=r.$slider.width(),c=window.innerWidth||t(window).width();if("window"===r.respondTo?s=c:"slider"===r.respondTo?s=l:"min"===r.respondTo&&(s=Math.min(c,l)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){o=null;for(n in r.breakpoints)r.breakpoints.hasOwnProperty(n)&&(r.originalSettings.mobileFirst===!1?s<r.breakpoints[n]&&(o=r.breakpoints[n]):s>r.breakpoints[n]&&(o=r.breakpoints[n]));null!==o?null!==r.activeBreakpoint?(o!==r.activeBreakpoint||i)&&(r.activeBreakpoint=o,"unslick"===r.breakpointSettings[o]?r.unslick(o):(r.options=t.extend({},r.originalSettings,r.breakpointSettings[o]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),a=o):(r.activeBreakpoint=o,"unslick"===r.breakpointSettings[o]?r.unslick(o):(r.options=t.extend({},r.originalSettings,r.breakpointSettings[o]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),a=o):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),a=o),e||a===!1||r.$slider.trigger("breakpoint",[r,a])}},e.prototype.changeSlide=function(e,i){var n,o,s,r=this,a=t(e.target);switch(a.is("a")&&e.preventDefault(),a.is("li")||(a=a.closest("li")),s=r.slideCount%r.options.slidesToScroll!==0,n=s?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":o=0===n?r.options.slidesToScroll:r.options.slidesToShow-n,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-o,!1,i);break;case"next":o=0===n?r.options.slidesToScroll:n,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+o,!1,i);break;case"index":var l=0===e.data.index?0:e.data.index||a.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(l),!1,i),a.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(t){var e,i,n=this;if(e=n.getNavigableIndexes(),i=0,t>e[e.length-1])t=e[e.length-1];else for(var o in e){if(t<e[o]){t=i;break}i=e[o]}return t},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(t("li",e.$dots).off("click.slick",e.changeSlide),e.options.pauseOnDotsHover===!0&&e.options.autoplay===!0&&t("li",e.$dots).off("mouseenter.slick",t.proxy(e.setPaused,e,!0)).off("mouseleave.slick",t.proxy(e.setPaused,e,!1))),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide)),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),t(document).off(e.visibilityChange,e.visibility),e.$list.off("mouseenter.slick",t.proxy(e.setPaused,e,!0)),e.$list.off("mouseleave.slick",t.proxy(e.setPaused,e,!1)),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&t(e.$slideTrack).children().off("click.slick",e.selectHandler),t(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),t(window).off("resize.slick.slick-"+e.instanceUid,e.resize),t("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),t(window).off("load.slick.slick-"+e.instanceUid,e.setPosition),t(document).off("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpRows=function(){var t,e=this;e.options.rows>1&&(t=e.$slides.children().children(),t.removeAttr("style"),e.$slider.html(t))},e.prototype.clickHandler=function(t){var e=this;e.shouldClick===!1&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},e.prototype.destroy=function(e){var i=this;i.autoPlayClear(),i.touchObject={},i.cleanUpEvents(),t(".slick-cloned",i.$slider).detach(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove()),i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove()),i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){t(this).attr("style",t(this).data("originalStyling"))}),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides)),i.cleanUpRows(),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.unslicked=!0,e||i.$slider.trigger("destroy",[i])},e.prototype.disableTransition=function(t){var e=this,i={};i[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(i):e.$slides.eq(t).css(i)},e.prototype.fadeSlide=function(t,e){var i=this;i.cssTransitions===!1?(i.$slides.eq(t).css({zIndex:i.options.zIndex}),i.$slides.eq(t).animate({opacity:1},i.options.speed,i.options.easing,e)):(i.applyTransition(t),i.$slides.eq(t).css({opacity:1,zIndex:i.options.zIndex}),e&&setTimeout(function(){i.disableTransition(t),e.call()},i.options.speed))},e.prototype.fadeSlideOut=function(t){var e=this;e.cssTransitions===!1?e.$slides.eq(t).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(t),e.$slides.eq(t).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(t){var e=this;null!==t&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(t).appendTo(e.$slideTrack),e.reinit())},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var t=this;return t.currentSlide},e.prototype.getDotCount=function(){var t=this,e=0,i=0,n=0;if(t.options.infinite===!0)for(;e<t.slideCount;)++n,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else if(t.options.centerMode===!0)n=t.slideCount;else for(;e<t.slideCount;)++n,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return n-1},e.prototype.getLeft=function(t){var e,i,n,o=this,s=0;return o.slideOffset=0,i=o.$slides.first().outerHeight(!0),o.options.infinite===!0?(o.slideCount>o.options.slidesToShow&&(o.slideOffset=o.slideWidth*o.options.slidesToShow*-1,s=i*o.options.slidesToShow*-1),o.slideCount%o.options.slidesToScroll!==0&&t+o.options.slidesToScroll>o.slideCount&&o.slideCount>o.options.slidesToShow&&(t>o.slideCount?(o.slideOffset=(o.options.slidesToShow-(t-o.slideCount))*o.slideWidth*-1,s=(o.options.slidesToShow-(t-o.slideCount))*i*-1):(o.slideOffset=o.slideCount%o.options.slidesToScroll*o.slideWidth*-1,s=o.slideCount%o.options.slidesToScroll*i*-1))):t+o.options.slidesToShow>o.slideCount&&(o.slideOffset=(t+o.options.slidesToShow-o.slideCount)*o.slideWidth,s=(t+o.options.slidesToShow-o.slideCount)*i),o.slideCount<=o.options.slidesToShow&&(o.slideOffset=0,s=0),o.options.centerMode===!0&&o.options.infinite===!0?o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)-o.slideWidth:o.options.centerMode===!0&&(o.slideOffset=0,o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)),e=o.options.vertical===!1?t*o.slideWidth*-1+o.slideOffset:t*i*-1+s,o.options.variableWidth===!0&&(n=o.$slideTrack.children(".slick-slide").eq(o.slideCount<=o.options.slidesToShow||o.options.infinite===!1?t:t+o.options.slidesToShow),e=o.options.rtl===!0?n[0]?-1*(o.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,o.options.centerMode===!0&&(n=o.$slideTrack.children(".slick-slide").eq(o.slideCount<=o.options.slidesToShow||o.options.infinite===!1?t:t+o.options.slidesToShow+1),e=o.options.rtl===!0?n[0]?-1*(o.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,e+=(o.$list.width()-n.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(t){var e=this;return e.options[t]},e.prototype.getNavigableIndexes=function(){var t,e=this,i=0,n=0,o=[];for(e.options.infinite===!1?t=e.slideCount:(i=-1*e.options.slidesToScroll,n=-1*e.options.slidesToScroll,t=2*e.slideCount);t>i;)o.push(i),i=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return o},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,i,n,o=this;return n=o.options.centerMode===!0?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,o.options.swipeToSlide===!0?(o.$slideTrack.find(".slick-slide").each(function(e,s){return s.offsetLeft-n+t(s).outerWidth()/2>-1*o.swipeLeft?(i=s,!1):void 0}),e=Math.abs(t(i).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(t,e){var i=this;i.changeSlide({data:{message:"index",index:parseInt(t)}},e)},e.prototype.init=function(e){var i=this;t(i.$slider).hasClass("slick-initialized")||(t(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots()),e&&i.$slider.trigger("init",[i]),i.options.accessibility===!0&&i.initADA()},e.prototype.initArrowEvents=function(){var t=this;t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.on("click.slick",{message:"previous"},t.changeSlide),t.$nextArrow.on("click.slick",{message:"next"},t.changeSlide))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&t("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.options.autoplay===!0&&t("li",e.$dots).on("mouseenter.slick",t.proxy(e.setPaused,e,!0)).on("mouseleave.slick",t.proxy(e.setPaused,e,!1))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),t(document).on(e.visibilityChange,t.proxy(e.visibility,e)),e.$list.on("mouseenter.slick",t.proxy(e.setPaused,e,!0)),e.$list.on("mouseleave.slick",t.proxy(e.setPaused,e,!1)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),t(window).on("orientationchange.slick.slick-"+e.instanceUid,t.proxy(e.orientationChange,e)),t(window).on("resize.slick.slick-"+e.instanceUid,t.proxy(e.resize,e)),t("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),t(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),t(document).on("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.initUI=function(){var t=this;t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.show(),t.$nextArrow.show()),t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&t.$dots.show(),t.options.autoplay===!0&&t.autoPlay()},e.prototype.keyHandler=function(t){var e=this;t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===t.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:"previous"}}):39===t.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:"next"}}))},e.prototype.lazyLoad=function(){function e(e){t("img[data-lazy]",e).each(function(){var e=t(this),i=t(this).attr("data-lazy"),n=document.createElement("img");n.onload=function(){e.animate({opacity:0},100,function(){e.attr("src",i).animate({opacity:1},200,function(){e.removeAttr("data-lazy").removeClass("slick-loading")})})},n.src=i})}var i,n,o,s,r=this;r.options.centerMode===!0?r.options.infinite===!0?(o=r.currentSlide+(r.options.slidesToShow/2+1),s=o+r.options.slidesToShow+2):(o=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),s=2+(r.options.slidesToShow/2+1)+r.currentSlide):(o=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,s=o+r.options.slidesToShow,r.options.fade===!0&&(o>0&&o--,s<=r.slideCount&&s++)),i=r.$slider.find(".slick-slide").slice(o,s),e(i),r.slideCount<=r.options.slidesToShow?(n=r.$slider.find(".slick-slide"),e(n)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(n=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(n)):0===r.currentSlide&&(n=r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow),e(n))},e.prototype.loadSlider=function(){var t=this;t.setPosition(),t.$slideTrack.css({opacity:1}),t.$slider.removeClass("slick-loading"),t.initUI(),"progressive"===t.options.lazyLoad&&t.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var t=this;t.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var t=this;t.checkResponsive(),t.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var t=this;t.autoPlayClear(),t.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var t=this;t.paused=!1,t.autoPlay()},e.prototype.postSlide=function(t){var e=this;e.$slider.trigger("afterChange",[e,t]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay===!0&&e.paused===!1&&e.autoPlay(),e.options.accessibility===!0&&e.initADA()},e.prototype.prev=e.prototype.slickPrev=function(){var t=this;t.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(t){t.preventDefault()},e.prototype.progressiveLazyLoad=function(){var e,i,n=this;e=t("img[data-lazy]",n.$slider).length,e>0&&(i=t("img[data-lazy]",n.$slider).first(),i.attr("src",null),i.attr("src",i.attr("data-lazy")).removeClass("slick-loading").load(function(){i.removeAttr("data-lazy"),n.progressiveLazyLoad(),n.options.adaptiveHeight===!0&&n.setPosition()}).error(function(){i.removeAttr("data-lazy"),n.progressiveLazyLoad()}))},e.prototype.refresh=function(e){var i,n,o=this;n=o.slideCount-o.options.slidesToShow,o.options.infinite||(o.slideCount<=o.options.slidesToShow?o.currentSlide=0:o.currentSlide>n&&(o.currentSlide=n)),i=o.currentSlide,o.destroy(!0),t.extend(o,o.initials,{currentSlide:i}),o.init(),e||o.changeSlide({data:{message:"index",index:i}},!1)},e.prototype.registerBreakpoints=function(){var e,i,n,o=this,s=o.options.responsive||null;if("array"===t.type(s)&&s.length){o.respondTo=o.options.respondTo||"window";for(e in s)if(n=o.breakpoints.length-1,i=s[e].breakpoint,s.hasOwnProperty(e)){for(;n>=0;)o.breakpoints[n]&&o.breakpoints[n]===i&&o.breakpoints.splice(n,1),n--;o.breakpoints.push(i),o.breakpointSettings[i]=s[e].settings}o.breakpoints.sort(function(t,e){return o.options.mobileFirst?t-e:e-t})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses(0),e.setPosition(),e.$slider.trigger("reInit",[e]),e.options.autoplay===!0&&e.focusHandler()},e.prototype.resize=function(){var e=this;t(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=t(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(t,e,i){var n=this;return"boolean"==typeof t?(e=t,t=e===!0?0:n.slideCount-1):t=e===!0?--t:t,n.slideCount<1||0>t||t>n.slideCount-1?!1:(n.unload(),i===!0?n.$slideTrack.children().remove():n.$slideTrack.children(this.options.slide).eq(t).remove(),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slidesCache=n.$slides,void n.reinit())},e.prototype.setCSS=function(t){var e,i,n=this,o={};n.options.rtl===!0&&(t=-t),e="left"==n.positionProp?Math.ceil(t)+"px":"0px",i="top"==n.positionProp?Math.ceil(t)+"px":"0px",o[n.positionProp]=t,n.transformsEnabled===!1?n.$slideTrack.css(o):(o={},n.cssTransitions===!1?(o[n.animType]="translate("+e+", "+i+")",n.$slideTrack.css(o)):(o[n.animType]="translate3d("+e+", "+i+", 0px)",n.$slideTrack.css(o)))},e.prototype.setDimensions=function(){var t=this;t.options.vertical===!1?t.options.centerMode===!0&&t.$list.css({padding:"0px "+t.options.centerPadding}):(t.$list.height(t.$slides.first().outerHeight(!0)*t.options.slidesToShow),t.options.centerMode===!0&&t.$list.css({padding:t.options.centerPadding+" 0px"})),t.listWidth=t.$list.width(),t.listHeight=t.$list.height(),t.options.vertical===!1&&t.options.variableWidth===!1?(t.slideWidth=Math.ceil(t.listWidth/t.options.slidesToShow),t.$slideTrack.width(Math.ceil(t.slideWidth*t.$slideTrack.children(".slick-slide").length))):t.options.variableWidth===!0?t.$slideTrack.width(5e3*t.slideCount):(t.slideWidth=Math.ceil(t.listWidth),t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0)*t.$slideTrack.children(".slick-slide").length)));var e=t.$slides.first().outerWidth(!0)-t.$slides.first().width();t.options.variableWidth===!1&&t.$slideTrack.children(".slick-slide").width(t.slideWidth-e)},e.prototype.setFade=function(){var e,i=this;i.$slides.each(function(n,o){e=i.slideWidth*n*-1,t(o).css(i.options.rtl===!0?{position:"relative",right:e,top:0,zIndex:i.options.zIndex-2,opacity:0}:{position:"relative",left:e,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var t=this;if(1===t.options.slidesToShow&&t.options.adaptiveHeight===!0&&t.options.vertical===!1){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(e,i,n){var o,s,r=this;if("responsive"===e&&"array"===t.type(i))for(s in i)if("array"!==t.type(r.options.responsive))r.options.responsive=[i[s]];else{for(o=r.options.responsive.length-1;o>=0;)r.options.responsive[o].breakpoint===i[s].breakpoint&&r.options.responsive.splice(o,1),o--;r.options.responsive.push(i[s])}else r.options[e]=i;n===!0&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var t=this;t.setDimensions(),t.setHeight(),t.options.fade===!1?t.setCSS(t.getLeft(t.currentSlide)):t.setFade(),t.$slider.trigger("setPosition",[t])},e.prototype.setProps=function(){var t=this,e=document.body.style;t.positionProp=t.options.vertical===!0?"top":"left","top"===t.positionProp?t.$slider.addClass("slick-vertical"):t.$slider.removeClass("slick-vertical"),(void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.msTransition)&&t.options.useCSS===!0&&(t.cssTransitions=!0),t.options.fade&&("number"==typeof t.options.zIndex?t.options.zIndex<3&&(t.options.zIndex=3):t.options.zIndex=t.defaults.zIndex),void 0!==e.OTransform&&(t.animType="OTransform",t.transformType="-o-transform",t.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.MozTransform&&(t.animType="MozTransform",t.transformType="-moz-transform",t.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(t.animType=!1)),void 0!==e.webkitTransform&&(t.animType="webkitTransform",t.transformType="-webkit-transform",t.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.msTransform&&(t.animType="msTransform",t.transformType="-ms-transform",t.transitionType="msTransition",void 0===e.msTransform&&(t.animType=!1)),void 0!==e.transform&&t.animType!==!1&&(t.animType="transform",t.transformType="transform",t.transitionType="transition"),t.transformsEnabled=t.options.useTransform&&null!==t.animType&&t.animType!==!1},e.prototype.setSlideClasses=function(t){var e,i,n,o,s=this;i=s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),s.$slides.eq(t).addClass("slick-current"),s.options.centerMode===!0?(e=Math.floor(s.options.slidesToShow/2),s.options.infinite===!0&&(t>=e&&t<=s.slideCount-1-e?s.$slides.slice(t-e,t+e+1).addClass("slick-active").attr("aria-hidden","false"):(n=s.options.slidesToShow+t,i.slice(n-e+1,n+e+2).addClass("slick-active").attr("aria-hidden","false")),0===t?i.eq(i.length-1-s.options.slidesToShow).addClass("slick-center"):t===s.slideCount-1&&i.eq(s.options.slidesToShow).addClass("slick-center")),s.$slides.eq(t).addClass("slick-center")):t>=0&&t<=s.slideCount-s.options.slidesToShow?s.$slides.slice(t,t+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=s.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(o=s.slideCount%s.options.slidesToShow,n=s.options.infinite===!0?s.options.slidesToShow+t:t,s.options.slidesToShow==s.options.slidesToScroll&&s.slideCount-t<s.options.slidesToShow?i.slice(n-(s.options.slidesToShow-o),n+o).addClass("slick-active").attr("aria-hidden","false"):i.slice(n,n+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===s.options.lazyLoad&&s.lazyLoad()},e.prototype.setupInfinite=function(){var e,i,n,o=this;if(o.options.fade===!0&&(o.options.centerMode=!1),o.options.infinite===!0&&o.options.fade===!1&&(i=null,o.slideCount>o.options.slidesToShow)){for(n=o.options.centerMode===!0?o.options.slidesToShow+1:o.options.slidesToShow,e=o.slideCount;e>o.slideCount-n;e-=1)i=e-1,t(o.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(e=0;n>e;e+=1)i=e,t(o.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each(function(){t(this).attr("id","")})}},e.prototype.setPaused=function(t){var e=this;e.options.autoplay===!0&&e.options.pauseOnHover===!0&&(e.paused=t,t?e.autoPlayClear():e.autoPlay())},e.prototype.selectHandler=function(e){var i=this,n=t(e.target).is(".slick-slide")?t(e.target):t(e.target).parents(".slick-slide"),o=parseInt(n.attr("data-slick-index"));return o||(o=0),i.slideCount<=i.options.slidesToShow?(i.setSlideClasses(o),void i.asNavFor(o)):void i.slideHandler(o)},e.prototype.slideHandler=function(t,e,i){var n,o,s,r,a=null,l=this;return e=e||!1,l.animating===!0&&l.options.waitForAnimate===!0||l.options.fade===!0&&l.currentSlide===t||l.slideCount<=l.options.slidesToShow?void 0:(e===!1&&l.asNavFor(t),n=t,a=l.getLeft(n),r=l.getLeft(l.currentSlide),l.currentLeft=null===l.swipeLeft?r:l.swipeLeft,l.options.infinite===!1&&l.options.centerMode===!1&&(0>t||t>l.getDotCount()*l.options.slidesToScroll)?void(l.options.fade===!1&&(n=l.currentSlide,i!==!0?l.animateSlide(r,function(){l.postSlide(n)}):l.postSlide(n))):l.options.infinite===!1&&l.options.centerMode===!0&&(0>t||t>l.slideCount-l.options.slidesToScroll)?void(l.options.fade===!1&&(n=l.currentSlide,i!==!0?l.animateSlide(r,function(){l.postSlide(n)}):l.postSlide(n))):(l.options.autoplay===!0&&clearInterval(l.autoPlayTimer),o=0>n?l.slideCount%l.options.slidesToScroll!==0?l.slideCount-l.slideCount%l.options.slidesToScroll:l.slideCount+n:n>=l.slideCount?l.slideCount%l.options.slidesToScroll!==0?0:n-l.slideCount:n,l.animating=!0,l.$slider.trigger("beforeChange",[l,l.currentSlide,o]),s=l.currentSlide,l.currentSlide=o,l.setSlideClasses(l.currentSlide),l.updateDots(),l.updateArrows(),l.options.fade===!0?(i!==!0?(l.fadeSlideOut(s),l.fadeSlide(o,function(){l.postSlide(o)})):l.postSlide(o),void l.animateHeight()):void(i!==!0?l.animateSlide(a,function(){l.postSlide(o)}):l.postSlide(o))))},e.prototype.startLoad=function(){var t=this;
t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.hide(),t.$nextArrow.hide()),t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&t.$dots.hide(),t.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var t,e,i,n,o=this;return t=o.touchObject.startX-o.touchObject.curX,e=o.touchObject.startY-o.touchObject.curY,i=Math.atan2(e,t),n=Math.round(180*i/Math.PI),0>n&&(n=360-Math.abs(n)),45>=n&&n>=0?o.options.rtl===!1?"left":"right":360>=n&&n>=315?o.options.rtl===!1?"left":"right":n>=135&&225>=n?o.options.rtl===!1?"right":"left":o.options.verticalSwiping===!0?n>=35&&135>=n?"left":"right":"vertical"},e.prototype.swipeEnd=function(){var t,e=this;if(e.dragging=!1,e.shouldClick=e.touchObject.swipeLength>10?!1:!0,void 0===e.touchObject.curX)return!1;if(e.touchObject.edgeHit===!0&&e.$slider.trigger("edge",[e,e.swipeDirection()]),e.touchObject.swipeLength>=e.touchObject.minSwipe)switch(e.swipeDirection()){case"left":t=e.options.swipeToSlide?e.checkNavigable(e.currentSlide+e.getSlideCount()):e.currentSlide+e.getSlideCount(),e.slideHandler(t),e.currentDirection=0,e.touchObject={},e.$slider.trigger("swipe",[e,"left"]);break;case"right":t=e.options.swipeToSlide?e.checkNavigable(e.currentSlide-e.getSlideCount()):e.currentSlide-e.getSlideCount(),e.slideHandler(t),e.currentDirection=1,e.touchObject={},e.$slider.trigger("swipe",[e,"right"])}else e.touchObject.startX!==e.touchObject.curX&&(e.slideHandler(e.currentSlide),e.touchObject={})},e.prototype.swipeHandler=function(t){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&-1!==t.type.indexOf("mouse")))switch(e.touchObject.fingerCount=t.originalEvent&&void 0!==t.originalEvent.touches?t.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),t.data.action){case"start":e.swipeStart(t);break;case"move":e.swipeMove(t);break;case"end":e.swipeEnd(t)}},e.prototype.swipeMove=function(t){var e,i,n,o,s,r=this;return s=void 0!==t.originalEvent?t.originalEvent.touches:null,!r.dragging||s&&1!==s.length?!1:(e=r.getLeft(r.currentSlide),r.touchObject.curX=void 0!==s?s[0].pageX:t.clientX,r.touchObject.curY=void 0!==s?s[0].pageY:t.clientY,r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curX-r.touchObject.startX,2))),r.options.verticalSwiping===!0&&(r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curY-r.touchObject.startY,2)))),i=r.swipeDirection(),"vertical"!==i?(void 0!==t.originalEvent&&r.touchObject.swipeLength>4&&t.preventDefault(),o=(r.options.rtl===!1?1:-1)*(r.touchObject.curX>r.touchObject.startX?1:-1),r.options.verticalSwiping===!0&&(o=r.touchObject.curY>r.touchObject.startY?1:-1),n=r.touchObject.swipeLength,r.touchObject.edgeHit=!1,r.options.infinite===!1&&(0===r.currentSlide&&"right"===i||r.currentSlide>=r.getDotCount()&&"left"===i)&&(n=r.touchObject.swipeLength*r.options.edgeFriction,r.touchObject.edgeHit=!0),r.swipeLeft=r.options.vertical===!1?e+n*o:e+n*(r.$list.height()/r.listWidth)*o,r.options.verticalSwiping===!0&&(r.swipeLeft=e+n*o),r.options.fade===!0||r.options.touchMove===!1?!1:r.animating===!0?(r.swipeLeft=null,!1):void r.setCSS(r.swipeLeft)):void 0)},e.prototype.swipeStart=function(t){var e,i=this;return 1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow?(i.touchObject={},!1):(void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(e=t.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==e?e.pageX:t.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==e?e.pageY:t.clientY,void(i.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var t=this;null!==t.$slidesCache&&(t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.appendTo(t.$slideTrack),t.reinit())},e.prototype.unload=function(){var e=this;t(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(t){var e=this;e.$slider.trigger("unslick",[e,t]),e.destroy()},e.prototype.updateArrows=function(){var t,e=this;t=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var t=this;null!==t.$dots&&(t.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),t.$dots.find("li").eq(Math.floor(t.currentSlide/t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},e.prototype.visibility=function(){var t=this;document[t.hidden]?(t.paused=!0,t.autoPlayClear()):t.options.autoplay===!0&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this;e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),e.$slideTrack.attr("role","listbox"),e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i){t(this).attr({role:"option","aria-describedby":"slick-slide"+e.instanceUid+i})}),null!==e.$dots&&e.$dots.attr("role","tablist").find("li").each(function(i){t(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+e.instanceUid+i,id:"slick-slide"+e.instanceUid+i})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),e.activateADA()},e.prototype.activateADA=function(){var t=this;t.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.focusHandler=function(){var e=this;e.$slider.on("focus.slick blur.slick","*",function(i){i.stopImmediatePropagation();var n=t(this);setTimeout(function(){e.isPlay&&(n.is(":focus")?(e.autoPlayClear(),e.paused=!0):(e.paused=!1,e.autoPlay()))},0)})},t.fn.slick=function(){var t,i,n=this,o=arguments[0],s=Array.prototype.slice.call(arguments,1),r=n.length;for(t=0;r>t;t++)if("object"==typeof o||"undefined"==typeof o?n[t].slick=new e(n[t],o):i=n[t].slick[o].apply(n[t].slick,s),"undefined"!=typeof i)return i;return n}});