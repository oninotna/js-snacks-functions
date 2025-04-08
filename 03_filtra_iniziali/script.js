/* Scrivi una funzione che accetti un'array di stringhe e una lettera e 
restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterArrayByFirstChar(arrayToAnalize, firstCharToSearch) {
    const filteredArray = [];
    for (let i = 0; i < arrayToAnalize.length; i++){
        const currentElement = arrayToAnalize[i].toLowerCase();
        if (currentElement[0] === firstCharToSearch.toLowerCase()) {
            filteredArray.push(currentElement);
        }
    }

    return filteredArray;
}

const filterArrayByFirstCharArrow = (arrayToAnalize, firstCharToSearch) => {
    const filteredArray = [];
    for (let i = 0; i < arrayToAnalize.length; i++){
        const currentElement = arrayToAnalize[i].toLowerCase();
        if (currentElement[0] === firstCharToSearch.toLowerCase()) {
            filteredArray.push(currentElement);
        }
    }

    return filteredArray;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(filterArrayByFirstChar(names, "A"));
console.log(filterArrayByFirstCharArrow(names, "a"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]