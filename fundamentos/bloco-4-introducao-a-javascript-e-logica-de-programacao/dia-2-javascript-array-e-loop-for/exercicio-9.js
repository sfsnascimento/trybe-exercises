let numbers = [];
let divisao;

for (let index = 1; index < 26; index += 1){
  numbers.push(index);
}

for (let i = 0; i < numbers.length; i +=1){
  divisao = numbers[i] / 2;
  console.log(divisao);
}