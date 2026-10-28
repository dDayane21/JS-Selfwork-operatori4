let gattiTot = 44;
let gattiInFila = 6;

let numFile = Math.floor(gattiTot / gattiInFila);
console.log(numFile);


let resto = gattiTot % gattiInFila;
console.log(resto);

let mancanti = gattiInFila - resto;
console.log(mancanti);

console.log(`Ci sono ${numFile} file di gatti e ne mancano ${mancanti} per una nuova fila, con un avanzo di ${resto}`);


