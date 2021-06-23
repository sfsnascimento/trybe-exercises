/*5. Faça um programa que defina três variáveis 
com os valores dos três ângulos internos de 
um triângulo. Retorne true se os ângulos 
representarem os ângulos de um triângulo e 
false , caso contrário. Se algum ângulo for
 inválido o programa deve retornar uma mensagem de erro.*/

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

let somaAngulos = angulo1 + angulo2 + angulo3;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
  console.log("angulo invalido");
} else if (somaAngulos === 180){
  console.log(true);
} else {
  console.log(false);
}