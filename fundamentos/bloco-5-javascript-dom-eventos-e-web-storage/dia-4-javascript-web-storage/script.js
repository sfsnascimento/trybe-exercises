const texto = document.getElementById('input-text');
const corpo = document.getElementsByClassName('background')[0];


function changeBackground () {
  texto.addEventListener('keyup', function mudaBackground () {
    corpo.style.backgroundColor = texto.value;
    let back = corpo.style.backgroundColor;
    localStorage.setItem('background', back);
  });

  corpo.style.backgroundColor = localStorage.getItem('background');
}
changeBackground();

function changeFonteSize () {
  const pequena = document.getElementById('small');
  const media = document.getElementById('medium');
  const grande = document.getElementById('larger');

  pequena.addEventListener('click', function() {
    corpo.style.fontSize = pequena.innerText;
    let fonteP = corpo.style.fontSize;
    localStorage.setItem('fonte', fonteP);
  });
  corpo.style.fontSize = localStorage.getItem('fonte');

  media.addEventListener('click', function() {
    corpo.style.fontSize = media.innerText;
    let fonteM = corpo.style.fontSize;
    localStorage.setItem('fonte', fonteM);
  });
  corpo.style.fontSize = localStorage.getItem('fonte');

  grande.addEventListener('click', function() {
    corpo.style.fontSize = grande.innerText;
    let fonteG = corpo.style.fontSize;
    localStorage.setItem('fonte', fonteG);
  });
  corpo.style.fontSize = localStorage.getItem('fonte');
}
changeFonteSize();

function changeTextColor () {
  const textoColor = document.getElementById('input-color');

  textoColor.addEventListener('keyup', function mudaCorTexto() {
    corpo.style.color = textoColor.value;
    let text = corpo.style.color;
    localStorage.setItem('texto', text);
  });
  corpo.style.color = localStorage.getItem('texto');
}
changeTextColor();

function changeFontFamily () {
  const arialFonte = document.getElementById('arial');
  const timesFonte = document.getElementById('times');

  arialFonte.addEventListener('click', function() {
    corpo.style.fontFamily = arialFonte.innerText;
    let fonteFam = corpo.style.fontFamily;
    localStorage.setItem('fontFamily', fonteFam);
  });
  corpo.style.fontFamily = localStorage.getItem('fontFamily');

  timesFonte.addEventListener('click', function() {
    corpo.style.fontFamily = timesFonte.innerText;
    let fonteFamil= corpo.style.fontFamily;
    localStorage.setItem('fontFamily', fonteFamil);
  });
  corpo.style.fontFamily = localStorage.getItem('fontFamily');
}
changeFontFamily();

function changeLineHeight () {
  const espacamentoNormal = document.getElementById('normal');
  const espacamentoPx = document.getElementById('pixels');

  espacamentoNormal.addEventListener('click', function() {
    corpo.style.lineHeight = espacamentoNormal.innerText;
    let espacamento = corpo.style.lineHeight;
    localStorage.setItem('lineHeight', espacamento);
  });
  corpo.style.lineHeight = localStorage.getItem('lineHeight');

  espacamentoPx.addEventListener('click', function() {
    corpo.style.lineHeight = espacamentoPx.innerText;
    let espacamen = corpo.style.lineHeight;
    localStorage.setItem('lineHeight', espacamen);
  });
  corpo.style.lineHeight = localStorage.getItem('lineHeight');
}
changeLineHeight();
