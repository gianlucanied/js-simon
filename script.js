/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


// Utilizzo della funzione per generare 5 numeri casuali compresi tra 1 e 10
var numeriGenerati = generaNumeriCasuali(1, 100, 5);
console.log(numeriGenerati);

// Creiamo la var per i numeri random generati
const randomNumber = document.getElementById("random-number");

// Stampiamoli in pagina
randomNumber.innerHTML = numeriGenerati;

// Impostiamo il timer di 30 secondi per i numeri generati
setTimeout(nascondiNumero, 1000);

// Funzioni

// Funzione per creare numeri casuali
function generaNumeriCasuali(min, max, length) {
    var numeriCasuali = [];

    for (var i = 0; i < length; i++) {
        var numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
        numeriCasuali.push(numeroCasuale);
    }

    return numeriCasuali;
}

// Funzione per nascondere numeri
function nascondiNumero() {

    let time = 30;
    clock = setInterval(
        function(){
            time--;
            console.log(time);
            if (time === 0) {
                clearInterval(clock);
                randomNumber.classList.add("nascondi");
            } 
        },
        1000
    );
}