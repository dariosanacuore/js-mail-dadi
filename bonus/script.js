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
 

let parola1 = prompt("Inserisci la prima parola");
let parola2 = prompt("Inserisci la seconda parola");

if (parola1.length > parola2.length) {
    console.log(parola2);
    console.log(parola1);
} else {
    console.log(parola1);
    console.log(parola2);
}
    */


/**
 * Snack 3
Crea una variabile con un numero di 4 cifre e calcola la somma di tutte le cifre che compongono il numero.
 
let num = 1234;
const numStringa = num.toString();
let somma = 0;

for (let i = 0; i < numStringa.length; i++) {
    somma = somma + Number(numStringa[i]);
}
console.log(`La somma è: ${somma}`);
*/


/**
 * Snack 4
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
 

let N = prompt("Inserisci un numero");
let cubo;
for (let i = 1; i <= N; i++) {
    cubo = i * i * i;
    console.log(cubo);
}
    */

/**
 * Snack 5
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di 5 invitati con nome e cognome.
 

const nomi = [
    "Albert",
    "Leonardo",
    "Marilyn",
    "Michael",
    "Serena",
    "Elon",
    "Frida",
    "Steve",
    "Beyoncé",
    "David"
];

const cognomi = [
    "Einstein",
    "da Vinci",
    "Monroe",
    "Jackson",
    "Williams",
    "Musk",
    "Kahlo",
    "Jobs",
    "Knowles",
    "Beckham"
];

const invitati = [];

for (let i = 0; i < 5; i++) {
    const randomName = nomi[Math.floor(Math.random() * nomi.length)];
    const randomCognome = cognomi[Math.floor(Math.random() * cognomi.length)];

    const nomeCompleto = randomName + " " + randomCognome;
    invitati.push(nomeCompleto);
}


console.log(invitati)
*/

/**
 * Snack 6
Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
 */
const alunni = ["Dario", "Daniele", "Stefano", "Claudio"];
const maestri = ["Paolo", "Giorgio"];

if (alunni.length > maestri.length) {
    for (let i = maestri.length; i < alunni.length; i++) {
        maestri.push("Marco");
    }
} else if (maestri.length > alunni.length) {
    for (let i = alunni.length; i < maestri.length; i++) {
        alunni.push("Marco");
    }
}


console.log("Alunni:", alunni);
console.log("Maestri:", maestri);