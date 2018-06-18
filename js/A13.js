/*Una empresa que se dedica a la venta de desinfectantes necesita un programa
para gestionar las facturas. En cada factura figura: el código del artículo,
la cantidad vendida en litros y el precio por litro. Se pide de 5 facturas
 introducidas: Facturación total, cantidad en litros vendidos del artículo 1
 y cuantas facturas se emitieron de más de 600 €..*/

 var arrFacturas = new Array();
 arrFacturas["Codigo"] = new Array();
 arrFacturas["Litros"] = new Array();
 arrFacturas["Precio"] = new Array();

 function obtenerDatos(codigo, litros, precio) {

     var codigo = parseInt(codigo);
     var litros = parseInt(litros);
     var precio = parseInt(precio);


     arrFacturas["Codigo"].push(codigo);
     arrFacturas["Litros"].push(litros);
     arrFacturas["Precio"].push(precio);

     return "<tr><td>" + codigo + "</td><td>" + litros + "</td><td>" + precio + "</td></tr>";

 }

 function calcularDatos() {

     var facturacion_total = 0;
     var litros_cod1 = 0;
     var mas_600 = 0;
     var importe_factura = 0;

     for (var i = 0; i < 5; i++) {

         importe_factura = arrFacturas["Litros"][i] * arrFacturas["Precio"][i];
         facturacion_total += importe_factura;

         if (arrFacturas["Codigo"][i] == 1) {
             litros_cod1 += arrFacturas["Litros"][i];
         }

         if (importe_factura >= 600) {
             mas_600++;
         }
     }


     return "<strong>Facturación Total: </strong>" + facturacion_total +
         ".</br>" + "<strong>Litros del código no.1: </strong>" + litros_cod1 +
         ".</br>" + "<strong>Facturas emitidas de más de 600 €: </strong>" + mas_600 + ".</br>";

 }
