// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Faccio scegliere all'utente tra pari e dispari
let userChoose = prompt("Scegli tra pari o dispari");
while (userChoose !== 'pari' && userChoose !== 'dispari') {
    userChoose = prompt("Ti ho detto di scegliere tra pari o dispari!");
}
console.log(userChoose);

let userNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));
if (userNumber === NaN){
    userNumber = parseInt(prompt("Ti ho detto di scrivere un numero!"))
}

// if (userNumber != NaN || userNumber > 5 && userNumber < 1) {
//     userNumber = parseInt(prompt("Sei pregato di scegliere un numero valido"));
// }
console.log(userNumber);