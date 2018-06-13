/*
  A02: Calcular cuanta distancia en kilómetros recorre la velocidad de la luz en el espacio en 800
  días.

*/

const LuzxHora = 1080000000; //Velocidad de la luz en una hora

function velocidadLuz(Dias){
  var n_horas = Dias * 24;
  var resultado = LuzxHora * n_horas;
  return resultado;
}
