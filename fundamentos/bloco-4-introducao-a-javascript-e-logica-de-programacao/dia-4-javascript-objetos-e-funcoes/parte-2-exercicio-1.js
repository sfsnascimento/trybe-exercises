/*
1.Crie uma função que receba uma string e retorne 
true se for um palíndromo , ou false , se não for.
*/
let palindromo = true;

function verificaPalindrome(palavra){
  for(index = 0; index < palavra.length; index += 1){
    if(palavra[index] !== palavra[palavra.length - 1 - index]){
      palindromo = false;
      break;
  }
  }  
  return palindromo;
}
console.log(verificaPalindrome('arara'));