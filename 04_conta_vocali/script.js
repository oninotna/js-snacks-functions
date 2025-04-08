/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali 
contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowelsCounter(stringToAnalize) {
    let vowelsNumber = 0;
    let vowelsList = "";
    for (let i = 0; i < stringToAnalize.length; i++) {
        const currentVowel = stringToAnalize[i].toLowerCase();
        if (currentVowel === 'a' ||
            currentVowel === 'e' ||
            currentVowel === 'i' ||
            currentVowel === 'o' ||
            currentVowel === 'u') {
                vowelsNumber += 1;
                vowelsList += vowelsNumber > 1 ? `,${currentVowel}` : `${currentVowel}`;
            }
    }
    console.log(`Il numero di vocali all'interno della stringa è: ${vowelsNumber}`);
    return vowelsList;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(`La stringa analizzata è: ${word}, le vocali trovate al suo interno: ${vowelsCounter(word)}`);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)