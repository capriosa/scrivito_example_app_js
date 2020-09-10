/**
 * Justified Gallery - v3.6.1
 * http://miromannino.github.io/Justified-Gallery/
 *
 * Copyright (c) 2014 Miro Mannino
 * Licensed under the MIT license.
 */
!function(e){var t=function(t,i){this.settings=i,this.checkSettings(),this.imgAnalyzerTimeout=null,this.entries=null,this.buildingRow={entriesBuff:[],width:0,height:0,aspectRatio:0},this.lastAnalyzedIndex=-1,this["yield"]={every:2,flushed:0},this.border=i.border>=0?i.border:i.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges(),this.offY=this.border,this.spinner={phase:0,timeSlot:150,$el:e('<div class="spinner"><span></span><span></span><span></span></div>'),intervalId:null},this.checkWidthIntervalId=null,this.galleryWidth=t.width(),this.$gallery=t};t.prototype.getSuffix=function(e,t){var i,n;for(i=e>t?e:t,n=0;n<this.suffixRanges.length;n++)if(i<=this.suffixRanges[n])return this.settings.sizeRangeSuffixes[this.suffixRanges[n]];return this.settings.sizeRangeSuffixes[this.suffixRanges[n-1]]},t.prototype.removeSuffix=function(e,t){return e.substring(0,e.length-t.length)},t.prototype.endsWith=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},t.prototype.getUsedSuffix=function(e){for(var t in this.settings.sizeRangeSuffixes)if(this.settings.sizeRangeSuffixes.hasOwnProperty(t)){if(0===this.settings.sizeRangeSuffixes[t].length)continue;if(this.endsWith(e,this.settings.sizeRangeSuffixes[t]))return this.settings.sizeRangeSuffixes[t]}return""},t.prototype.newSrc=function(e,t,i){var n;if(this.settings.thumbnailPath)n=this.settings.thumbnailPath(e,t,i);else{var o=e.match(this.settings.extension),s=null!==o?o[0]:"";n=e.replace(this.settings.extension,""),n=this.removeSuffix(n,this.getUsedSuffix(n)),n+=this.getSuffix(t,i)+s}return n},t.prototype.showImg=function(e,t){this.settings.cssAnimation?(e.addClass("entry-visible"),t&&t()):e.stop().fadeTo(this.settings.imagesAnimationDuration,1,t)},t.prototype.extractImgSrcFromImage=function(e){var t="undefined"!=typeof e.data("safe-src")?e.data("safe-src"):e.attr("src");return e.data("jg.originalSrc",t),t},t.prototype.imgFromEntry=function(e){var t=e.find("> img");return 0===t.length&&(t=e.find("> a > img")),0===t.length?null:t},t.prototype.captionFromEntry=function(e){var t=e.find("> .caption");return 0===t.length?null:t},t.prototype.displayEntry=function(t,i,n,o,s,r){t.width(o),t.height(r),t.css("top",n),t.css("left",i);var a=this.imgFromEntry(t);if(null!==a){a.css("width",o),a.css("height",s),a.css("margin-left",-o/2),a.css("margin-top",-s/2);var l=a.attr("src"),c=this.newSrc(l,o,s);a.one("error",function(){a.attr("src",a.data("jg.originalSrc"))});var d=function(){l!==c&&a.attr("src",c)};"skipped"===t.data("jg.loaded")?this.onImageEvent(l,e.proxy(function(){this.showImg(t,d),t.data("jg.loaded",!0)},this)):this.showImg(t,d)}else this.showImg(t);this.displayEntryCaption(t)},t.prototype.displayEntryCaption=function(t){var i=this.imgFromEntry(t);if(null!==i&&this.settings.captions){var n=this.captionFromEntry(t);if(null===n){var o=i.attr("alt");this.isValidCaption(o)||(o=t.attr("title")),this.isValidCaption(o)&&(n=e('<div class="caption">'+o+"</div>"),t.append(n),t.data("jg.createdCaption",!0))}null!==n&&(this.settings.cssAnimation||n.stop().fadeTo(0,this.settings.captionSettings.nonVisibleOpacity),this.addCaptionEventsHandlers(t))}else this.removeCaptionEventsHandlers(t)},t.prototype.isValidCaption=function(e){return"undefined"!=typeof e&&e.length>0},t.prototype.onEntryMouseEnterForCaption=function(t){var i=this.captionFromEntry(e(t.currentTarget));this.settings.cssAnimation?i.addClass("caption-visible").removeClass("caption-hidden"):i.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.visibleOpacity)},t.prototype.onEntryMouseLeaveForCaption=function(t){var i=this.captionFromEntry(e(t.currentTarget));this.settings.cssAnimation?i.removeClass("caption-visible").removeClass("caption-hidden"):i.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.nonVisibleOpacity)},t.prototype.addCaptionEventsHandlers=function(t){var i=t.data("jg.captionMouseEvents");"undefined"==typeof i&&(i={mouseenter:e.proxy(this.onEntryMouseEnterForCaption,this),mouseleave:e.proxy(this.onEntryMouseLeaveForCaption,this)},t.on("mouseenter",void 0,void 0,i.mouseenter),t.on("mouseleave",void 0,void 0,i.mouseleave),t.data("jg.captionMouseEvents",i))},t.prototype.removeCaptionEventsHandlers=function(e){var t=e.data("jg.captionMouseEvents");"undefined"!=typeof t&&(e.off("mouseenter",void 0,t.mouseenter),e.off("mouseleave",void 0,t.mouseleave),e.removeData("jg.captionMouseEvents"))},t.prototype.prepareBuildingRow=function(e){var t,i,n,o,s,r=!0,a=0,l=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,c=l/this.buildingRow.aspectRatio,d=this.buildingRow.width/l>this.settings.justifyThreshold;if(e&&"hide"===this.settings.lastRow&&!d){for(t=0;t<this.buildingRow.entriesBuff.length;t++)i=this.buildingRow.entriesBuff[t],this.settings.cssAnimation?i.removeClass("entry-visible"):i.stop().fadeTo(0,0);return-1}for(e&&!d&&"justify"!==this.settings.lastRow&&"hide"!==this.settings.lastRow&&(r=!1),t=0;t<this.buildingRow.entriesBuff.length;t++)i=this.buildingRow.entriesBuff[t],n=i.data("jg.width")/i.data("jg.height"),r?(o=t===this.buildingRow.entriesBuff.length-1?l:c*n,s=c):(o=this.settings.rowHeight*n,s=this.settings.rowHeight),l-=Math.round(o),i.data("jg.jwidth",Math.round(o)),i.data("jg.jheight",Math.ceil(s)),(0===t||a>s)&&(a=s);return this.settings.fixedHeight&&a>this.settings.rowHeight&&(a=this.settings.rowHeight),this.buildingRow.height=a,r},t.prototype.clearBuildingRow=function(){this.buildingRow.entriesBuff=[],this.buildingRow.aspectRatio=0,this.buildingRow.width=0},t.prototype.flushRow=function(e){var t,i,n,o=this.settings,s=this.border;if(i=this.prepareBuildingRow(e),e&&"hide"===o.lastRow&&-1===this.buildingRow.height)return void this.clearBuildingRow();if(this.maxRowHeight.isPercentage?this.maxRowHeight.value*o.rowHeight<this.buildingRow.height&&(this.buildingRow.height=this.maxRowHeight.value*o.rowHeight):this.maxRowHeight.value>0&&this.maxRowHeight.value<this.buildingRow.height&&(this.buildingRow.height=this.maxRowHeight.value),"center"===o.lastRow||"right"===o.lastRow){var r=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*o.margins;for(n=0;n<this.buildingRow.entriesBuff.length;n++)t=this.buildingRow.entriesBuff[n],r-=t.data("jg.jwidth");"center"===o.lastRow?s+=r/2:"right"===o.lastRow&&(s+=r)}for(n=0;n<this.buildingRow.entriesBuff.length;n++)t=this.buildingRow.entriesBuff[n],this.displayEntry(t,s,this.offY,t.data("jg.jwidth"),t.data("jg.jheight"),this.buildingRow.height),s+=t.data("jg.jwidth")+o.margins;this.$gallery.height(this.offY+this.buildingRow.height+this.border+(this.isSpinnerActive()?this.getSpinnerHeight():0)),(!e||this.buildingRow.height<=o.rowHeight&&i)&&(this.offY+=this.buildingRow.height+o.margins,this.clearBuildingRow(),this.$gallery.trigger("jg.rowflush"))},t.prototype.checkWidth=function(){this.checkWidthIntervalId=setInterval(e.proxy(function(){var e=parseFloat(this.$gallery.width());Math.abs(e-this.galleryWidth)>this.settings.refreshSensitivity&&(this.galleryWidth=e,this.rewind(),this.startImgAnalyzer(!0))},this),this.settings.refreshTime)},t.prototype.isSpinnerActive=function(){return null!==this.spinner.intervalId},t.prototype.getSpinnerHeight=function(){return this.spinner.$el.innerHeight()},t.prototype.stopLoadingSpinnerAnimation=function(){clearInterval(this.spinner.intervalId),this.spinner.intervalId=null,this.$gallery.height(this.$gallery.height()-this.getSpinnerHeight()),this.spinner.$el.detach()},t.prototype.startLoadingSpinnerAnimation=function(){var e=this.spinner,t=e.$el.find("span");clearInterval(e.intervalId),this.$gallery.append(e.$el),this.$gallery.height(this.offY+this.buildingRow.height+this.getSpinnerHeight()),e.intervalId=setInterval(function(){e.phase<t.length?t.eq(e.phase).fadeTo(e.timeSlot,1):t.eq(e.phase-t.length).fadeTo(e.timeSlot,0),e.phase=(e.phase+1)%(2*t.length)},e.timeSlot)},t.prototype.rewind=function(){this.lastAnalyzedIndex=-1,this.offY=this.border,this.clearBuildingRow()},t.prototype.updateEntries=function(t){return this.entries=this.$gallery.find(this.settings.selector).toArray(),0===this.entries.length?!1:(this.settings.filter?this.modifyEntries(this.filterArray,t):this.modifyEntries(this.resetFilters,t),e.isFunction(this.settings.sort)?this.modifyEntries(this.sortArray,t):this.settings.randomize&&this.modifyEntries(this.shuffleArray,t),!0)},t.prototype.insertToGallery=function(t){var i=this;e.each(t,function(){e(this).appendTo(i.$gallery)})},t.prototype.shuffleArray=function(e){var t,i,n;for(t=e.length-1;t>0;t--)i=Math.floor(Math.random()*(t+1)),n=e[t],e[t]=e[i],e[i]=n;return this.insertToGallery(e),e},t.prototype.sortArray=function(e){return e.sort(this.settings.sort),this.insertToGallery(e),e},t.prototype.resetFilters=function(t){for(var i=0;i<t.length;i++)e(t[i]).removeClass("jg-filtered");return t},t.prototype.filterArray=function(t){var i=this.settings;return"string"===e.type(i.filter)?t.filter(function(t){var n=e(t);return n.is(i.filter)?(n.removeClass("jg-filtered"),!0):(n.addClass("jg-filtered"),!1)}):e.isFunction(i.filter)?t.filter(i.filter):void 0},t.prototype.modifyEntries=function(e,t){var i=t?this.entries.splice(this.lastAnalyzedIndex+1,this.entries.length-this.lastAnalyzedIndex-1):this.entries;i=e.call(this,i),this.entries=t?this.entries.concat(i):i},t.prototype.destroy=function(){clearInterval(this.checkWidthIntervalId),e.each(this.entries,e.proxy(function(t,i){var n=e(i);n.css("width",""),n.css("height",""),n.css("top",""),n.css("left",""),n.data("jg.loaded",void 0),n.removeClass("jg-entry");var o=this.imgFromEntry(n);o.css("width",""),o.css("height",""),o.css("margin-left",""),o.css("margin-top",""),o.attr("src",o.data("jg.originalSrc")),o.data("jg.originalSrc",void 0),this.removeCaptionEventsHandlers(n);var s=this.captionFromEntry(n);n.data("jg.createdCaption")?(n.data("jg.createdCaption",void 0),null!==s&&s.remove()):null!==s&&s.fadeTo(0,1)},this)),this.$gallery.css("height",""),this.$gallery.removeClass("justified-gallery"),this.$gallery.data("jg.controller",void 0)},t.prototype.analyzeImages=function(t){for(var i=this.lastAnalyzedIndex+1;i<this.entries.length;i++){var n=e(this.entries[i]);if(n.data("jg.loaded")===!0||"skipped"===n.data("jg.loaded")){var o=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,s=n.data("jg.width")/n.data("jg.height");if(o/(this.buildingRow.aspectRatio+s)<this.settings.rowHeight&&(this.flushRow(!1),++this["yield"].flushed>=this["yield"].every))return void this.startImgAnalyzer(t);this.buildingRow.entriesBuff.push(n),this.buildingRow.aspectRatio+=s,this.buildingRow.width+=s*this.settings.rowHeight,this.lastAnalyzedIndex=i}else if("error"!==n.data("jg.loaded"))return}this.buildingRow.entriesBuff.length>0&&this.flushRow(!0),this.isSpinnerActive()&&this.stopLoadingSpinnerAnimation(),this.stopImgAnalyzerStarter(),this.$gallery.trigger(t?"jg.resize":"jg.complete")},t.prototype.stopImgAnalyzerStarter=function(){this["yield"].flushed=0,null!==this.imgAnalyzerTimeout&&clearTimeout(this.imgAnalyzerTimeout)},t.prototype.startImgAnalyzer=function(e){var t=this;this.stopImgAnalyzerStarter(),this.imgAnalyzerTimeout=setTimeout(function(){t.analyzeImages(e)},.001)},t.prototype.onImageEvent=function(t,i,n){if(i||n){var o=new Image,s=e(o);i&&s.one("load",function(){s.off("load error"),i(o)}),n&&s.one("error",function(){s.off("load error"),n(o)}),o.src=t}},t.prototype.init=function(){var t=!1,i=!1,n=this;e.each(this.entries,function(o,s){var r=e(s),a=n.imgFromEntry(r);if(r.addClass("jg-entry"),r.data("jg.loaded")!==!0&&"skipped"!==r.data("jg.loaded"))if(null!==n.settings.rel&&r.attr("rel",n.settings.rel),null!==n.settings.target&&r.attr("target",n.settings.target),null!==a){var l=n.extractImgSrcFromImage(a);if(a.attr("src",l),n.settings.waitThumbnailsLoad===!1){var c=parseFloat(a.attr("width")),d=parseFloat(a.attr("height"));if(!isNaN(c)&&!isNaN(d))return r.data("jg.width",c),r.data("jg.height",d),r.data("jg.loaded","skipped"),i=!0,n.startImgAnalyzer(!1),!0}r.data("jg.loaded",!1),t=!0,n.isSpinnerActive()||n.startLoadingSpinnerAnimation(),n.onImageEvent(l,function(e){r.data("jg.width",e.width),r.data("jg.height",e.height),r.data("jg.loaded",!0),n.startImgAnalyzer(!1)},function(){r.data("jg.loaded","error"),n.startImgAnalyzer(!1)})}else r.data("jg.loaded",!0),r.data("jg.width",r.width()|parseFloat(r.css("width"))|1),r.data("jg.height",r.height()|parseFloat(r.css("height"))|1)}),t||i||this.startImgAnalyzer(!1),this.checkWidth()},t.prototype.checkOrConvertNumber=function(t,i){if("string"===e.type(t[i])&&(t[i]=parseFloat(t[i])),"number"!==e.type(t[i]))throw i+" must be a number";if(isNaN(t[i]))throw"invalid number for "+i},t.prototype.checkSizeRangesSuffixes=function(){if("object"!==e.type(this.settings.sizeRangeSuffixes))throw"sizeRangeSuffixes must be defined and must be an object";var t=[];for(var i in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(i)&&t.push(i);for(var n={0:""},o=0;o<t.length;o++)if("string"===e.type(t[o]))try{var s=parseInt(t[o].replace(/^[a-z]+/,""),10);n[s]=this.settings.sizeRangeSuffixes[t[o]]}catch(r){throw"sizeRangeSuffixes keys must contains correct numbers ("+r+")"}else n[t[o]]=this.settings.sizeRangeSuffixes[t[o]];this.settings.sizeRangeSuffixes=n},t.prototype.retrieveMaxRowHeight=function(){var t={};if("string"===e.type(this.settings.maxRowHeight))this.settings.maxRowHeight.match(/^[0-9]+%$/)?(t.value=parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1])/100,t.isPercentage=!1):(t.value=parseFloat(this.settings.maxRowHeight),t.isPercentage=!0);else{if("number"!==e.type(this.settings.maxRowHeight))throw"maxRowHeight must be a number or a percentage";t.value=this.settings.maxRowHeight,t.isPercentage=!1}if(isNaN(t.value))throw"invalid number for maxRowHeight";return t.isPercentage?t.value<100&&(t.value=100):t.value>0&&t.value<this.settings.rowHeight&&(t.value=this.settings.rowHeight),t},t.prototype.checkSettings=function(){if(this.checkSizeRangesSuffixes(),this.checkOrConvertNumber(this.settings,"rowHeight"),this.checkOrConvertNumber(this.settings,"margins"),this.checkOrConvertNumber(this.settings,"border"),"justify"!==this.settings.lastRow&&"nojustify"!==this.settings.lastRow&&"left"!==this.settings.lastRow&&"center"!==this.settings.lastRow&&"right"!==this.settings.lastRow&&"hide"!==this.settings.lastRow)throw'lastRow must be "justify", "nojustify", "left", "center", "right" or "hide"';if(this.checkOrConvertNumber(this.settings,"justifyThreshold"),this.settings.justifyThreshold<0||this.settings.justifyThreshold>1)throw"justifyThreshold must be in the interval [0,1]";if("boolean"!==e.type(this.settings.cssAnimation))throw"cssAnimation must be a boolean";if("boolean"!==e.type(this.settings.captions))throw"captions must be a boolean";if(this.checkOrConvertNumber(this.settings.captionSettings,"animationDuration"),this.checkOrConvertNumber(this.settings.captionSettings,"visibleOpacity"),this.settings.captionSettings.visibleOpacity<0||this.settings.captionSettings.visibleOpacity>1)throw"captionSettings.visibleOpacity must be in the interval [0, 1]";if(this.checkOrConvertNumber(this.settings.captionSettings,"nonVisibleOpacity"),this.settings.captionSettings.nonVisibleOpacity<0||this.settings.captionSettings.nonVisibleOpacity>1)throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";if("boolean"!==e.type(this.settings.fixedHeight))throw"fixedHeight must be a boolean";if(this.checkOrConvertNumber(this.settings,"imagesAnimationDuration"),this.checkOrConvertNumber(this.settings,"refreshTime"),this.checkOrConvertNumber(this.settings,"refreshSensitivity"),"boolean"!==e.type(this.settings.randomize))throw"randomize must be a boolean";if("string"!==e.type(this.settings.selector))throw"selector must be a string";if(this.settings.sort!==!1&&!e.isFunction(this.settings.sort))throw"sort must be false or a comparison function";if(this.settings.filter!==!1&&!e.isFunction(this.settings.filter)&&"string"!==e.type(this.settings.filter))throw"filter must be false, a string or a filter function"},t.prototype.retrieveSuffixRanges=function(){var e=[];for(var t in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(t)&&e.push(parseInt(t,10));return e.sort(function(e,t){return e>t?1:t>e?-1:0}),e},t.prototype.updateSettings=function(t){this.settings=e.extend({},this.settings,t),this.checkSettings(),this.border=this.settings.border>=0?this.settings.border:this.settings.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges()},e.fn.justifiedGallery=function(i){return this.each(function(n,o){var s=e(o);s.addClass("justified-gallery");var r=s.data("jg.controller");if("undefined"==typeof r){if("undefined"!=typeof i&&null!==i&&"object"!==e.type(i)){if("destroy"===i)return;throw"The argument must be an object"}r=new t(s,e.extend({},e.fn.justifiedGallery.defaults,i)),s.data("jg.controller",r)}else if("norewind"===i);else{if("destroy"===i)return void r.destroy();r.updateSettings(i),r.rewind()}r.updateEntries("norewind"===i)&&r.init()})},e.fn.justifiedGallery.defaults={sizeRangeSuffixes:{},thumbnailPath:void 0,rowHeight:120,maxRowHeight:-1,margins:1,border:-1,lastRow:"nojustify",justifyThreshold:.75,fixedHeight:!1,waitThumbnailsLoad:!0,captions:!0,cssAnimation:!1,imagesAnimationDuration:500,captionSettings:{animationDuration:500,visibleOpacity:.7,nonVisibleOpacity:0},rel:null,target:null,extension:/\.[^.\\/]+$/,refreshTime:200,refreshSensitivity:0,randomize:!1,sort:!1,filter:!1,selector:"> a, > div:not(.spinner)"}}(jQuery);