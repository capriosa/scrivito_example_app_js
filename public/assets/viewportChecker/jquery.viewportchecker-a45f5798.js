/*
    The MIT License (MIT)

    Copyright (c) 2014 Dirk Groenen

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
*/
!function(e){e.fn.viewportChecker=function(t){var i={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(){},scrollHorizontal:!1,scrollBox:window};e.extend(i,t);var n=this,o={height:e(i.scrollBox).height(),width:e(i.scrollBox).width()},s=-1!=navigator.userAgent.toLowerCase().indexOf("webkit")||-1!=navigator.userAgent.toLowerCase().indexOf("windows phone")?"body":"html";return this.checkElements=function(){var t,r;i.scrollHorizontal?(t=e(s).scrollLeft(),r=t+o.width):(t=e(s).scrollTop(),r=t+o.height),n.each(function(){var n=e(this),s={},a={};if(n.data("vp-add-class")&&(a.classToAdd=n.data("vp-add-class")),n.data("vp-remove-class")&&(a.classToRemove=n.data("vp-remove-class")),n.data("vp-add-class-full-view")&&(a.classToAddForFullView=n.data("vp-add-class-full-view")),n.data("vp-keep-add-class")&&(a.removeClassAfterAnimation=n.data("vp-remove-after-animation")),n.data("vp-offset")&&(a.offset=n.data("vp-offset")),n.data("vp-repeat")&&(a.repeat=n.data("vp-repeat")),n.data("vp-scrollHorizontal")&&(a.scrollHorizontal=n.data("vp-scrollHorizontal")),n.data("vp-invertBottomOffset")&&(a.scrollHorizontal=n.data("vp-invertBottomOffset")),e.extend(s,i),e.extend(s,a),!n.data("vp-animated")||s.repeat){String(s.offset).indexOf("%")>0&&(s.offset=parseInt(s.offset)/100*o.height);var l=s.scrollHorizontal?n.offset().left:n.offset().top,c=s.scrollHorizontal?l+n.width():l+n.height(),d=Math.round(l)+s.offset,u=s.scrollHorizontal?d+n.width():d+n.height();s.invertBottomOffset&&(u-=2*s.offset),r>d&&u>t?(n.removeClass(s.classToRemove),n.addClass(s.classToAdd),s.callbackFunction(n,"add"),r>=c&&l>=t?n.addClass(s.classToAddForFullView):n.removeClass(s.classToAddForFullView),n.data("vp-animated",!0),s.removeClassAfterAnimation&&n.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n.removeClass(s.classToAdd)})):n.hasClass(s.classToAdd)&&s.repeat&&(n.removeClass(s.classToAdd+" "+s.classToAddForFullView),s.callbackFunction(n,"remove"),n.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&e(document).bind("touchmove MSPointerMove pointermove",this.checkElements),e(i.scrollBox).bind("load scroll",this.checkElements),e(window).resize(function(){o={height:e(i.scrollBox).height(),width:e(i.scrollBox).width()},n.checkElements()}),this.checkElements(),this}}(jQuery);