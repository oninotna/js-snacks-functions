/* Scrivi una funzione che accetti una stringa contenente un nome e 
restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function greetUser(name) {
    return `ciao ${name}`;
}

const greetUserArrow = (name) => {
    return `ciao ${name}`;
}

const greetUserArrowImplicit = name => `ciao ${name}`;


// Invoca la funzione qui e stampa il risultato in console
console.log(greetUser(userName));
console.log(greetUserArrow(userName));
console.log(greetUserArrowImplicit(userName));



//Risultato atteso se si passa 'Mario': // ciao Mario
