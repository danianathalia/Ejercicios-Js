/*Solicitar calificaciones desde 1 a 10 hasta que se ingrese como
calificación 0 (cero) y desplegar como resultado las materias cursadas,
las aprobadas y las reprobadas*/
var arrNotas = new Array();
arrNotas["Materia"] = new Array();
arrNotas["Nota"] = new Array();

function obtenerDatos(materia, nota) {

    var materia = materia;
    var nota = parseInt(nota);


    arrNotas["Materia"].push(materia);
    arrNotas["Nota"].push(nota);

    return "<tr><td>" + materia + "</td><td>" + nota + "</td></tr>";

}

function calcularNotas() {

    var aprobadas = 0;
    var reprobadas = 0;
    var noMaterias = 0;


    for (var i = 0; i < arrNotas["Materia"].length; i++) {

        if (arrNotas["Nota"][i] >= 7) {
            aprobadas++;
        } else {
            reprobadas++;
        }
    }


    return "<strong>Materias Cursadas: </strong> " + arrNotas["Materia"].length + ".</br>" + "<strong>Materias Aprobadas: </strong>" + aprobadas +
        ".</br>" + "<strong>Materias reprovadas: </strong>" + reprobadas + ".</br>";

}
