/*! lightgallery - v1.2.21 - 2016-06-28
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
!function(e,t){"use strict";var i={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toogleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0},n=function(t){return this.core=e(t).data("lightGallery"),this.core.s=e.extend({},i,this.core.s),this.$el=e(t),this.$thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.left=0,this.init(),this};n.prototype.init=function(){var e=this;this.core.s.thumbnail&&this.core.$items.length>1&&(this.core.s.showThumbByDefault&&setTimeout(function(){e.core.$outer.addClass("lg-thumb-open")},700),this.core.s.pullCaptionUp&&this.core.$outer.addClass("lg-pull-caption-up"),this.build(),this.core.s.animateThumb?(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toogle(),this.thumbkeyPress())},n.prototype.build=function(){function i(e,t,i){var n,a=o.core.isVideo(e,i)||{},l="";a.youtube||a.vimeo||a.dailymotion?a.youtube?n=o.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+a.youtube[1]+"/"+o.core.s.youtubeThumbSize+".jpg":t:a.vimeo?o.core.s.loadVimeoThumbnail?(n="//i.vimeocdn.com/video/error_"+s+".jpg",l=a.vimeo[1]):n=t:a.dailymotion&&(n=o.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+a.dailymotion[1]:t):n=t,r+='<div data-vimeo-id="'+l+'" class="lg-thumb-item" style="width:'+o.core.s.thumbWidth+"px; margin-right: "+o.core.s.thumbMargin+'px"><img src="'+n+'" /></div>',l=""}var n,o=this,r="",s="",a='<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';switch(this.core.s.vimeoThumbSize){case"thumbnail_large":s="640";break;case"thumbnail_medium":s="200x150";break;case"thumbnail_small":s="100x75"}if(o.core.$outer.addClass("lg-has-thumb"),o.core.$outer.find(".lg").append(a),o.$thumbOuter=o.core.$outer.find(".lg-thumb-outer"),o.thumbOuterWidth=o.$thumbOuter.width(),o.core.s.animateThumb&&o.core.$outer.find(".lg-thumb").css({width:o.thumbTotalWidth+"px",position:"relative"}),this.core.s.animateThumb&&o.$thumbOuter.css("height",o.core.s.thumbContHeight+"px"),o.core.s.dynamic)for(var l=0;l<o.core.s.dynamicEl.length;l++)i(o.core.s.dynamicEl[l].src,o.core.s.dynamicEl[l].thumb,l);else o.core.$items.each(function(t){o.core.s.exThumbImage?i(e(this).attr("href")||e(this).attr("data-src"),e(this).attr(o.core.s.exThumbImage),t):i(e(this).attr("href")||e(this).attr("data-src"),e(this).find("img").attr("src"),t)});o.core.$outer.find(".lg-thumb").html(r),n=o.core.$outer.find(".lg-thumb-item"),n.each(function(){var t=e(this),i=t.attr("data-vimeo-id");i&&e.getJSON("//www.vimeo.com/api/v2/video/"+i+".json?callback=?",{format:"json"},function(e){t.find("img").attr("src",e[0][o.core.s.vimeoThumbSize])})}),n.eq(o.core.index).addClass("active"),o.core.$el.on("onBeforeSlide.lg.tm",function(){n.removeClass("active"),n.eq(o.core.index).addClass("active")}),n.on("click.lg touchend.lg",function(){var t=e(this);setTimeout(function(){(o.thumbClickable&&!o.core.lgBusy||!o.core.doCss())&&(o.core.index=t.index(),o.core.slide(o.core.index,!1,!0))},50)}),o.core.$el.on("onBeforeSlide.lg.tm",function(){o.animateThumb(o.core.index)}),e(t).on("resize.lg.thumb orientationchange.lg.thumb",function(){setTimeout(function(){o.animateThumb(o.core.index),o.thumbOuterWidth=o.$thumbOuter.width()},200)})},n.prototype.setTranslate=function(e){this.core.$outer.find(".lg-thumb").css({transform:"translate3d(-"+e+"px, 0px, 0px)"})},n.prototype.animateThumb=function(e){var t=this.core.$outer.find(".lg-thumb");if(this.core.s.animateThumb){var i;switch(this.core.s.currentPagerPosition){case"left":i=0;break;case"middle":i=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":i=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*e-1-i,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(t.hasClass("on")||this.core.$outer.find(".lg-thumb").css("transition-duration",this.core.s.speed+"ms"),this.core.doCss()||t.animate({left:-this.left+"px"},this.core.s.speed)):this.core.doCss()||t.css("left",-this.left+"px"),this.setTranslate(this.left)}},n.prototype.enableThumbDrag=function(){var i=this,n=0,o=0,r=!1,s=!1,a=0;i.$thumbOuter.addClass("lg-grab"),i.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb",function(e){i.thumbTotalWidth>i.thumbOuterWidth&&(e.preventDefault(),n=e.pageX,r=!0,i.core.$outer.scrollLeft+=1,i.core.$outer.scrollLeft-=1,i.thumbClickable=!1,i.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))}),e(t).on("mousemove.lg.thumb",function(e){r&&(a=i.left,s=!0,o=e.pageX,i.$thumbOuter.addClass("lg-dragging"),a-=o-n,a>i.thumbTotalWidth-i.thumbOuterWidth&&(a=i.thumbTotalWidth-i.thumbOuterWidth),0>a&&(a=0),i.setTranslate(a))}),e(t).on("mouseup.lg.thumb",function(){s?(s=!1,i.$thumbOuter.removeClass("lg-dragging"),i.left=a,Math.abs(o-n)<i.core.s.swipeThreshold&&(i.thumbClickable=!0)):i.thumbClickable=!0,r&&(r=!1,i.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))})},n.prototype.enableThumbSwipe=function(){var e=this,t=0,i=0,n=!1,o=0;e.core.$outer.find(".lg-thumb").on("touchstart.lg",function(i){e.thumbTotalWidth>e.thumbOuterWidth&&(i.preventDefault(),t=i.originalEvent.targetTouches[0].pageX,e.thumbClickable=!1)}),e.core.$outer.find(".lg-thumb").on("touchmove.lg",function(r){e.thumbTotalWidth>e.thumbOuterWidth&&(r.preventDefault(),i=r.originalEvent.targetTouches[0].pageX,n=!0,e.$thumbOuter.addClass("lg-dragging"),o=e.left,o-=i-t,o>e.thumbTotalWidth-e.thumbOuterWidth&&(o=e.thumbTotalWidth-e.thumbOuterWidth),0>o&&(o=0),e.setTranslate(o))}),e.core.$outer.find(".lg-thumb").on("touchend.lg",function(){e.thumbTotalWidth>e.thumbOuterWidth&&n?(n=!1,e.$thumbOuter.removeClass("lg-dragging"),Math.abs(i-t)<e.core.s.swipeThreshold&&(e.thumbClickable=!0),e.left=o):e.thumbClickable=!0})},n.prototype.toogle=function(){var e=this;e.core.s.toogleThumb&&(e.core.$outer.addClass("lg-can-toggle"),e.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),e.core.$outer.find(".lg-toogle-thumb").on("click.lg",function(){e.core.$outer.toggleClass("lg-thumb-open")}))},n.prototype.thumbkeyPress=function(){var i=this;e(t).on("keydown.lg.thumb",function(e){38===e.keyCode?(e.preventDefault(),i.core.$outer.addClass("lg-thumb-open")):40===e.keyCode&&(e.preventDefault(),i.core.$outer.removeClass("lg-thumb-open"))})},n.prototype.destroy=function(){this.core.s.thumbnail&&this.core.$items.length>1&&(e(t).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),this.$thumbOuter.remove(),this.core.$outer.removeClass("lg-has-thumb"))},e.fn.lightGallery.modules.Thumbnail=n}(jQuery,window,document);