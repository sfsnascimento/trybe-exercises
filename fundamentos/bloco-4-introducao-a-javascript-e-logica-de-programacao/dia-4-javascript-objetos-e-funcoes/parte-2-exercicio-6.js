/*
6.Crie uma função que receba um número inteiro N e retorne 
o somatório de todos os números de 1 até N.
*/

function soma(n){
  let somatorio = 0;
  for (let index = 1; index <= n; index += 1){
   somatorio += index;
  }
  return somatorio;
}
console.log(soma(5));