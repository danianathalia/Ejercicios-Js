/*Un alumno desea comprar una computadora portátil en El Lago,
antes desea sabes cuánto le costará en realidad si le tiene que agregar
al precio de la LapTop, $300 pesos de impuestos que le cobran el Km.
30 el SAT, y con los Soldados, tiene que pagar de impuesto el 5% del valor
inicial de la LapTop. Cuánto le saldrá en total la LapTop.*/

function computadora(precio){
var impuestos = parseInt(precio) + 300;
var soldados = parseInt(impuestos)*0.05;
var total = parseInt(impuestos) + parseInt(soldados);

return "<strong>Usted debe pagar: </strong></br>"+
        "<strong>: $</strong>"+impuestos+" de Impuestos</br>"+
        "<strong>: $</strong>"+soldados+" de Impuesto a los soldados</br></br>"+
        "<strong>PRECIO TOTAL: $</strong>"+total+"</br>";


}
