/* Scrivi una funzione che accetti un array di nomi e 
restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function searchAndSaveFirstChar(arrayToAnalize) {
    const firstCharArray = [];
    for (let i = 0; i < arrayToAnalize.length; i++) {
        const currentElement = arrayToAnalize[i];
        firstCharArray.push(currentElement[0]);
    }

    return firstCharArray;
}

const searchAndSaveFirstCharArrow = (arrayToAnalize) => {
    const firstCharArray = [];
    for (let i = 0; i < arrayToAnalize.length; i++) {
        const currentElement = arrayToAnalize[i];
        firstCharArray.push(currentElement[0]);
    }

    return firstCharArray;
}



// Invoca la funzione qui e stampa il risultato in console
console.log(searchAndSaveFirstChar(names));
console.log(searchAndSaveFirstCharArrow(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]