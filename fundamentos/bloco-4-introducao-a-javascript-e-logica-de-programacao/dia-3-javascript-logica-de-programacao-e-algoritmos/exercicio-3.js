let n = 5; 
let triangulo = "";
for (let linha = 1; linha <= n; linha += 1) {
  for (let vazio = 0; vazio < n - linha; vazio += 1){
    triangulo += " ";
  }
  for (let asterisco = 0; asterisco < linha; asterisco += 1){
    triangulo += "*";
  }
console.log(triangulo);
triangulo = "";
}

  

