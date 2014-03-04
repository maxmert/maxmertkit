(function(){var t;t=function(){function t(t,i){this.$btn=t,this.options=i,this._pushInstance(),null!=this._afterConstruct&&this._afterConstruct()}return t.prototype._id=0,t.prototype._instances=new Array,t.prototype.destroy=function(){return this.$el.off("."+this._name),this._popInstance()},t.prototype._extend=function(t,i){var e,n;for(e in i)n=i[e],t[e]=n;return t},t.prototype._merge=function(t,i){return this._extend(this._extend({},t),i)},t.prototype._setOptions=function(){return console.warning("Maxmertkit Helpers. There is no standart setOptions function.")},t.prototype._pushInstance=function(){return this._id++,this._instances.push(this)},t.prototype._popInstance=function(){var t,i,e,n,o,s;for(o=this._instances,s=[],t=e=0,n=o.length;n>e;t=++e)i=o[t],i._id===this._id&&this._instances.splice(t,1),s.push(delete this);return s},t.prototype._selfish=function(){var t,i,e,n,o,s;for(o=this._instances,s=[],t=e=0,n=o.length;n>e;t=++e)i=o[t],s.push(this._id!==i._id?i.close():void 0);return s},t.prototype._equalNodes=function(t,i){return t.get(0)===i.get(0)},t.prototype._deviceMobile=function(){return this.$el.width()<768},t.prototype._getContainer=function(t){var i,e;for(i=t[0]||t;i=i.parentNode;){try{e=getComputedStyle(i)}catch(n){}if(null==e)return $(i);if(/(relative)/.test(e.position))return i}return document.body},t.prototype._getScrollParent=function(t){var i,e,n;for(i=t[0]||t;i=i.parentNode;){try{e=getComputedStyle(i)}catch(o){}if(null==e)return $(i);if(null!=e.webkitPerspective&&"none"!==e.webkitPerspective||null!=e.mozPerspective&&"none"!==e.mozPerspective||null!=e.perspective&&"none"!==e.perspective)return i;if(/(auto|scroll)/.test(e.overflow+e["overflow-y"]+e["overflow-x"])&&("absolute"!==position||"relative"===(n=e.position)||"absolute"===n||"fixed"===n))return i}return $(document)},t}(),window.MaxmertkitHelpers=t}).call(this),function(){var t,i,e,n,o,s,r,a,l,h,c,p,u={}.hasOwnProperty,d=function(t,i){function e(){this.constructor=t}for(var n in i)u.call(i,n)&&(t[n]=i[n]);return e.prototype=i.prototype,t.prototype=new e,t.__super__=i.prototype,t};s="wall",o=[],r=[],n=0,i={landscape:{x:"gamma",y:"beta",z:"alpha"},portrait:{y:"beta",x:"gamma",z:"alpha"}},t=function(t){function e(t,i){var o,s;this.el=t,this.options=i,this.$el=$(this.el),this._id=n++,s={kind:this.$el.data("kind")||"wall",group:this.$el.data("group")||"wall",name:this.$el.data("name")||"wall",video:this.$el.data("video")||!1,videoOpacity:!1,poster:this.$el.data("poster")||!1,image:this.$el.data("image")||!1,imageBlur:!1,imageOpacity:!1,caption:this.$el.data("caption")||!1,beforeactive:function(){},onactive:function(){},beforeunactive:function(){},onunactive:function(){}},this.options=this._merge(s,this.options),e.__super__.constructor.call(this,this.$el,this.options),this._setOptions(this.options),this.header=this.$el.find(".-header, header"),o=this.$el.find(".-caption, caption"),o.length&&(this.caption=o),this.scroller=this.$el.find(".-scroller"),this.scroll=this._getScrollParent(this.el),this.activate()}return d(e,t),e.prototype._name=s,e.prototype._instances=o,e.prototype._nav=r,e.prototype._setOptions=function(t){var i,e,n,o,s,r,l,h,p,u,d;for(o in t){if(h=t[o],null==this.options[o])return console.error("Maxmertkit Wall. You're trying to set unpropriate option.");switch(o){case"video":if(null!=this.video&&this.video.remove(),h){for(l=h.split(","),p="<video preload autoplay loop muted volume='0'>",u=0,d=l.length;d>u;u++)r=l[u],p+="<source src='"+r+"' type='video/"+a(r).ext+"'>";p+="</video>",this.video=$(p),this.$el.append(this.video)}break;case"image":null!=this.image&&this.image.remove(),h&&(n="<figure><img src='"+h+"'/>",this.options.caption&&(n+="<caption>"+this.options.caption+"</caption>"),n+="</figure>",this.image=$(n),this.$el.append(this.image));break;case"group":for(e=0;e<this._nav.length&&this._nav[e].data("group")!==h;)e++;this._nav.length&&this._nav[e].data("group")===h?i=this._nav[e]:(i=$("[data-kind='wall-nav'][data-group='"+h+"']"),i.length&&this._nav.push(i)),s="<i data-scroll='"+this._id+"'>",null!=this.options.name&&(s+="<span>"+this.options.name+"</span>"),s+="</i>",this.nav=$(s),this.navContainer=i,this.navContainer.append(this.nav),this.nav.on("click."+this._name+"."+this._id,function(t){return function(){return c.call(t,t.$el.offset().top)}}(this));break;default:this.options[o]=h,"function"==typeof h&&(this[o]=this.options[o])}}},e.prototype.destroy=function(){return this.$el.off("."+this._name),$(document).off("scroll."+this._name+"."+this._id),$(window).off("resize."+this._name+"."+this._id),e.__super__.destroy.apply(this,arguments)},e.prototype.activate=function(){return l.call(this),this._orientation=0===window.orientation?"portrait":"landscape",$(window).on("resize."+this._name+"."+this._id,function(t){return function(){return h.call(t),l.call(t)}}(this)),window.addEventListener("deviceorientation",function(t){return function(e){var n,o,s;return o=i[t._orientation].x,n=e[o],s=(n-0)/40,null!=t.image?(t.image.height($(window).height()),t.image.find("img").height($(window).height()),t.image.find("img").animate({marginLeft:""+(t.image.width()-$(window).width())*s+"px"}),t.$el.html(""+(t.image.width()-$(window).width())*s+"px")):void 0}}(this),!1),window.addEventListener("orientationchange",function(t){return function(){return t._orientation=0===window.orientation?"portrait":"landscape"}}(this),!1),$(document).on("scroll."+this._name+"."+this._id,function(t){return function(){var i,e,n,o;return n=t.$el.offset().top-$(window).height(),e=t.$el.offset().top+t.$el.height()+$(window).height(),i=t.scroll.scrollTop()+$(window).height(),o=i>n?1-i/e:0,t.deviceMobile||(1-o>=.5&&1>=1-o&&(null!=t.video&&t.options.videoOpacity&&t.video.css({opacity:o+.5}),null!=t.image&&(t.options.imageOpacity&&t.image.css({opacity:o+.5}),t.options.imageBlur&&(1-o>=.8?t.$el.addClass("_blur_"):t.$el.removeClass("_blur_")))),1>o&&o>0&&(null!=t.video&&t.video.css({top:Math.round((t.scroll.scrollTop()-t.$el.offset().top)*o)}),null!=t.image&&t.image.css({top:Math.round((t.scroll.scrollTop()-t.$el.offset().top)*o)}),null!=t.scroller&&t.scroller.css({opacity:2*o}))),p.call(t)}}(this)),null!=this.scroller&&this.scroller.on("click."+this._name+"."+this._id,function(t){return function(){var i;return i=t.$el.offset().top+t.$el.height(),c.call(t,i)}}(this)),p.call(this),h.call(this),this.$el.addClass("_active_")},e.prototype.deactivate=function(){return this.$el.hasClass("_active_")?_beforeunactive.call(this):void 0},e.prototype.disable=function(){return this.$el.toggelleClass("_disabled_")},e}(MaxmertkitHelpers),e=function(t,i,e){return t},l=function(){return this.deviceMobile=this._deviceMobile()},c=function(t){return"BODY"===this.scroll[0].activeElement.nodeName?$("body,html").animate({scrollTop:""+t+"px"},700):this.scroll.animate({scrollTop:""+t+"px"},700)},p=function(){var t;return this.$el.offset().top+this.$el.height()/2>(t=this.scroll.scrollTop())&&t>this.$el.offset().top-this.$el.height()/2?(this.navContainer.find("._active_").removeClass("_active_"),this.nav.addClass("_active_")):void 0},h=function(){return this.header.css(this.deviceMobile?{height:"auto"}:{height:$(window).height()})},a=function(t){var i;return i=t.match(/(.*)[\/\\]([^\/\\]+)\.(\w+)$/),{path:i[1],file:i[2],ext:i[3]}},$.fn[s]=function(i){return this.each(function(){$.data(this,"kit-"+s)?"object"==typeof i?$.data(this,"kit-"+s)._setOptions(i):"string"==typeof i&&"_"!==i.charAt(0)?$.data(this,"kit-"+s)[i]:console.error("Maxmertkit Wall. You passed into the "+s+" something wrong."):$.data(this,"kit-"+s,new t(this,i))})},$(window).on("load",function(){return $('[data-kind="wall"]').each(function(){var t;return t=$(this),t.wall(t.data())})})}.call(this);