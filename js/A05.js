/*Dadas las edades y alturas de 5 alumnos, mostrar la edad y la estatura media,
la cantidad de alumnos mayores de 18 años, y la cantidad de alumnos que miden más de 1.75.*/
var arrAlumnos = new Array();
arrAlumnos["Edad"] = new Array();
arrAlumnos["Estatura"] = new Array();

function obtenerDatos (edad, estatura){

  var edad = parseInt(edad);
  var estatura = parseInt(estatura);

  arrAlumnos["Edad"].push(edad);
  arrAlumnos["Estatura"].push(estatura);

  return "<tr><td>"+edad+"</td><td>"+estatura+"</td></tr>";

}

function calcularDatos() {

  var EdadMedia = 0;
  var EstaturaMedia = 0;
  var Mayores = 0; //Mayores de 18
  var Altos = 0; //Mayores de 1.75

  for (var i = 0; i < 5; i++) {
    EdadMedia += arrAlumnos["Edad"][i];
    EstaturaMedia += arrAlumnos["Estatura"][i];

    if(arrAlumnos["Edad"][i] >= 18){
      Mayores++;
    }

    if(arrAlumnos["Estatura"][i] >= 175){
      Altos++;
    }

  }

  EdadMedia = EdadMedia / 5;
  EstaturaMedia = EstaturaMedia / 5;

  arrAlumnos["Estatura"]=new Array();
  arrAlumnos["Edad"]=new Array();

  return "<strong>Edad Media: </strong>"+EdadMedia+
                  ".</br>"+"<strong>Estatura Media: </strong>"+EstaturaMedia+
                  ".</br>"+"<strong>Mayores de 18: </strong>"+Mayores+".</br>"+
                  "<strong>Mayores de 175 cm: </strong>"+Altos+".</br>";

}
