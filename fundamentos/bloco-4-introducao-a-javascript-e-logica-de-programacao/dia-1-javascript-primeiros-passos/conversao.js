/*
7.Escreva um programa que converte uma nota dada 
em porcentagem (de 0 a 100) em conceitos de A a F. 
Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
*/

let porcentagem = 50;

if (porcentagem < 0 || porcentagem > 100){
  console.log("A porcentagem deve estar entre 0 e 100");
} else if (porcentagem >= 90){
  console.log("A");
} else if (porcentagem >= 80){
  console.log("B");
} else if (porcentagem >= 70){
  console.log("C");
} else if (porcentagem >= 60){
  console.log("D");
} else if (porcentagem >= 50){
  console.log("E");
} else {
  console.log("F");
}