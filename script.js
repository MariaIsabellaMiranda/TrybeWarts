const email = document.getElementById('input-email');
const senha = document.getElementById('input-senha');
const button = document.getElementById('button');

function validarDados () {
  if (email.value === "tryber@teste.com" && senha.value === '123456') {
    alert('Olá, Tryber!');
  }else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', validarDados);