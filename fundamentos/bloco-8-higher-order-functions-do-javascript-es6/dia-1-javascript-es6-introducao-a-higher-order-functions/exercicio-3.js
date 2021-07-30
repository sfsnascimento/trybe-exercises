const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificacao = () => {
  let pontuacaoFinal = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (gabarito[index] === respostas[index]) {
      pontuacaoFinal += 1;
    } else if (respostas[index] === 'N.A') {
      pontuacaoFinal += 0;
    } else {
      pontuacaoFinal -= 0.5;
    }
  }
  return pontuacaoFinal;
};

const respostasCertas = (gabarito, respostas, callback) => `Pontuação Final: ${callback()} pontos`;

console.log(respostasCertas(gabarito, respostas, verificacao));