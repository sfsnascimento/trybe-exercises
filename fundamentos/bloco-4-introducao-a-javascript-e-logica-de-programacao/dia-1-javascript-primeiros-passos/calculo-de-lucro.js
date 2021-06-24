/*
10.Escreva um programa que se inicie com dois valores 
em duas variáveis diferentes: o custo de um produto 
e seu valor de venda. A partir dos valores, calcule 
quanto de lucro (valor de venda descontado o custo 
  do produto) a empresa terá ao vender mil desses 
  produtos.
*/

let valorCusto = 100;
let valorVenda = 200;
let imposto = 20/100;
let impostoSobreOCusto = valorCusto * imposto;

let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

console.log(lucro);