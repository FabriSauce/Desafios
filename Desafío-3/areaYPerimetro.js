// Importa el módulo readline
const readline = require('readline');

// Crea una interfaz readline
const rl = readline.createInterface({
    input: process.stdin, // Establece la entrada estándar (teclado)
    output: process.stdout // Establece la salida estándar (terminal)
});

function calculateRectangle(height, width) {
    let area = height * width;
    let perimeter = 2 * (height + width);
    
    console.log(`El área es ${area} y el perímetro es ${perimeter}`);

}

rl.question('Dame la altura de la sala: ',(height) => {

    rl.question('Dame la anchura de la sala: ',(width) => {

        calculateRectangle(height, width);

        rl.close();
    });

});



