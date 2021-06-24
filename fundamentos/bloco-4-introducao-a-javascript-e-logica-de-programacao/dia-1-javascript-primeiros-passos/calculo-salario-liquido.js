let salarioBruto = 2594.92;
let salarioBase;
let salarioLiquido;

let aliquotaOitoPorcento = 8/100;
let aliquotaNovePorcento = 9/100;
let aliquotaOnzePorcento = 11/100;
let aliquotaMaxima = 570.88;

let irSeteEMeioPorcento = 7.5/100;
let irQuinzePorcento = 15/100;
let irVinteEDoisEMeioPorcento = 22.5/100;
let irVinteESeteEMeioPorcento = 27.5/100;

let parcelaDeducaoSeteEMeio = 142.80;
let parcelaDeducaoQuinze = 354.80 ;
let parcelaDeducaoVinteEDoisEMeio = 636.13;
let parcelaDeducaoVinteESeteEMeio = 869.36;

if (salarioBruto <= 1557.94){
  salarioBase = salarioBruto - aliquotaOitoPorcento*salarioBruto;
  if (salarioBase <= 1903.98){
    salarioLiquido = salarioBase;
    console.log(salarioLiquido);
  }
} else if (1556.95 <= salarioBruto && salarioBruto <= 2594.92){
  salarioBase = salarioBruto - aliquotaNovePorcento*salarioBruto;
  if (1903.99 <= salarioBase && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - (salarioBase * irSeteEMeioPorcento - parcelaDeducaoSeteEMeio);
  } else {
    salarioLiquido = salarioBase;
  }
    console.log(salarioLiquido);
  
} else if (2594.93 <= salarioBruto && salarioBruto <= 5189.82){
  salarioBase = salarioBruto - aliquotaOnzePorcento*salarioBruto;
  if (2826.66 <= salarioBase && salarioBase <= 3751.05) {
    salarioLiquido = salarioBase * irQuinzePorcento - parcelaDeducaoQuinze;
  } else {
    salarioLiquido = salarioBase - (salarioBase * irSeteEMeioPorcento - parcelaDeducaoSeteEMeio);
  }
    console.log(salarioLiquido);
  
} else if (salarioBruto > 5189.82){
  salarioBase = salarioBruto - aliquotaMaxima
  if (salarioBase > 4664.68) {
    salarioLiquido = salarioBase - (salarioBase * irVinteESeteEMeioPorcento - parcelaDeducaoVinteESeteEMeio);
    console.log(salarioLiquido);
}
}
