/*Pedir un número entre 0 y 9.999, decir si es capicúa*/
function verificarCapicua(numero){

	var numInvertido = numero.toString();
	numInvertido = numInvertido.split('');
	numInvertido =  numInvertido.reverse().join('');

	if (numero == numInvertido) {
		return "El número " + numero + " es capicúa";
	}else{
		return "El número " + numero + " no es capicúa";
	}
}
