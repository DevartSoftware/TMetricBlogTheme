function checkNavDrop(){$("#main-menu > li").each(function(){0<$(this).children(".drop").length&&$(this).addClass("parent")})}function showNavDrop(){$("#main-menu .parent > a").click(function(e){e.preventDefault(),$(this).parent("li").hasClass("drop-visible")?($(this).parent("li").removeClass("drop-visible"),$(this).parent("li").children(".drop").removeClass("visible"),$("#gh-head").removeClass("drop-visible"),$(window).width()<1024&&$(this).parent("li").children(".drop").slideUp()):($(window).width()<1024&&$("#main-menu .drop.visible").slideUp(),$("#main-menu .parent").removeClass("drop-visible"),$(this).parent("li").addClass("drop-visible"),$("#main-menu .drop").removeClass("visible"),$(this).parent("li").children(".drop").addClass("visible"),$("#gh-head").addClass("drop-visible"),$(window).width()<1024&&$(this).parent("li").children(".drop").slideDown())}),$("#main-menu .drop a").click(function(){$(this).attr("href").indexOf("#")+1&&($("#gh-head, #main-menu .parent").removeClass("drop-visible"),$(window).width()<1024&&($("#main-menu .drop.visible").slideUp(),$(".navbar-toggler-right").click()),$("#gh-head .drop").removeClass("visible"))}),$(document).bind("mouseup touchend",function(e){$("#gh-head").is(e.target)||0!==$("#gh-head").has(e.target).length||(1024<=$(window).width()?($("#main-menu .parent").removeClass("drop-visible"),$("#main-menu .drop").removeClass("visible"),$("#gh-head").removeClass("drop-visible")):$("#gh-head").hasClass("mobile-menu-opened")&&$(".navbar-toggler").trigger("click"))})}function showMobileMenu(){$(".navbar-toggler-right").click(function(){$(this).toggleClass("collapsed"),checkClass()}),$("#footer .col .title").click(function(){$(window).width()<=599&&($(this).hasClass("opened")?($("#footer .col .title.opened + .slide").slideUp(300),$("#footer .col .title").removeClass("opened")):($("#footer .col .title.opened + .slide").slideUp(300),$("#footer .col .title").removeClass("opened"),$(this).addClass("opened"),$(this).next(".slide").slideDown(300)))})}function checkClass(){$(".navbar-toggler-right").hasClass("collapsed")?($("header").removeClass("mobile-menu-opened"),$("body").removeClass("mobile-menu-opened"),$("#gh-head").removeClass("drop-visible"),$(".navbar-collapse").removeClass("show").slideUp(300)):($("header").addClass("mobile-menu-opened"),$("body").addClass("mobile-menu-opened"),$(".navbar-collapse").addClass("show").slideDown(300))}function showSidebarMenu(){$(".mobile-menu-opener").click(function(){$(window).width()<=700&&($(".sidebar").toggleClass("nav-visible"),$(".sidebar").hasClass("nav-visible")&&$([document.documentElement,document.body]).animate({scrollTop:$(".sidebar").offset().top-35},300),$(".sidebar .sidebar-menu").slideToggle(300))})}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}!function(i){"use strict";i.fn.fitVids=function(e){var t,o,r={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(t=document.head||document.getElementsByTagName("head")[0],(o=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(o.childNodes[1])),e&&i.extend(r,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];r.customSelector&&e.push(r.customSelector);var n=".fitvidsignore";r.ignore&&(n=n+", "+r.ignore);e=i(this).find(e.join(","));(e=(e=e.not("object object")).not(n)).each(function(){var e,t,o=i(this);0<o.parents(n).length||"embed"===this.tagName.toLowerCase()&&o.parent("object").length||o.parent(".fluid-width-video-wrapper").length||(o.css("height")||o.css("width")||!isNaN(o.attr("height"))&&!isNaN(o.attr("width"))||(o.attr("height",9),o.attr("width",16)),e=("object"===this.tagName.toLowerCase()||o.attr("height")&&!isNaN(parseInt(o.attr("height"),10))?parseInt(o.attr("height"),10):o.height())/(isNaN(parseInt(o.attr("width"),10))?o.width():parseInt(o.attr("width"),10)),o.attr("name")||(t="fitvid"+i.fn.fitVids._count,o.attr("name",t),i.fn.fitVids._count++),o.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),o.removeAttr("height").removeAttr("width"))})})},i.fn.fitVids._count=0}(window.jQuery||window.Zepto),$(document).ready(function(){function e(){10<$(window).scrollTop()?$("#gh-head").addClass("scrolled-down"):$("#gh-head").removeClass("scrolled-down"),100<$(window).scrollTop()?$(".btn-to-top").show():$(".btn-to-top").hide()}e(),checkNavDrop(),showNavDrop(),showMobileMenu(),showSidebarMenu(),$(window).scroll(function(){e()}),$(".btn-to-top").click(function(){$("html, body").animate({scrollTop:0},500)})}),$(window).on("load",function(){let n=!1;$(window).scroll(function(){var e,t,o;$(".sales-anchor").length&&(e=$(".sales-anchor").offset().top,t=$(window).scrollTop(),o=$(window).height()/2,e<t+o&&!n&&($("#sales-fader, .sales-popup, .discount-popup").addClass("visible"),n=!0))}),$("#sales-fader, .btn-popup-close").click(function(){$("#sales-fader, .sales-popup, .discount-popup").removeClass("visible")}),$(".sales-popup .btn-copy").click(function(){!function(){let e=$("<input>");$("body").append(e),e.val($("#code-field").text()).select(),document.execCommand("copy"),e.remove()}();var e="Copied: "+$("#code-field").html();$(".sales-popup .tooltip").html(e)})}),$(window).resize(function(){$("#main-menu .parent").removeClass("drop-visible").children(".drop").removeClass("visible"),$("#gh-head").removeClass("drop-visible"),$("#main-menu .drop").show(),$(window).width()<1024&&($(".navbar-toggler-right").addClass("collapsed"),$("header").removeClass("mobile-menu-opened"),$("body").removeClass("mobile-menu-opened"),$(".navbar-collapse").removeClass("show").hide(),$("#main-menu .drop").hide()),$(window).width()<=700?($(".sidebar").removeClass("nav-visible"),$(".sidebar .sidebar-menu").hide()):($(".sidebar").addClass("nav-visible"),$(".sidebar .sidebar-menu").show()),$(window).width()<=599?($("#footer .col .title").removeClass("opened"),$("#footer .col .slide").hide()):($("#footer .col .title").removeClass("opened"),$("#footer .col .slide").show())}),function(e){e.addEventListener("DOMContentLoaded",function(){e.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),o=e.attributes.width.value,e=e.attributes.height.value;t.style.flex=o/e+" 1 0%"})})}((window,document)),function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.fuzzysort=t()}(this,function(){var I="undefined"!=typeof require&&"undefined"==typeof window,o=new Map,n=new Map,j=[];j.total=0;var b=[],$=[];function t(){o.clear(),n.clear(),b=[],$=[]}function E(e){for(var t=-9007199254740991,o=e.length-1;0<=o;--o){var n=e[o];null===n||t<(n=n.score)&&(t=n)}return-9007199254740991===t?null:t}function D(e,t){var o=e[t];if(void 0!==o)return o;for(var n=t,r=(n=!Array.isArray(t)?t.split("."):n).length,i=-1;e&&++i<r;)e=e[n[i]];return e}function N(e){return"object"==typeof e}function r(){var i=[],l=0,e={};function t(){for(var e=i[n=0],t=1;t<l;){var o=t+1,n=t;o<l&&i[o].score<i[t].score&&(n=o),i[n-1>>1]=i[n],t=1+(n<<1)}for(var r=n-1>>1;0<n&&e.score<i[r].score;r=(n=r)-1>>1)i[n]=i[r];i[n]=e}return e.add=function(e){var t=l;i[l++]=e;for(var o=t-1>>1;0<t&&e.score<i[o].score;o=(t=o)-1>>1)i[t]=i[o];i[t]=e},e.poll=function(){if(0!==l){var e=i[0];return i[0]=i[--l],t(),e}},e.peek=function(e){if(0!==l)return i[0]},e.replaceTop=function(e){i[0]=e,t()},e}var C=r();return function e(L){var _={single:function(e,t,o){return e?(N(e)||(e=_.getPreparedSearch(e)),t?(N(t)||(t=_.getPrepared(t)),((o&&void 0!==o.allowTypo?o.allowTypo:!L||void 0===L.allowTypo||L.allowTypo)?_.algorithm:_.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,o){if(!e)return j;var n,r,i=(e=_.prepareSearch(e))[0],l=o&&o.threshold||L&&L.threshold||-9007199254740991,s=o&&o.limit||L&&L.limit||9007199254740991,a=(o&&void 0!==o.allowTypo?o.allowTypo:!L||void 0===L.allowTypo||L.allowTypo)?_.algorithm:_.algorithmNoTypo,d=0,c=0,u=t.length;if(o&&o.keys)for(var h=o.scoreFn||E,p=o.keys,f=p.length,m=u-1;0<=m;--m){for(var v=t[m],g=new Array(f),w=f-1;0<=w;--w)(n=D(v,b=p[w]))?(N(n)||(n=_.getPrepared(n)),g[w]=a(e,n,i)):g[w]=null;g.obj=v;var y=h(g);null!==y&&(y<l||(g.score=y,d<s?(C.add(g),++d):(++c,y>C.peek().score&&C.replaceTop(g))))}else if(o&&o.key)for(var b=o.key,m=u-1;0<=m;--m)(n=D(v=t[m],b))&&(null!==(r=a(e,n=!N(n)?_.getPrepared(n):n,i))&&(r.score<l||(r={target:r.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:r.score,indexes:r.indexes,obj:v},d<s?(C.add(r),++d):(++c,r.score>C.peek().score&&C.replaceTop(r)))));else for(m=u-1;0<=m;--m)(n=t[m])&&(null!==(r=a(e,n=!N(n)?_.getPrepared(n):n,i))&&(r.score<l||(d<s?(C.add(r),++d):(++c,r.score>C.peek().score&&C.replaceTop(r)))));if(0===d)return j;var $=new Array(d);for(m=d-1;0<=m;--m)$[m]=C.poll();return $.total=d+c,$},goAsync:function(x,T,A){var S=!1,e=new Promise(function(p,f){if(!x)return p(j);var m=(x=_.prepareSearch(x))[0],v=r(),g=T.length-1,w=A&&A.threshold||L&&L.threshold||-9007199254740991,y=A&&A.limit||L&&L.limit||9007199254740991,b=(A&&void 0!==A.allowTypo?A.allowTypo:!L||void 0===L.allowTypo||L.allowTypo)?_.algorithm:_.algorithmNoTypo,$=0,C=0;function k(){if(S)return f("canceled");var e,t,o=Date.now();if(A&&A.keys)for(var n=A.scoreFn||E,r=A.keys,i=r.length;0<=g;--g){for(var l=T[g],s=new Array(i),a=i-1;0<=a;--a)(e=D(l,c=r[a]))?(N(e)||(e=_.getPrepared(e)),s[a]=b(x,e,m)):s[a]=null;s.obj=l;var d=n(s);if(null!==d&&!(d<w)&&(s.score=d,$<y?(v.add(s),++$):(++C,d>v.peek().score&&v.replaceTop(s)),g%1e3==0&&10<=Date.now()-o))return void(I?setImmediate:setTimeout)(k)}else if(A&&A.key){for(var c=A.key;0<=g;--g)if((e=D(l=T[g],c))&&(N(e)||(e=_.getPrepared(e)),null!==(t=b(x,e,m))&&!(t.score<w)&&(t={target:t.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:t.score,indexes:t.indexes,obj:l},$<y?(v.add(t),++$):(++C,t.score>v.peek().score&&v.replaceTop(t)),g%1e3==0&&10<=Date.now()-o)))return void(I?setImmediate:setTimeout)(k)}else for(;0<=g;--g)if((e=T[g])&&(N(e)||(e=_.getPrepared(e)),null!==(t=b(x,e,m))&&!(t.score<w)&&($<y?(v.add(t),++$):(++C,t.score>v.peek().score&&v.replaceTop(t)),g%1e3==0&&10<=Date.now()-o)))return void(I?setImmediate:setTimeout)(k);if(0===$)return p(j);for(var u=new Array($),h=$-1;0<=h;--h)u[h]=v.poll();u.total=$+C,p(u)}I?setImmediate(k):k()});return e.cancel=function(){S=!0},e},highlight:function(e,t,o){if(null===e)return null;void 0===t&&(t="<b>"),void 0===o&&(o="</b>");for(var n="",r=0,i=!1,l=e.target,s=l.length,a=e.indexes,d=0;d<s;++d){var c=l[d];if(a[r]===d){if(i||(i=!0,n+=t),++r===a.length){n+=c+o+l.substr(d+1);break}}else i&&(i=!1,n+=o);n+=c}return n},prepare:function(e){if(e)return{target:e,_targetLowerCodes:_.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){if(e)return{target:e,_targetLowerCodes:_.prepareLowerCodes(e),_nextBeginningIndexes:_.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}},prepareSearch:function(e){if(e)return _.prepareLowerCodes(e)},getPrepared:function(e){if(999<e.length)return _.prepare(e);var t=o.get(e);return void 0!==t||(t=_.prepare(e),o.set(e,t)),t},getPreparedSearch:function(e){if(999<e.length)return _.prepareSearch(e);var t=n.get(e);return void 0!==t||(t=_.prepareSearch(e),n.set(e,t)),t},algorithm:function(e,t,o){for(var n=t._targetLowerCodes,r=e.length,i=n.length,l=0,s=0,a=0,d=0;;){if(o===n[s]){if(b[d++]=s,++l===r)break;o=e[0===a?l:a===l?l+1:a===l-1?l-1:l]}if(++s>=i)for(;;){if(l<=1)return null;if(0===a){if(o===e[--l])continue;a=l}else{if(1===a)return null;if((o=e[1+(l=--a)])===e[l])continue}s=b[(d=l)-1]+1;break}}var l=0,c=0,u=!1,h=0,p=t._nextBeginningIndexes;null===p&&(p=t._nextBeginningIndexes=_.prepareNextBeginningIndexes(t.target));var f,m=s=0===b[0]?0:p[b[0]-1];if(s!==i)for(;;)if(i<=s){if(l<=0){if(++c>r-2)break;if(e[c]===e[c+1])continue;s=m;continue}--l,s=p[$[--h]]}else if(e[0===c?l:c===l?l+1:c===l-1?l-1:l]===n[s]){if($[h++]=s,++l===r){u=!0;break}++s}else s=p[s];for(var v=u?(f=$,h):(f=b,d),g=0,w=-1,y=0;y<r;++y)w!==(s=f[y])-1&&(g-=s),w=s;for(u?0!==c&&(g+=-20):(g*=1e3,0!==a&&(g+=-20)),t.score=g-=i-r,t.indexes=new Array(v),y=v-1;0<=y;--y)t.indexes[y]=f[y];return t},algorithmNoTypo:function(e,t,o){for(var n=t._targetLowerCodes,r=e.length,i=n.length,l=0,s=0,a=0;;){if(o===n[s]){if(b[a++]=s,++l===r)break;o=e[l]}if(++s>=i)return null}var d,l=0,c=!1,u=0,h=t._nextBeginningIndexes;if(null===h&&(h=t._nextBeginningIndexes=_.prepareNextBeginningIndexes(t.target)),(s=0===b[0]?0:h[b[0]-1])!==i)for(;;)if(i<=s){if(l<=0)break;--l,s=h[$[--u]]}else if(e[l]===n[s]){if($[u++]=s,++l===r){c=!0;break}++s}else s=h[s];for(var p=c?(d=$,u):(d=b,a),f=0,m=-1,v=0;v<r;++v)m!==(s=d[v])-1&&(f-=s),m=s;for(c||(f*=1e3),t.score=f-=i-r,t.indexes=new Array(p),v=p-1;0<=v;--v)t.indexes[v]=d[v];return t},prepareLowerCodes:function(e){for(var t=e.length,o=[],n=e.toLowerCase(),r=0;r<t;++r)o[r]=n.charCodeAt(r);return o},prepareBeginningIndexes:function(e){for(var t=e.length,o=[],n=0,r=!1,i=!1,l=0;l<t;++l){var s=e.charCodeAt(l),a=65<=s&&s<=90,d=a||97<=s&&s<=122||48<=s&&s<=57,s=a&&!r||!i||!d,r=a,i=d;s&&(o[n++]=l)}return o},prepareNextBeginningIndexes:function(e){for(var t=e.length,o=_.prepareBeginningIndexes(e),n=[],r=o[0],i=0,l=0;l<t;++l)l<r?n[l]=r:(r=o[++i],n[l]=void 0===r?t:r);return n},cleanup:t,new:e};return _}()});var GhostSearch=function(){function t(e){_classCallCheck(this,t),this.check=!1;e=this.mergeDeep({url:"",key:"",version:"v3",input:"#ghost-search-field",results:"#ghost-search-results",button:"",defaultValue:"",template:function(e){return'<a href="'+[location.protocol,"//",location.url].join("")+"/"+e.slug+'/">'+e.title+"</a>"},trigger:"focus",options:{keys:["title"],limit:10,threshold:-3500,allowTypo:!1},api:{resource:"posts",parameters:{limit:"all",fields:["title","slug"],filter:"",include:"",order:"",formats:"",page:""}},on:{beforeDisplay:function(){},afterDisplay:function(e){},beforeFetch:function(){},afterFetch:function(e){}}},e);Object.assign(this,e),this.init()}return _createClass(t,[{key:"mergeDeep",value:function(t,o){var n=this;return t&&"object"===_typeof(t)&&!Array.isArray(t)&&null!==t&&o&&"object"===_typeof(o)&&!Array.isArray(o)&&null!==o&&Object.keys(o).forEach(function(e){o[e]&&"object"===_typeof(o[e])&&!Array.isArray(o[e])&&null!==o[e]?(t[e]||Object.assign(t,_defineProperty({},e,{})),n.mergeDeep(t[e],o[e])):Object.assign(t,_defineProperty({},e,o[e]))}),t}},{key:"fetch",value:function(){var t=this;this.on.beforeFetch();var e,o=new GhostContentAPI({url:this.url,key:this.key,version:this.version}),n={},r=this.api.parameters;for(e in r)""!=r[e]&&(n[e]=r[e]);o[this.api.resource].browse(n).then(function(e){t.search(e)}).catch(function(e){console.error(e)})}},{key:"createElementFromHTML",value:function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}},{key:"displayResults",value:function(e){if(null!==document.querySelectorAll(this.results)[0].firstChild&&""!==document.querySelectorAll(this.results)[0].firstChild)for(;document.querySelectorAll(this.results)[0].firstChild;)document.querySelectorAll(this.results)[0].removeChild(document.querySelectorAll(this.results)[0].firstChild);var t=document.querySelectorAll(this.input)[0].value;""!=this.defaultValue&&(t=this.defaultValue);var o,n=fuzzysort.go(t,e,{keys:this.options.keys,limit:this.options.limit,allowTypo:this.options.allowTypo,threshold:this.options.threshold});for(o in n)o<n.length&&document.querySelectorAll(this.results)[0].appendChild(this.createElementFromHTML(this.template(n[o].obj)));this.on.afterDisplay(n),this.defaultValue=""}},{key:"search",value:function(t){var e,o=this;this.on.afterFetch(t),this.check=!0,""!=this.defaultValue&&(this.on.beforeDisplay(),this.displayResults(t)),""!=this.button?("INPUT"==(e=document.querySelectorAll(this.button)[0]).tagName&&"submit"==e.type&&e.closest("form").addEventListener("submit",function(e){e.preventDefault()}),e.addEventListener("click",function(e){e.preventDefault(),o.on.beforeDisplay(),o.displayResults(t)})):document.querySelectorAll(this.input)[0].addEventListener("keyup",function(e){o.on.beforeDisplay(),o.displayResults(t)})}},{key:"checkArgs",value:function(){return document.querySelectorAll(this.input).length?document.querySelectorAll(this.results).length?""==this.button||document.querySelectorAll(this.button).length?""==this.url?(console.log("Content API Client Library host missing. Please set the host. Must not end in a trailing slash."),!1):""!=this.key||(console.log('Content API Client Library key missing. Please set the key. Hex string copied from the "Integrations" screen in Ghost Admin.'),!1):(console.log("Button not found."),!1):(console.log("Results not found."),!1):(console.log("Input not found."),!1)}},{key:"validate",value:function(){return!!this.checkArgs()}},{key:"init",value:function(){var t=this;this.validate()&&(""!=this.defaultValue&&(document.querySelectorAll(this.input)[0].value=this.defaultValue,window.onload=function(){t.check||t.fetch()}),"focus"==this.trigger?document.querySelectorAll(this.input)[0].addEventListener("focus",function(e){t.check||t.fetch()}):"load"==this.trigger&&(window.onload=function(){t.check||t.fetch()}))}}]),t}();function parseMenuItemsFromContent(e){var t=e.contentContainer||"body",l=e.itemSelectors||"h2";"string"==typeof l&&(l=[l]);var s=[],a=[];return $(l.join(","),$(t)).each(function(e,t){var n=$(t),o=l.reduce(function(e,t,o){return e||(n.is(t)?t:e)},null),r=l.indexOf(o),i=n.text(),t=n.prop("id");t||(o=i.toLowerCase().replace(/ /g,"-").replace(/[^_\w\d-]/g,"_"),a[r]=o,t=a.slice(0,r+1).join("--"),n.prop("id",t)),s.push({id:t,text:i,level:r})}),s}function initScrollMenu(e){var t=e.menuContainer||"body",o=e.menuItems||[],n="boolean"!=typeof e.menuAlwaysVisible||e.menuAlwaysVisible,r=e.scrollDuration||300,l=e.scrollTopOffset||0,s=e.scrollBottomOffset||0,i="scroll-menu-"+Date.now()+"-"+Math.round(Math.random()*Date.now()),a="#"+i,d=[],c=!1;function u(n){$(d).each(function(e,t){var o="#"+t,t=t==n;$(o).toggleClass("active",t),$(a+' li a[href="'+o+'"]').closest("li").toggleClass("active",t)})}function h(e){var t=$(e);t.length&&(c=!0,$("html, body").animate({scrollTop:Math.round(t.offset().top-l)},r).promise().then(function(){u(e.replace("#","")),c=!1}))}function p(e){var t,o,n,r,i;c||(t=$(window).scrollTop(),i=$(window).height(),o=Math.round(t),n=Math.round(t+i),u((i=(r=d.map(function(e){var t,o=$("#"+e);return{id:e,top:t=o&&1==o.length?Math.round(o.offset().top):t}}).sort(function(e,t){return e.top-t.top})).filter(function(e,t){t=r[t+1],t=t&&t.top||n-s;return e.top<n&&o+l<t})[0])&&i.id))}function f(e){this.hash&&(e.preventDefault(),h(e=this.hash),location.hash=e)}$(document).ready(function(){var r;o.length&&((r=$("<ul></ul>").attr("data-menu-level",0).prop({id:i,class:"scroll-menu"})).toggleClass("visible",n),r.toggleClass("hidden",!n),o.forEach(function(e){var t=$("<a></a>",{href:"#"+e.id}).text(e.text),o=$("<li></li>").append(t),n=$("li",r).last();n.length?((t=$(n).parents('ul[data-menu-level="'+e.level+'"]')).length||(t=$("<ul></ul>").attr("data-menu-level",e.level),n.append(t)),t.append(o)):r.append(o),d.push(e.id)}),$(t).append(r),location.hash?h(location.hash):p(),$(document).on("scroll resize",p),$(d).each(function(e,t){$('a[href="#'+t+'"]').on("click",f)}),$(window).on("hashchange",function(e){c||h(location.hash)}))})}!function(t,o){var n,r,i,l,s,a,d,c;function u(){if(404===this.status)return t.removeEventListener("scroll",p),void t.removeEventListener("resize",f);this.response.querySelectorAll("article.post-card").forEach(function(e){r.appendChild(o.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?n.href=e.href:(t.removeEventListener("scroll",p),t.removeEventListener("resize",f)),c=o.documentElement.scrollHeight,s=l=!1}function e(){var e;s||(a+d<=c-i?l=!1:(s=!0,(e=new t.XMLHttpRequest).responseType="document",e.addEventListener("load",u),e.open("GET",n.href),e.send(null)))}function h(){l||t.requestAnimationFrame(e),l=!0}function p(){a=t.scrollY,h()}function f(){d=t.innerHeight,c=o.documentElement.scrollHeight,h()}o.documentElement.classList.contains("no-infinite-scroll")||(!(n=o.querySelector("link[rel=next]"))||(r=o.querySelector(".post-feed"))&&(s=l=!(i=300),a=t.scrollY,d=t.innerHeight,c=o.documentElement.scrollHeight,t.addEventListener("scroll",p,{passive:!0}),t.addEventListener("resize",f),h()))}(window,document);
//# sourceMappingURL=casper.js.map