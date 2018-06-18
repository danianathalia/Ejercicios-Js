/*Pedir el día, mes y año de una fecha e indicar si la fecha es correcta.
Con meses de 28, 30 y 31 días. Sin años bisiestos*/

function Comprobar(dia,mes,ano){
if (ano<1900 || ano>2030) {
  return "La fecha es Incorrecta";
}

if (dia>31 || dia<1 || mes>12 || mes<1) {
  return "La fecha es Incorrecta";
}else{
  if(mes == 2 && dia>28){
    return "La fecha es incorrecta";
  }else if (dia>30 && mes == 4 || dia>30 && mes == 6 || dia>30 && mes == 9 || dia>30 && mes == 11) {
      return "La fecha es incorrecta";
  }else if (dia>31 && mes == 1 || dia>31 && mes == 3 || dia>31 && mes == 5 || dia>31 && mes == 7 || dia>31 && mes == 8 || dia>31 && mes == 10 || dia>31 && mes == 12) {
      return "La fecha es incorrecta";
  }else {
      return "La fecha es correcta";
    }
  }
}
