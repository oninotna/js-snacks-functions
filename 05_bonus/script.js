/* Scrivi una funzione che accetti una stringa contenente un nome e 
restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const userName = 'Mario';


// Dichiara la funzione qui.
function greetUser(name) {
    const currentTime = new Date();
    let greet;
    if (currentTime.getHours() > 17) greet = `buona sera ${name}`;
    if (currentTime.getHours() < 13) greet = `buongiorno ${name}`;
    if (currentTime.getHours() < 17) greet = `buon pomeriggio ${name}`;

    return greet;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(greetUser(userName));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.