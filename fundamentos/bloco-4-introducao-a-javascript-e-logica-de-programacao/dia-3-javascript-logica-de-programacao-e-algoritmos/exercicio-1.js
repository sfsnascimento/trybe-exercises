let n = 5;
let linha = "";

for (index = 1; index <= n; index +=1){
  for (i = 1; i <= n; i +=1){
      linha += "*";
  }
  console.log(linha);
  linha = "";
}