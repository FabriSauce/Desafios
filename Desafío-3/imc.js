// Importa el módulo readline
const readline = require('readline');

// Crea una interfaz readline
const rl = readline.createInterface({
    input: process.stdin, // Establece la entrada estándar (teclado)
    output: process.stdout // Establece la salida estándar (terminal)
});

function calcularIMC(peso, altura) {

    let imc = peso / (altura * altura);
    
    return imc;
    
}
rl.question('Por favor, ingresa tu peso: ',(peso) =>{

    rl.question('Por favor, ingresa tu altura: ',(altura) => {

        let imc = calcularIMC(peso, altura);
        
        console.log(`Tu índice de masa corporal es de ${imc}`);

        rl.close();
    });

 

});

