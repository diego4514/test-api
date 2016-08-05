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
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
            yepnope {nope:['jquery-ui-1.10.4.custom.min'], complete: init});
            
            function init() {
               sym.$('circ').draggable();
            
            
            }    

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'AA2'
   (function(symbolName) {   
   
   })("circulo");
   //Edge symbol end:'circulo'

   //=========================================================
   
   //Edge symbol: 'Rectangle'
   (function(symbolName) {   
   
   })("cuadrado");
   //Edge symbol end:'cuadrado'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1360322852");