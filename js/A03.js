/* Por medio de un menú dar al usuario la opción de seleccionar
 círculo o circunferencia si selecciona círculo calcular su área.
  A=PI*r^2, si selecciona circunferencia calcular su longitud.
  Longitud = Diámetro * Pi ( L = D * Pi )
*/

  function calcular(radio, tipo) {
    const PI = 3.1419;

    if (tipo === "Circulo") {
      var area = PI*(Math.pow(radio, 2));
      return area;
    }else if (tipo == "Circunferencia") {
      var longitud = (radio * 2) * PI;
      return longitud;
    }else{
      console.log("Error opcion no valida");
      return false;
    }
  }
