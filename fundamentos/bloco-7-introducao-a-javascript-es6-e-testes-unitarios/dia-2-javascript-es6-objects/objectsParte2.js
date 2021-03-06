const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1. Crie uma função para adicionar o turno da manhã na lesson2 . 
// Essa função deve possuir três parâmetros, sendo eles: o objeto a 
// ser modificado, a chave que deverá ser adicionada e o valor dela.
const adicionaTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

adicionaTurno(lesson2, 'turno', 'manhã');

console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve 
// receber um objeto como parâmetro.
const listaChaves = (objeto) => {
  const lista = Object.keys(objeto);
  console.log(lista);
}

listaChaves(lesson1);

//3. Crie uma função para mostrar o tamanho de um objeto.
const tamanhoObjeto = (objeto) => {
  const arrayObjeto = Object.keys(objeto);
  const tamanho = arrayObjeto.length;
  console.log(tamanho);
}

tamanhoObjeto(lesson3);

//3. Crie uma função para listar os valores de um objeto. 
// Essa função deve receber um objeto como parâmetro.
const valoresObjetos = (objeto) => Object.values(objeto);

console.log(valoresObjetos(lesson2));

//5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através 
// do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas ]
// chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , 
// a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
//6. Usando o objeto criado no exercício 5, crie uma função que retorne o número 
// total de estudantes em todas as aulas.
const numeroEstudantes = (objeto) => lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
console.log(numeroEstudantes(allLessons));

//6. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const posicaoChave = (objeto, posicao) =>  {
  const keysValues = Object.values(objeto);
  const position = keysValues[posicao];
  console.log(position);
}

posicaoChave(lesson3, 2);
// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve 
// possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verificaPar = (objeto, chave, valor) => {
  const chaveValor = Object.entries(objeto);
  for (key in )
};