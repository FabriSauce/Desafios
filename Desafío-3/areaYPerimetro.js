// Importa el módulo readline
const readline = require('readline');

// Crea una interfaz readline
const rl = readline.createInterface({
    input: process.stdin, // Establece la entrada estándar (teclado)
    output: process.stdout // Establece la salida estándar (terminal)
});
// dame una funcion que calcule el area y el perimetro de un rectangulo utilizando la altura y anchura como parametros
function calcularRectangulo(altura, anchura) {
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);
    
    console.log(`El área es ${area} y el perímetro es ${perimetro}`);

}

rl.question('Dame la altura de la sala: ',(altura) => {

    rl.question('Dame la anchura de la sala: ',(anchura) => {

        calcularRectangulo(altura, anchura);

        rl.close();
    });

});



