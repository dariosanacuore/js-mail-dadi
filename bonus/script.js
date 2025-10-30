/**
 * Snack 1
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

 */

/**
 * 1)Chiedo all'utente di inserire un numero
 * 2)Con if controllo se è pari ed in quel caso  stampo il numero
 * altrimenti stampo num aggiundo 1
 

num = parseInt(prompt("Inserisci un numero"));
if (num % 2 === 0) {
    console.log(num);
} else if (num % 2 !== 0) {
    let dispari = num + 1;
    console.log(dispari);
}
    */


/**
 * Snack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */

/**
 * Scrivo 2 prompt per permettere all'utente di inserire 2 parole in successiome
 * 2)Se parola1.length>parola2.length
 * allora stampo prima parola2 e poi parola1 e viceversa
 */

let parola1 = prompt("Inserisci la prima parola");
let parola2 = prompt("Inserisci la seconda parola");

if (parola1.length > parola2.length) {
    console.log(parola2);
    console.log(parola1);
} else {
    console.log(parola1);
    console.log(parola2);
}

