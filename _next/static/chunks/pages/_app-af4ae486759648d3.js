(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(a,b,c){"use strict";var d,e;a.exports=(null==(d=c.g.process)?void 0:d.env)&&"object"==typeof(null==(e=c.g.process)?void 0:e.env)?c.g.process:c(7663)},1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(573)}])},1665:function(a,b){"use strict";b.Z={src:"/web-project/_next/static/media/default.2a2131dd.svg",height:437,width:444}},9324:function(a,b,c){"use strict";c.d(b,{Il:function(){return e},qp:function(){return d.useContext}});var d=c(7294),e=(0,d.createContext)({});b.ZP=e},573:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return u}});var d=c(1799),e=c(5893),f=c(7294),g=c(9008),h=c.n(g),i=c(1163),j=c.n(i);c(906),c(3454);var k=c(9324),l={src:"/web-project/_next/static/media/compromiso-social.83cd9152.jpg",height:244,width:367,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArwf/xAAaEAACAwEBAAAAAAAAAAAAAAABAgMEETIA/9oACAEBAAE/AHow2LUV5+wmgFV6zA257//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AK//2Q=="},m=c(1665);l.src,l.src,m.Z;var n=[{title:"Chuy",place:"Rocha",date:"Lunes 3/10/22",hour:"08:30 a 14:30",description:"(Habilitada para Licencias de Conducir) JORNADA COMPLETA",mapSrc:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6557.188775743783!2d-56.087894!3d-34.7406171!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1666480283593!5m2!1ses-419!2suy"},{title:"Rocha",place:"Rocha",date:"Lunes 3/10/22",hour:"08:30 a 14:30",description:"(Habilitada para Licencias de Conducir) JORNADA COMPLETA",mapSrc:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6560.461523497149!2d-56.041219705195395!3d-34.699359137795476!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1666481830000!5m2!1ses-419!2suy"},{title:"Florida - Plaza Asamblea",place:"Florida",date:"Mi\xe9rcoles 21/9/22",hour:"08:00 a 13:30",description:"(Habilitada para Licencias de Conducir) JORNADA COMPLETA",mapSrc:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6558.786666911593!2d-56.065530557793664!3d-34.72047860814268!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1666481798799!5m2!1ses-419!2suy"},];c(4051);var o=c(3454);function p(){return q.apply(this,arguments)}function q(){return(q=_async_to_generator(regeneratorRuntime.mark(function a(){var b,c,d,e,f,g;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b="\n    query MyQuery {\n      articles {\n        id\n        published\n        subtitle\n        title\n        description\n        coverExtension: cover_extension\n        cover\n      }\n    }\n  ",c=o.env.HASURA_ADMIN_SECRET,a.next=4,fetch("https://clever-mollusk-49.hasura.app/v1/graphql",{method:"POST",headers:{"Content-Type":"application/json","x-hasura-admin-secret":"".concat(c)},body:JSON.stringify({query:b})});case 4:return d=a.sent,a.next=7,d.json();case 7:return g=(f=(e=a.sent).data.articles).map(function(a){var b=a.id,c=a.published,d=a.subtitle,e=a.title,f=a.description,g=a.cover,h=a.coverExtension;return{id:b,published:c,subtitle:d,title:e,description:f,cover:{url:g},coverExtension:{url:h}}}),a.abrupt("return",g);case 11:case"end":return a.stop()}},a)}))).apply(this,arguments)}function r(a){var b=a.children,c=function(a){h(a)},d=(0,f.useState)({donationPoints:n,donate:{stepActive:0},setContextState:c}),g=d[0],h=d[1];return(0,e.jsx)(k.ZP.Provider,{value:g,children:b})}var s=c(4865),t=c.n(s);c(4629);var u=function(a){var b=a.Component,c=a.pageProps;return(0,f.useEffect)(function(){var a=function(){return t().start()},b=function(){return t().done()};return j().events.on("routeChangeStart",a),j().events.on("routeChangeComplete",b),j().events.on("routeChangeError",b),function(){j().events.off("routeChangeStart",a),j().events.off("routeChangeComplete",b),j().events.off("routeChangeError",b)}},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(h(),{children:[(0,e.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,e.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,e.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;400;700&display=swap",rel:"stylesheet"}),(0,e.jsx)("title",{children:"Hemocentro"}),(0,e.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat("/web-project","/favicon_io/favicon.ico")})]}),(0,e.jsx)(r,{children:(0,e.jsx)(b,(0,d.Z)({},c))})]})}},4629:function(){},906:function(){},7663:function(a){!function(){var b={308:function(a){var b,c,d,e=a.exports={};function f(){throw Error("setTimeout has not been defined")}function g(){throw Error("clearTimeout has not been defined")}function h(a){if(b===setTimeout)return setTimeout(a,0);if((b===f||!b)&&setTimeout)return b=setTimeout,setTimeout(a,0);try{return b(a,0)}catch(c){try{return b.call(null,a,0)}catch(d){return b.call(this,a,0)}}}!function(){try{b="function"==typeof setTimeout?setTimeout:f}catch(a){b=f}try{c="function"==typeof clearTimeout?clearTimeout:g}catch(d){c=g}}();var i=[],j=!1,k=-1;function l(){j&&d&&(j=!1,d.length?i=d.concat(i):k=-1,i.length&&m())}function m(){if(!j){var a=h(l);j=!0;for(var b=i.length;b;){for(d=i,i=[];++k<b;)d&&d[k].run();k=-1,b=i.length}d=null,j=!1,function(a){if(c===clearTimeout)return clearTimeout(a);if((c===g||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(a);try{c(a)}catch(b){try{return c.call(null,a)}catch(d){return c.call(this,a)}}}(a)}}function n(a,b){this.fun=a,this.array=b}function o(){}e.nextTick=function(a){var b=Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];i.push(new n(a,b)),1!==i.length||j||h(m)},n.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=o,e.addListener=o,e.once=o,e.off=o,e.removeListener=o,e.removeAllListeners=o,e.emit=o,e.prependListener=o,e.prependOnceListener=o,e.listeners=function(a){return[]},e.binding=function(a){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(a){throw Error("process.chdir is not supported")},e.umask=function(){return 0}}},c={};function d(a){var e=c[a];if(void 0!==e)return e.exports;var f=c[a]={exports:{}},g=!0;try{b[a](f,f.exports,d),g=!1}finally{g&&delete c[a]}return f.exports}d.ab="//";var e=d(308);a.exports=e}()},9008:function(a,b,c){a.exports=c(5443)},1163:function(a,b,c){a.exports=c(387)},4865:function(a,b,c){var d,e; /* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */ !function(f,g){void 0!==(e="function"==typeof(d=g)?d.call(b,c,b,a):d)&&(a.exports=e)}(this,function(){var a={};a.version="0.2.0";var b,c,d=a.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function e(a,b,c){return a<b?b:a>c?c:a}function f(a){return(-1+a)*100}a.configure=function(a){var b,c;for(b in a)void 0!==(c=a[b])&&a.hasOwnProperty(b)&&(d[b]=c);return this},a.status=null,a.set=function(b){var c=a.isStarted();b=e(b,d.minimum,1),a.status=1===b?null:b;var i=a.render(!c),j=i.querySelector(d.barSelector),k=d.speed,l=d.easing;return i.offsetWidth,g(function(c){var e,g,m,n;""===d.positionUsing&&(d.positionUsing=a.getPositioningCSS()),h(j,(e=b,g=k,m=l,(n="translate3d"===d.positionUsing?{transform:"translate3d("+f(e)+"%,0,0)"}:"translate"===d.positionUsing?{transform:"translate("+f(e)+"%,0)"}:{"margin-left":f(e)+"%"}).transition="all "+g+"ms "+m,n)),1===b?(h(i,{transition:"none",opacity:1}),i.offsetWidth,setTimeout(function(){h(i,{transition:"all "+k+"ms linear",opacity:0}),setTimeout(function(){a.remove(),c()},k)},k)):setTimeout(c,k)}),this},a.isStarted=function(){return"number"==typeof a.status},a.start=function(){a.status||a.set(0);var b=function(){setTimeout(function(){a.status&&(a.trickle(),b())},d.trickleSpeed)};return d.trickle&&b(),this},a.done=function(b){return b||a.status?a.inc(.3+.5*Math.random()).set(1):this},a.inc=function(b){var c=a.status;return c?("number"!=typeof b&&(b=(1-c)*e(Math.random()*c,.1,.95)),c=e(c+b,0,.994),a.set(c)):a.start()},a.trickle=function(){return a.inc(Math.random()*d.trickleRate)},b=0,c=0,a.promise=function(d){return d&&"resolved"!==d.state()&&(0===c&&a.start(),b++,c++,d.always(function(){0== --c?(b=0,a.done()):a.set((b-c)/b)})),this},a.render=function(b){if(a.isRendered())return document.getElementById("nprogress");j(document.documentElement,"nprogress-busy");var c=document.createElement("div");c.id="nprogress",c.innerHTML=d.template;var e,g=c.querySelector(d.barSelector),i=b?"-100":f(a.status||0),k=document.querySelector(d.parent);return h(g,{transition:"all 0 linear",transform:"translate3d("+i+"%,0,0)"}),!d.showSpinner&&(e=c.querySelector(d.spinnerSelector))&&m(e),k!=document.body&&j(k,"nprogress-custom-parent"),k.appendChild(c),c},a.remove=function(){k(document.documentElement,"nprogress-busy"),k(document.querySelector(d.parent),"nprogress-custom-parent");var a=document.getElementById("nprogress");a&&m(a)},a.isRendered=function(){return!!document.getElementById("nprogress")},a.getPositioningCSS=function(){var a=document.body.style,b="WebkitTransform"in a?"Webkit":"MozTransform"in a?"Moz":"msTransform"in a?"ms":"OTransform"in a?"O":"";return b+"Perspective" in a?"translate3d":b+"Transform" in a?"translate":"margin"};var g=function(){var a=[];function b(){var c=a.shift();c&&c(b)}return function(c){a.push(c),1==a.length&&b()}}(),h=function(){var a=["Webkit","O","Moz","ms"],b={};function c(c,d,e){var f,g;d=b[f=(g=f=d).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()})]||(b[f]=function(b){var c=document.body.style;if(b in c)return b;for(var d,e=a.length,f=b.charAt(0).toUpperCase()+b.slice(1);e--;)if((d=a[e]+f)in c)return d;return b}(f)),c.style[d]=e}return function(a,b){var d,e,f=arguments;if(2==f.length)for(d in b)void 0!==(e=b[d])&&b.hasOwnProperty(d)&&c(a,d,e);else c(a,f[1],f[2])}}();function i(a,b){return("string"==typeof a?a:l(a)).indexOf(" "+b+" ")>=0}function j(a,b){var c=l(a);i(c,b)||(a.className=(c+b).substring(1))}function k(a,b){var c,d=l(a);i(a,b)&&(c=d.replace(" "+b+" "," "),a.className=c.substring(1,c.length-1))}function l(a){return(" "+(a.className||"")+" ").replace(/\s+/gi," ")}function m(a){a&&a.parentNode&&a.parentNode.removeChild(a)}return a})},1799:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{Z:function(){return e}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(387)}),_N_E=a.O()}])