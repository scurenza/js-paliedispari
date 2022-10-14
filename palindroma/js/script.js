// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// Prendere un input
let userWord = [];
userWord = prompt ("Scrivi una parola e ti dirò se è o no palindroma");
let normalWord = [];
let reverseWord = [];

if(wordIsAPalindrome(userWord)) {
    console.log("La parola è palindroma!");
} else {
    console.log("La parola non è palindroma:(");
}



/**
 * Description Check if a word is a palindrome
 * @param {string} wordToCheck
 * @returns {boolean} isPalindrome
 */

function wordIsAPalindrome (wordToCheck) {
    let isPalindrome = false;
    for (let i = 0; i < wordToCheck.length; i++) {
        normalWord += wordToCheck[i];
    }

    for(let j = wordToCheck.length - 1; j >= 0; j--) {
        reverseWord += wordToCheck[j];
    }

    if (normalWord === reverseWord) {
        isPalindrome = true;
        
    } else {
        isPalindrome = false;
    }
    return isPalindrome
}


// Ragionamento con cicli for

// for (let i = 0; i < userWord.length; i++) {
//     normalWord += userWord[i];
// }


// for (let j = userWord.length - 1; j >= 0; j--) {
//     reverseWord += userWord[j];
// }

// if (normalWord === reverseWord) {
//     console.log("La parola è palindroma!");
// } else {
//     console.log("La parola non è palindroma:(");
// }