function calcularSuma(nums) {

    /* SINTAXIS DEL MÉTODO REDUCE

    array.reduce(callback(acumulador, valorActual, índice, array), valorInicial)
    
    */ 
    return nums.reduce((suma, nums) => suma + nums, 0);  
}
  
  let nums = [15, 8, 25, 5, 12];
  let suma = calcularSuma(nums);
  console.log('Suma:', suma);