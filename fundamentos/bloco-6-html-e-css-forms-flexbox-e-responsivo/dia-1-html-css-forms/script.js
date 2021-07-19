function adicionaEstados() {
  const estados = ['', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espiríto Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande so Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  for (let index = 0; index < estados.length; index += 1) {
    const elementoPai = document.getElementById('input-estados');
    const estadosEl = document.createElement('option');
    elementoPai.appendChild(estadosEl);
    estadosEl.innerText = estados[index];
    estadosEl.value = estados[index];
  }
}
adicionaEstados();

