/*borschik:include:../../node_modules/bem-techs-core/node_modules/ym/modules.js*/;
/*borschik:include:../../desktop.blocks/grid/grid.js*/;
/*borschik:include:../../desktop.blocks/fonts/fonts.js*/;
/*borschik:include:../../desktop.blocks/candies/candies.js*/;
/*borschik:include:../../desktop.blocks/colors/colors.js*/;
/*borschik:include:../../desktop.blocks/recent-posts/recent-posts.js*/;
/*borschik:include:../../desktop.blocks/github/__jquery/github__jquery.js*/;
/*borschik:include:../../desktop.blocks/github/github.js*/;
(function(g) {

  var __xjst = (function(exports) {

     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){__$ctx.__$a=0}[].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){}});;
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
