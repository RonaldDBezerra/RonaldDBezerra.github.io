window.onload = function () {
  corbranca();
  corpreta();
  cliquei;
  cliquei2;
  cliquei3;
  cliquei4;
  corPixels;
  butaoDeReset;
};

function corbranca() {
  const pixels = document.getElementsByClassName('pixel');
  for (i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function corpreta() {
  cor1.classList.add('selected');
}

function cliquei() {
  corArmazenada = cor1.style.backgroundColor;
  if (cor1.className !== 'color selected') {
    cor1.classList.add('selected');
    cor2.className = 'color';
    cor3.className = 'color';
    cor4.className = 'color';
  }
  console.log(corArmazenada);
}

function cliquei2() {
  corArmazenada = cor2.style.backgroundColor;
  if (cor2.className !== 'color selected') {
    cor2.classList.add('selected');
    cor1.className = 'color';
    cor3.className = 'color';
    cor4.className = 'color';
  }
  console.log(corArmazenada);
}

function cliquei3() {
  corArmazenada = cor3.style.backgroundColor;
  if (cor3.className !== 'color selected') {
    cor3.classList.add('selected');
    cor1.className = 'color';
    cor2.className = 'color';
    cor4.className = 'color';
  }
  console.log(corArmazenada);
}

function cliquei4() {
  corArmazenada = cor4.style.backgroundColor;
  if (cor4.className !== 'color selected') {
    cor4.classList.add('selected');
    cor1.className = 'color';
    cor2.className = 'color';
    cor3.className = 'color';
  }
  console.log(corArmazenada);
}

function corPixels(event) {
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = corArmazenada;
  }
}

function butaoDeReset() {
  const pixelsAlterados = document.getElementsByClassName('pixel');
  for (i = 0; i < pixelsAlterados.length; i += 1) {
    pixelsAlterados[i].style.backgroundColor = 'white';
  }
}

let corArmazenada = 'black';

let cor1 = document.getElementsByClassName('color')[0];
cor1.addEventListener('click', cliquei);
cor1.style.backgroundColor = 'black';

let cor2 = document.getElementsByClassName('color')[1];
cor2.addEventListener('click', cliquei2);
cor2.style.backgroundColor = 'red';

let cor3 = document.getElementsByClassName('color')[2];
cor3.addEventListener('click', cliquei3);
cor3.style.backgroundColor = 'blue';

let cor4 = document.getElementsByClassName('color')[3];
cor4.addEventListener('click', cliquei4);
cor4.style.backgroundColor = 'purple';

const pixels = document.querySelector('#pixel-board');
pixels.addEventListener('click', corPixels);

const buttom = document.getElementById('clear-board');
buttom.addEventListener('click', butaoDeReset);
