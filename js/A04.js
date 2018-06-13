/*Pedir un número entre 0 y 9.999 y mostrarlo con las cifras al revés.*/

function rev() {
	text=document.form.text.value;
	var voltear="";
	for(count=text.length; count >= 0; count--)
	voltear+=text.substring(count,count-1);
	document.form.text.value=voltear;
}


function invertir(){
	var numero = document.getElementById("valor").value;

		while( parseInt(numero / 10) != 0 ){
	    document.getElementById("resultado").innerHTML += (numero % 10);
	    numero = parseInt(numero / 10);
		    if(parseInt(numero/10) == 0){
		        document.getElementById("resultado").innerHTML += (numero % 10);
		    }
		}

}
