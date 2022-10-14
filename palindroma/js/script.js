// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// Prendere un input
let userWord = [];
userWord = prompt ("Scrivi una parola e ti dirò se è o no palindroma");

if (wordIsAPalindrome(userWord)) {
    console.log("La parola è palindroma!");
} else {
    console.log("La parola non è palindroma :(");
}



// Comparo le lettere della stringa con un ciclo for

// for (let i = 0; i <userWord.length; i++) {
//     if (userWord[i] === userWord[lessLength - i]) {
//         console.log("é palindroma!");
//     } else {
//         console.log(("non è palindroma"));
//     }
// }


function wordIsAPalindrome (wordToCheck) {
    let isPalindrome = false;
    let lessLength = wordToCheck.length - 1;
    for (let i = 0; i < wordToCheck; i++) {
        if (wordToCheck[i] === wordToCheck[lessLength - i]) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}