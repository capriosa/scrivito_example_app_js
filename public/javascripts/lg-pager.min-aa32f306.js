/*! lightgallery - v1.2.21 - 2016-06-28
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
!function(e){"use strict";var t={pager:!1},i=function(i){return this.core=e(i).data("lightGallery"),this.$el=e(i),this.core.s=e.extend({},t,this.core.s),this.core.s.pager&&this.core.$items.length>1&&this.init(),this};i.prototype.init=function(){var t,i,n,o=this,r="";if(o.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'),o.core.s.dynamic)for(var s=0;s<o.core.s.dynamicEl.length;s++)r+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+o.core.s.dynamicEl[s].thumb+'" /></div></span>';else o.core.$items.each(function(){r+=o.core.s.exThumbImage?'<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e(this).attr(o.core.s.exThumbImage)+'" /></div></span>':'<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e(this).find("img").attr("src")+'" /></div></span>'});i=o.core.$outer.find(".lg-pager-outer"),i.html(r),t=o.core.$outer.find(".lg-pager-cont"),t.on("click.lg touchend.lg",function(){var t=e(this);o.core.index=t.index(),o.core.slide(o.core.index,!1,!1)}),i.on("mouseover.lg",function(){clearTimeout(n),i.addClass("lg-pager-hover")}),i.on("mouseout.lg",function(){n=setTimeout(function(){i.removeClass("lg-pager-hover")})}),o.core.$el.on("onBeforeSlide.lg.tm",function(e,i,n){t.removeClass("lg-pager-active"),t.eq(n).addClass("lg-pager-active")})},i.prototype.destroy=function(){},e.fn.lightGallery.modules.pager=i}(jQuery,window,document);