(function(){this.Leo={},this.Leo.Pager={},Leo.headingLinks=function(e){return e.els.each(function(){var e,n;return e=$(this),n=Leo.slugify(e.text()),e.attr("id",n),e.prepend("<a class='anchor' href='#"+n+"'>#</a>")})},Leo.readTime=function(e){var n;return n=Math.ceil(e.text.split(" ").length/e.wordsPerMinute),e.element.append("<b>"+n+" minute read</b>")},Leo.Pager=function(){var e,n,t,s,o,i,u,r;return o=0,i=[],r={next:39,prev:37},s=function(e){return o=e,n(),u(),console.log(o)},n=function(){return i.push("/"),i.push("/styleguide/"),i.push("/styleguide/basics/"),i.push("/styleguide/numbers-game/"),i.push("/styleguide/comments/"),i.push("/styleguide/naming/"),i.push("/manifest/"),i.push("/foundation/"),i.push("/foundation/reset/"),i.push("/foundation/config/"),i.push("/foundation/helpers/"),i.push("/foundation/base/"),i.push("/foundation/tools/"),i.push("/components/"),i.push("/features/"),i.push("/vendor/"),i.push("/about/"),i.push("/resources/")},u=function(){return $(document).on("keydown",function(n){switch(e(n)){case r.next:return t("next");case r.prev:return t("prev")}})},e=function(e){var n;return e=e||window.event,n=e.keyCode||e.which},t=function(e){switch(e){case"next":if(o!==i.length-1)return window.location=i[o+1];break;case"prev":if(0!==o)return window.location=i[o-1]}},{init:s}}(),Leo.slugify=function(e){return e.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},jQuery(function(e){return Leo.headingLinks({els:e("h2, h3, h4, h5, h6")}),Leo.Pager.init(e("body").data("id")),e(".toggle").on("click",function(n){return n.preventDefault(),e(this).toggleClass("is-active"),e("body").toggleClass("is-sidebar-open"),e(".sidebar").toggleClass("is-open")}),e(document).on("keyup",function(n){switch(n.which){case 83:return e(".toggle").toggleClass("is-active"),e("body").toggleClass("is-sidebar-open"),e(".sidebar").toggleClass("is-open")}})})}).call(this);