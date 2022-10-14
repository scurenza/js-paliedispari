// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// Prendere un input
let userWord = [];
userWord = prompt ("Scrivi una parola e ti dirò se è o no palindroma");
console.log(userWord, typeof(userWord));
let lessLength = userWord.length - 1;
console.log(lessLength);

// Comparo le lettere della stringa con un ciclo for
for (let i = 0; i <userWord.length; i++) {
    if (userWord[i] === userWord[lessLength - i]) {
        console.log("é palindroma!");
    } else {
        console.log(("non è palindroma"));
    }
}
