// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Faccio scegliere all'utente tra pari e dispari
let userChoose = prompt("Scegli tra pari o dispari");

// Se la parola è diversa da pari o dispari
while (userChoose !== 'pari' && userChoose !== 'dispari') {
    userChoose = prompt("Ti ho detto di scegliere tra pari o dispari!");
}
console.log(userChoose);

// Faccio scegliere all'utente un numero da 1 a 5
let userNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));

// Se non è un numero
while (isNaN(userNumber)){
    userNumber = parseInt(prompt("Ti ho detto di scrivere un numero!"))
}

// Se il numero non è compreso tra 1 e 5
while (userNumber < 1 || userNumber > 5) {
    userNumber = parseInt(prompt("Il numero deve essere compreso tra 1 e 5"))
}

console.log(userNumber);



// Numero del pc
// let computerNumber = Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
let computerNumber = rndComputer(1,5);
console.log(computerNumber);

let sum = userNumber + computerNumber;
console.log(sum);


// Funzione per generare un numero random per il pc

/**
 * Description
 * @param {number} min
 * @param {number} max
 * @returns {number} random number including min and max
 */

function rndComputer (min, max) {
    let rndComputerNum = Math.floor(Math.random() * (max - min + 1) ) + 1;
    return rndComputerNum;
}




let odd = oddOrEven(sum);
console.log('Il numero è pari? ',odd);

// Pari o Dispari?
function oddOrEven (numbersSum) {
    let isOdd = false;
    if (numbersSum % 2 == 0) {
        isOdd = true;
    } else {
        isOdd = false;
    }
    return isOdd
    
}



// OUTPUT
if (userChoose === 'pari' && odd) {
    console.log("ha vinto l'utente!");
}

if (userChoose === 'dispari' && odd) {
    console.log("ha vinto il computer!");
}

if (userChoose === 'dispari' && !odd) {
    console.log("ha vinto l'utente!");
}

if (userChoose === 'pari' && !odd) {
    console.log("ha vinto il computer!");
}
