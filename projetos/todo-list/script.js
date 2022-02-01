const input = document.getElementById('texto-tarefa');
input.value = '';

const butao = document.getElementById('criar-tarefa');
butao.addEventListener('click', buton);

const listas = document.getElementsByTagName('ol')[0];
listas.addEventListener('click', pintar);
listas.addEventListener('dblclick', realizado);

const limparLista = document.getElementById('apaga-tudo');
limparLista.addEventListener('click', limpar);

const limparCompletados = document.getElementById('remover-finalizados');
limparCompletados.addEventListener('click', limparSelecionado);

const salvaElementos = document.getElementById('salvar-tarefas');
salvaElementos.addEventListener('click', salvarElemento);

const subirElemento = document.getElementById('para-cima');
subirElemento.addEventListener('click', subir);

const descerElemento = document.getElementById('para-baixo');
descerElemento.addEventListener('click', descer);

const removerSelecionado = document.getElementById('remover-selecionado');
removerSelecionado.addEventListener('click', () => {
  const li = document.getElementsByTagName('li');
  for (let i = li.length - 1; i >= 0; i -= 1) {
    if (li[i].classList.contains('selected')) {
      li[i].remove();
    }
  }
});

function pintar(event) {
  const resultado = event.target;
  resultado.classList.add('selected');
  const li = document.getElementsByTagName('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i] !== resultado) {
      li[i].classList.remove('selected');
    }
  }
}

function buton() {
  const listaOrdenada = document.getElementById('lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  listaOrdenada.appendChild(listItem);
  input.value = '';
}

function realizado(event) {
  const resultado = event.target;
  resultado.classList.toggle('completed');
}

function limpar() {
  const parametro = document.getElementById('lista-tarefas');
  parametro.innerText = '';
}

function limparSelecionado() {
  const li = document.getElementsByTagName('li');
  for (let i = li.length - 1; i >= 0; i -= 1) {
    if (li[i].classList.contains('completed')) {
      li[i].remove();
    }
  }
}

function salvarElemento() {
  const li = document.getElementsByTagName('li');
  const arrayDeLi = [...li];
  const arrayDeIntensDaLista = arrayDeLi.map((element) => [element.innerText, element.classList]);
  localStorage.test = JSON.stringify(arrayDeIntensDaLista);
}

function recarregaElementos() {
  const chaveLocalStorage = localStorage.getItem('test');
  const ol = document.getElementById('lista-tarefas');

  if (chaveLocalStorage) {
    const arrayDeItens = JSON.parse(chaveLocalStorage);

    arrayDeItens.forEach((element) => {
      const li = document.createElement('li');
      const [iten, classe] = element;
      li.innerHTML = iten;
      li.classList.add(classe[0], classe[1]);
      ol.appendChild(li);
    });
  }
}

function subir() {
  const li = document.getElementsByTagName('li');
  const arrayDeLi = [...li];
  const liSelected = arrayDeLi.find((element) => element.classList.contains('selected'));
  const liAnterior = liSelected.previousSibling;
  const textoAnterior = liAnterior.innerText;
  const classeAnterior = liAnterior.classList;
  const [classe1, classe2] = classeAnterior;
  liAnterior.innerHTML = liSelected.innerHTML;
  liAnterior.classList = liSelected.classList;
  liSelected.innerText = textoAnterior;
  liSelected.classList.remove('selected', 'completed');
  liSelected.classList.add(classe1, classe2);
}

function descer() {
  const li = document.getElementsByTagName('li');
  const arrayDeLi = [...li];
  const liSelected = arrayDeLi.find((element) => element.classList.contains('selected'));
  const liAnterior = liSelected.nextSibling;
  const textoAnterior = liAnterior.innerText;
  const classeAnterior = liAnterior.classList;
  const [classe1, classe2] = classeAnterior;
  liAnterior.innerHTML = liSelected.innerHTML;
  liAnterior.classList = liSelected.classList;
  liSelected.innerText = textoAnterior;
  liSelected.classList.remove('selected', 'completed');
  liSelected.classList.add(classe1, classe2);
}

window.onload = () => {
  recarregaElementos();
  buton;
  pintar;
  realizado;
  limpar;
};
