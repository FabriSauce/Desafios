// Importa el módulo readline
const readline = require('readline');

// Crea una interfaz readline
const rl = readline.createInterface({
    input: process.stdin, // Establece la entrada estándar (teclado)
    output: process.stdout // Establece la salida estándar (terminal)
});


function showMultiplicationTable(num) {

    for (let i = 0; i <= 10; i++) {

       var result = num * i;

       console.log(num + " x " + i + " = " + result);
        
    }
}

rl.question('Dime que tabla de multiplicar quieres saber? ', (num) => {

    showMultiplicationTable(num);

    rl.close();
})