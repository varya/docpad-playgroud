(function(g) {

  var __xjst = (function(exports) {

     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="content"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="tag"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="default"){var __$t=__$ctx.block;if(__$t==="footer"){if(!__$ctx.elem&&__$ctx["__$anflg1"]!==true){__$ctx.__$a=0;var __$r=__$b19(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="social-ico"){if(__$ctx.elem==="ico"&&__$ctx["__$anflg3"]!==true){__$ctx.__$a=0;var __$r=__$b20(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.elem&&__$ctx["__$anflg2"]!==true){__$ctx.__$a=0;var __$r=__$b21(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}}else if(__$t==="mix"){var __$t=__$ctx.block;if(__$t==="related"){if(__$ctx.elem==="text"){__$ctx.__$a=0;return[{block:"box",elem:"island"}]}}else if(__$t==="article"){if(__$ctx.elem==="text"){__$ctx.__$a=0;return[{block:"box",elem:"island"}]}}}else if(__$t==="cls"){if(__$ctx.block==="article"&&__$ctx.elem==="details"){__$ctx.__$a=0;return"author vcard"}}__$ctx.__$a=0}[].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$anflg1=false;ctx.ctx=undefined;ctx.__$anflg3=false;ctx._mode=undefined;ctx.__$anflg2=false}});function __$b19(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$0;var __$l0__$1=__$ctx.__$anflg1;__$ctx.__$anflg1=true;var __$r__$2;var __$l1__$3=__$ctx.ctx;__$ctx.ctx={block:"footer",elem:"outer",content:__$ctx.ctx};applyc(__$ctx,__$ref);__$r__$2=undefined;__$ctx.ctx=__$l1__$3;__$r__$0=undefined;__$ctx.__$anflg1=__$l0__$1;return}function __$b20(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$4;var __$l0__$5=__$ctx.__$anflg3;__$ctx.__$anflg3=true;var __$r__$6;var __$l1__$7=__$ctx._mode;__$ctx._mode="";var __$l2__$8=__$ctx.ctx;__$ctx.ctx={block:"link",mix:[{block:__$ctx.ctx.block,elem:__$ctx.ctx.elem,mods:__$ctx.ctx.mods}],url:__$ctx.ctx.url,title:__$ctx.ctx.title,target:"_blank"};applyc(__$ctx,__$ref);__$r__$6=undefined;__$ctx._mode=__$l1__$7;__$ctx.ctx=__$l2__$8;__$r__$4=undefined;__$ctx.__$anflg3=__$l0__$5;return}function __$b21(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$9;var __$l0__$10=__$ctx.__$anflg2;__$ctx.__$anflg2=true;var __$r__$11;var __$l1__$12=__$ctx._mode;__$ctx._mode="";var __$l2__$13=__$ctx.ctx;__$ctx.ctx={block:"menu-vert",mix:[{block:"social-ico"}],content:[{elem:"item",content:[{block:"menu-vert",mix:[{block:"social-ico",elem:"text"}],content:[{elem:"item",content:{block:"link",mix:[{block:"social-ico",elem:"rss-text"}],url:"/en/feed.xml",title:"New on Varya.me in English",content:"en"}},{elem:"item",content:{block:"link",mix:[{block:"social-ico",elem:"rss-text"}],url:"/ru/feed.xml",title:"Новые записи на Varya.me",content:"ru"}}]},{block:"social-ico",elem:"ico",mods:{type:"rss"},url:"/feed.xml",title:"New on Varya.me in both English and Russian"}]},{elem:"item",content:{block:"social-ico",elem:"ico",mods:{type:"twitter"},url:"https://twitter.com/toivonens"}},{elem:"item",content:{block:"social-ico",elem:"ico",mods:{type:"github"},url:"https://github.com/toivonen"}},{elem:"item",content:{block:"social-ico",elem:"ico",mods:{type:"facebook"},url:"https://www.facebook.com/varvara.stepanova.9"}},{elem:"item",content:{block:"social-ico",elem:"ico",mods:{type:"linkedin"},url:"http://www.linkedin.com/pub/varvara-stepanova/30/72a/96b"}}]};applyc(__$ctx,__$ref);__$r__$11=undefined;__$ctx._mode=__$l1__$12;__$ctx.ctx=__$l2__$13;__$r__$9=undefined;__$ctx.__$anflg2=__$l0__$10;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="footer"){var __$t=__$ctx.elem;if(__$t==="right"){__$ctx.__$a=0;return"O"}else if(__$t==="center"){__$ctx.__$a=0;return"xxx"}else if(__$t==="left"){__$ctx.__$a=0;return[{block:"b-menu-vert",content:[{elem:"item",content:{block:"b-link",url:"#",content:"Blog"}},{elem:"item",content:{block:"b-link",url:"#",content:"Articles and talks"}},{elem:"item",content:{block:"b-link",url:"#",content:"About me"}}]}]}}else if(__$t==="github"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"header",content:[{elem:"title",content:"Me on GitHub",mix:{block:"box",elem:"title"}}]},{elem:"body"}]}}else if(__$t==="related"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"body",mix:{block:"box",elem:"body"},content:[{elem:"header",content:"Related info"}]},{elem:"text",content:__$ctx.ctx.text}]}}else if(__$t==="header"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"left",mix:{block:"candies",js:{size:{max:28,min:12},reverse:true}}},{block:"logo",mix:{block:"header",elem:"center"}},{elem:"right",mix:{block:"candies",js:{size:{max:28,min:12}}}}]}}else if(__$t==="article"){if(__$ctx.elem==="text"){__$ctx.__$a=0;return[{block:"share"},__$ctx.ctx.content]}if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"body",mix:{block:"box",elem:"body"},content:[{elem:"header",content:__$ctx.ctx.title},{elem:"details",content:"by Varya Stepanova on 29th April"}]},{elem:"text",content:__$ctx.ctx.text}]}}else if(__$t==="logo"){if(!__$ctx.elem){__$ctx.__$a=0;return'&sdot;&sdot;&sdot;<b class="var">var</b>&sdot;<b class="ya">ya</b>;<b class="cursor"></b>'}}return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="footer"){if(!__$ctx.elem){__$ctx.__$a=0;return"footer"}}else if(__$t==="prompting"){if(!__$ctx.elem){__$ctx.__$a=0;return"aside"}}else if(__$t==="sidebar"){if(!__$ctx.elem){__$ctx.__$a=0;return"nav"}}else if(__$t==="related"){if(__$ctx.elem==="header"){__$ctx.__$a=0;return"h4"}}else if(__$t==="header"){if(!__$ctx.elem){__$ctx.__$a=0;return"header"}}else if(__$t==="article"){var __$t=__$ctx.elem;if(__$t==="header"){__$ctx.__$a=0;return"h1"}else if(__$t==="details"){__$ctx.__$a=0;return"span"}}else if(__$t==="main"){if(!__$ctx.elem){__$ctx.__$a=0;return"section"}}else if(__$t==="logo"){if(!__$ctx.elem){__$ctx.__$a=0;return"logo"}}return __$ref};
     return exports;
  })({});
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __xjst;
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML", function(provide) { provide(__xjst) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __xjst);
})(this);