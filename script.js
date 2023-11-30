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

// Creo un Array contenente i numeri di User
userArr = [];

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

    let time = 5;
    clock = setInterval(
        function(){
            time--;
            console.log(time);
            if (time === 0) {
                clearInterval(clock);
                randomNumber.classList.add("nascondi");

                while (userArr < 5) {
                    // Chiedi all'utente di inserire un numero
                    let numeri = parseInt(prompt("Inserisci un numero:"));
                
                    // Verifica se il numero è dispari
                    if (numeriGenerati.includes(numeri)) {
                        // Inserisci il numero nell'array
                        alert("Hai indovinato un numero!");
                    } else {
                        alert("Il numero non è contenuto:(")
                    }
                }
            } 
        },
        1000
    );
}