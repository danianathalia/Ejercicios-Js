/*Dadas las edades y alturas de 5 alumnos, mostrar la edad y la estatura media,
la cantidad de alumnos mayores de 18 años, y la cantidad de alumnos que miden más de 1.75.*/
var edad = "";
var estatura = "";
var edadMedia = "";
var alturaMedia = "";
var sumaEdad = "";
var sumaAltura = "";
var contE = "";
var contA = "";

function alumnos() {
  for(var i=0;i<=5;i++)
   {
       edad=document.getElementById("edad").value;

       estatura=document.getElementById("altura").value;

       if(edad>18)
       {
           contE++;
           sumaEdad=sumaEdad+edad;
           console.log(sumaEdad);
       }
       if(estatura>(1.75))
       {
           contA++;
           sumaAltura=sumaAltura+altura;
           console.log(sumaAltura);
       }

   }
   edadMedia=sumaEdad/contE;
   console.log(edadMedia);
   alturaMedia=sumaAltura/contA;
   console.log(alturaMedia);

   return {"Edad Media: ":edadMedia, "Altura Media: ":alturaMedia, "Alumnos mayores de 18: ":sumaEdad, "Alumnos que miden mas de 1.75: ":sumaAltura};
  }
