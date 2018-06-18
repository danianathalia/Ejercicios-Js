/*Pedir al usuario cuántas millas desea convertir en
milímetros, centímetros, metros, kilómetros, yardas, pies y pulgadas.
Desplegar en todas estas conversiones.
 1 km equivale a 0,6214 millas.
 1 millas equivale a 1760 yardas.
 1 yarda equivale a 3ft.
 1 yarda equivale a 36 pulgadas.*/
function convertir(millas){
var milimetros = millas * 1609.344 * 1000;
var centimetros = millas*1609.344*100;
var metros = millas * 1609.344 ;
var kilometros = millas / 0.6214 ;
var yardas = 1760 * millas;
var pies = millas * 5280;
var pulgadas = millas*63360;

return "<strong>Milimetros: </strong>"+milimetros+"</br>"+
        "<strong>Centimetros: </strong>"+centimetros+"</br>"+
        "<strong>Metros: </strong>"+metros+"</br>"+
        "<strong>Kilometros: </strong>"+kilometros+"</br>"+
        "<strong>Yardas: </strong>"+yardas+"</br>"+
        "<strong>Pies: </strong>"+pies+"</br>"+
        "<strong>pulgadas: </strong>"+pulgadas+"</br>";


}
