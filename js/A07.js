/*Solicitar al usuario el total de kilómetros que recorre su automóvil si con un
 litro se recorre 16.4 kilómetros, y desplegar cuantos litros de gasolina gastará,
 redondear el resultado para que no muestre decimales.*/
 function kilometros(km){

 	var resultado = (km/16.4);
 	var gasolina = parseInt(Math.ceil(resultado));
 	if(km<=0){
 		return ""+gasolina+" litros";
 	}else{
 		return " Los litros que gasto "+gasolina;
 	}

}
