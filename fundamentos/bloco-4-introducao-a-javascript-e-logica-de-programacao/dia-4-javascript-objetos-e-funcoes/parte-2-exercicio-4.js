/*
4.Crie uma função que receba um array de nomes e retorne o nome 
com a maior quantidade de caracteres.
*/

function nomes(array){
  let maiorNome = array[0];
  for (let index = 0; index < array.length; index += 1){
    if (array[index].length > maiorNome.length){
      maiorNome = array[index];
    }
    }
  return maiorNome;
 } 
 console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));