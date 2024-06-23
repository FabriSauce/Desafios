// Importa el módulo readline
const readline = require('readline');

// Crea una interfaz readline
const rl = readline.createInterface({
    input: process.stdin, // Establece la entrada estándar (teclado)
    output: process.stdout // Establece la salida estándar (terminal)
});

function calculateIMC(weight, height) {

    let imc = weight / (height * height);
    
    return imc;
    
}
rl.question('Por favor, ingresa tu peso: ',(weight) =>{

    rl.question('Por favor, ingresa tu altura: ',(height) => {

        let imc = calculateIMC(weight, height);
        
        console.log(`Tu índice de masa corporal es de ${imc}`);

        rl.close();
    });

 

});

