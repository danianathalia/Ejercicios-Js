/*Realizar un juego para adivinar un número. Para ello pedir un número N,
 y luego ir pidiendo números indicando “mayor” o “menor” según sea mayor
 o menor con respecto a N. El proceso termina cuando el usuario acierta.*/
var numeroAdivinar=Math.floor((Math.random()*100)+1);

     function adivinarN(numero) {
         if(numero>numeroAdivinar){
             return "<br>"+numero+" - El numero que buscas es Menor";
         }else if(numero<numeroAdivinar){
             return "<br>"+numero+" - El numero que buscas es Mayor";
         }else{
             document.getElementById("numero").disabled=true;
             document.getElementById("btnEnviar").disabled=true;
             return "<br><span class='acertado'>"+numero+" - HAS ACERTADO!!</span>";
         }

     }
