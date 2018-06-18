/*Leer un número hasta que este sea diferente de 0 (cero), y desplegar
continuamente su suma y el número de datos solicitados.*/

function Leer(valor){
	var x=0;
	var suma=0;
	var valor;

while (x<=999)
{
	valor=prompt('Ingrese valor:','');
	valor=parseInt(valor);
	suma=suma+valor;
  x=x+1;
  document.getElementById("divResult").innerHTML = suma;
	if(valor==0){
		return "</br>La Sumatoria Total es: "+suma+"</br> La Cantidad de datos es: "+(x-1);
	}
}
  return suma;
}
