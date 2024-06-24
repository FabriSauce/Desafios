// Lista vacía
let listaGenerica = [];

// lista de lenguajes de programación
let lenguajes = ["JavaScript", "Python", "Java", "C++", "Ruby"];

lenguajes.push("C#","GoLang", "Pascal");

console.log(lenguajes);

// Función que imprime por consola cada lenguaje que hay en la lista
function toListLanguages() {

    for (let index = 0; index < lenguajes.length; index++) {
        
        console.log(lenguajes[index]);
        
    }
    
}

toListLanguages();

// función inversa de la lista de lenguajes

function inverseListLanguages() {

    lenguajes.reverse();

    lenguajes.forEach((item, index) => {
        console.log(`${index}: ${item}`)
    });
    
}
console.log("Aqui va la lista de lenguajes en inversa: ");
inverseListLanguages();