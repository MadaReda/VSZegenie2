/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_buttonArticle01}", "click", function(sym, e) {
         // Empty content container
         sym.$("content").empty();
         // Create symbol for article
         sym.createChildSymbol("article01", "content");

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Center Stage
         sym.getSymbolElement().css("margin", "auto");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buttonArticle02}", "click", function(sym, e) {
         // Empty content container
         sym.$("content").empty();
         // Create symbol for article
         sym.createChildSymbol("article02", "content");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buttonArticle03}", "click", function(sym, e) {
         // Empty content container
         sym.$("content").empty();
         // Create symbol for article
         sym.createChildSymbol("article03", "content");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buttonArticle04}", "click", function(sym, e) {
         // Empty content container
         sym.$("content").empty();
         // Create symbol for article
         sym.createChildSymbol("article04", "content");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'article01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnLeft}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnRight}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("article01");
   //Edge symbol end:'article01'

   //=========================================================
   
   //Edge symbol: 'article01_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnLeft}", "click", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnRight}", "click", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      })("article02");
   //Edge symbol end:'article02'

   //=========================================================
   
   //Edge symbol: 'article02_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnLeft}", "click", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnRight}", "click", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      })("article03");
   //Edge symbol end:'article03'

   //=========================================================
   
   //Edge symbol: 'article03_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnLeft}", "click", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnRight}", "click", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      })("article04");
   //Edge symbol end:'article04'

})(jQuery, AdobeEdge, "EDGE-79003129");