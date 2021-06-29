/*
1.Crie uma função que receba uma string e retorne 
true se for um palíndromo , ou false , se não for.
*/


function verificaPalindrome(palavra){
  let palindromo = true;
  for(index = 0; index < palavra.length; index += 1){
    if(palavra[index] !== palavra[palavra.length - 1 - index]){
      palindromo = false;
      break;
  }
  }  
  return palindromo;
}
console.log(verificaPalindrome('arara'));