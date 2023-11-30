/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


// Utilizzo della funzione per generare 5 numeri casuali compresi tra 1 e 10
var numeriGenerati = generaNumeriCasuali(1, 10, 5);
console.log(numeriGenerati);



// Funzioni

// Funzione per creare numeri casuali
function generaNumeriCasuali(min, max, quantita) {
    var numeriCasuali = [];

    for (var i = 0; i < quantita; i++) {
        var numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
        numeriCasuali.push(numeroCasuale);
    }

    return numeriCasuali;
}


