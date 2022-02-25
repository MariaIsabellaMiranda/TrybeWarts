const email = document.getElementById('input-email');
const senha = document.getElementById('input-senha');
const button = document.getElementById('button');
const agree = document.getElementById('agreement');
const subButton = document.getElementById('submit-btn');

function validarDados() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', validarDados);

subButton.disabled = true;

function habilitaBotao() {
  if (agree.checked === false) {
    subButton.disabled = true;
  } else {
    subButton.disabled = false;
  }
}

agree.addEventListener('click', habilitaBotao);
