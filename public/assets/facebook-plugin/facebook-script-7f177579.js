!function(e){if(/^(http|ftp|https)/.test(window.location.href)&&(e(".facebookPlaceholder").replaceWith("<div class='fb-comments' data-href='"+window.location.href+"' data-width='100%' data-numposts='"+e(".facebookPlaceholder").attr("data-numposts")+"'></div>"),e(".googlePlaceholder").replaceWith("<div class='g-comments' data-width = '650' data-href='"+window.location.href+"' data-width='100%'  data-first_party_property = 'BLOGGER' data-view_type = 'FILTERED_POSTMOD'></div>"),0<e(".disqusPlaceholder").length)){var t=e(".disqusPlaceholder").parent().attr("data-shortname");console.log(t),e(".disqusPlaceholder").replaceWith("<div id='disqus_thread'></div>"),e=document;var i=e.createElement("script");i.src="//"+t+".disqus.com/embed.js",i.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(i)}}(jQuery);