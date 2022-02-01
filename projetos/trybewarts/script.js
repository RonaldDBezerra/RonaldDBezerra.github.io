const button = document.getElementById('button-entrar');
const checkbox = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');

button.addEventListener('click', () => {
  const email = document.getElementsByName('email')[0];
  const senha = document.getElementsByName('password')[0];

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    buttonEnviar.removeAttribute('disabled');
  } else {
    buttonEnviar.setAttribute('disabled', 'disabled');
  }
});
