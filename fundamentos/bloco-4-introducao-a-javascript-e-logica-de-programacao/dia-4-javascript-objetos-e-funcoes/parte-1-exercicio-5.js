/*
5.Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) 
do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear 
Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
*/
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info1 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinha',
  recorrente: 'Sim'
};

for (let chave in info, info1){
  if(info[chave] !== info1[chave]){
    console.log(info[chave] + ' e ' + info1[chave]);
  } else{
    console.log('Ambos recorrentes');
  }
}