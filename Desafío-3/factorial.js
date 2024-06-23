// Importa el módulo readline
const readline = require('readline');

// Crear una interfaz readline
const rl = readline.createInterface({
    input: process.stdin, // Establece la entrada estándar (teclado)
    output: process.stdout // Establece la salida estándar (terminal)
});

function calculateFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }
  // Ejemplo
  rl.question('Por favor, ingresa un número para calcular su factorial: ', (num) =>{

    let result = calculateFactorial(num);

    console.log(`El factorial de ${num} es ${result}`);

    rl.close();

  });
  