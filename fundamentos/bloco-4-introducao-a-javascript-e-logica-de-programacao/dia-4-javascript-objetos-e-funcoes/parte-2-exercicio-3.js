/*
3.Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
*/

function indiceMenorValor(array){
  let menorNumero = 0;
  
  for (let index = 0; index < array.length; index += 1){
    if (array[index] < menorNumero){
      menorNumero = array[index];   
    }
  }
  return array.indexOf(menorNumero);
  }
  console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));