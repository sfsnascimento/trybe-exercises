const numeroSorteado = () => {
  const numero = Math.floor((Math.random() * 5)) + 1;
  return numero;
}

const sorteio = (callback, numeroApostado) => callback() === numeroApostado ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(sorteio(numeroSorteado, 5));