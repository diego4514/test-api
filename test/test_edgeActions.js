/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         sym.$('simbolo1').draggable();
         sym.$ ('texto').hide();
         
         
         sym.$ ('base').droppable ({drop:function(){
         sym.$('texto').show(1000);
         sym.$ ('simbolo1').css({'background-color':'#eb2e59','border':'10px solid', 'border-color':'red'});
         sym.$ ('simbolo1').disable();
         
         
         }
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'uno'
   (function(symbolName) {   
   
   })("uno");
   //Edge symbol end:'uno'

   //=========================================================
   
   //Edge symbol: 'base'
   (function(symbolName) {   
   
   })("base");
   //Edge symbol end:'base'

   //=========================================================
   
   //Edge symbol: 'bien'
   (function(symbolName) {   
   
   })("bien");
   //Edge symbol end:'bien'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1364330764");