/**
 * Mail
Crea un array con delle email di chi può acedere.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON USARE INCLUDES!
 */

/**
 * 1)Creo un array con le email
 * 2)uso un ciclo for per scorrere dentro l'array e chiedo all'utente la sua email
 * 3)Dopo verifico attraverso il blocco if se l'email dell'utente è presente nella lista
 * 4)Stampo l'output
 */

const email = ["dario@gmail.com", "vitorossi@gmail.com", "aldo@gmail.com", "giovannipapale@gmail.com"];

let isEmailPresent = false;
let emailInput = prompt("Inserisci la tua email");
for (let i = 0; i < email.length; i++) {
    curEmail = email[i];
    console.log(curEmail, i);
    if (emailInput === email[i]) {
        isEmailPresent = true;

    }
}
