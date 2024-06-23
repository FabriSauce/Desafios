// Importa el módulo readline
const readline = require('readline');

// Crea una interfaz readline
const rl = readline.createInterface({
    input: process.stdin, // Establece la entrada estándar (teclado)
    output: process.stdout // Establece la salida estándar (terminal)
});

function dolarsConversor(dolars) {

    var priceDolar = 901

    var pesos = dolars * priceDolar;

    return pesos;
    
}

rl.question('Ingresa cantidad de dolares que queres convertir: ', (dolarsInExistence) =>{

    let valueInPesos= dolarsConversor(dolarsInExistence);
    
    console.log(`${dolarsInExistence} dólares es $ ${valueInPesos} pesos`);

    rl.close();
})