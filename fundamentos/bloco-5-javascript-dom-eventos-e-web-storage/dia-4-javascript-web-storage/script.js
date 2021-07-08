const texto = document.getElementById('input-text');
const corpo = document.getElementsByClassName('background')[0];

texto.addEventListener('keyup', function mudaBackground () {
  corpo.style.backgroundColor = texto.value;
});

const pequena = document.getElementById('small');
const media = document.getElementById('medium');
const grande = document.getElementById('larger');

pequena.addEventListener('click', function() {
  corpo.style.fontSize = pequena.innerText;
});

media.addEventListener('click', function() {
  corpo.style.fontSize = media.innerText;
});

grande.addEventListener('click', function() {
  corpo.style.fontSize = grande.innerText;
});

const textoColor = document.getElementById('input-color');


textoColor.addEventListener('keyup', function mudaCorTexto() {
  corpo.style.color = textoColor.value;
});

const arialFonte = document.getElementById('arial');
const timesFonte = document.getElementById('times');

arialFonte.addEventListener('click', function() {
  corpo.style.fontFamily = arialFonte.innerText;
});

timesFonte.addEventListener('click', function() {
  corpo.style.fontFamily = timesFonte.innerText;
});

const espacamentoNormal = document.getElementById('normal');
const espacamentoPx = document.getElementById('pixels');

espacamentoNormal.addEventListener('click', function() {
  corpo.style.lineHeight = espacamentoNormal.innerText;
});

espacamentoPx.addEventListener('click', function() {
  corpo.style.lineHeight = espacamentoPx.innerText;
});