function encontrarMayorMenor(list) {
    
    let mayor = Math.max(...list);
    let menor = Math.min(...list);
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);