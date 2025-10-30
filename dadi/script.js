/**
 * Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

 */
let playRandomNumber = Math.floor(Math.random() * 6) + 1;
let computerRandomNumber = Math.floor(Math.random() * 6) + 1;

console.log(`Il numero del giocatore è: ${playRandomNumber}`);
console.log(`Il numero del computer è: ${computerRandomNumber}`);

if (playRandomNumber > computerRandomNumber) {
    console.log(`Il giocatore ha vinto perchè ha ${playRandomNumber} come numero`);
} else if (playRandomNumber === computerRandomNumber) {
    console.log("Nessuno dei 2 ha vinto");
} else {
    console.log(`Il computer ha vinto perchè ha ${computerRandomNumber} come numero`);
}