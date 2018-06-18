/*Realizar un programa que nos pida un número n,
y nos diga cuantos números hay entre 1 y n que son primos*/
function primo(valor) {

    var arrPrimos = new Array();
    arrPrimos["Numero"] = new Array();

    var j = 0;
    var num = parseInt(valor);
    var cont_pri = 0;
    var primo = false;

    for (var i = 1; i <= num; i++) {
        primo = true;
        j = 2;
        while (j <= i - 1 && primo == true) {
            if (i % j == 0)
                primo = false;
            j++;
        }

        if (primo == true) {
            arrPrimos.push(i);
            cont_pri++;
        }
    }

    return [num, cont_pri, arrPrimos];
}
