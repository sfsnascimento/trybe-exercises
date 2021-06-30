/*
5.Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
*/


function maisSeRepete(inteiros){
  let repeticao = 0;
  for (index = 0; index < inteiros.length; index += 1){
    for(i = 0; i < inteiros.length; i += 1){
      if (inteiros[index] === inteiros[i]){
          repeticao += 1;
      }
    }
  }
  return repeticao;
}
console.log(maisSeRepete([2, 3, 2, 5, 8, 2, 3]));