/*
2.Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
*/

function indiceMaiorValor(array){
let maiorNumero = 0;

for (let index = 0; index < array.length; index += 1){
  if (array[index] > maiorNumero){
    maiorNumero = array[index];   
  }
}
return array.indexOf(maiorNumero);
}
console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));