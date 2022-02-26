const email = document.getElementById('emailLogin');
const senha = document.getElementById('input-senha');
const button = document.getElementById('button');
const agree = document.getElementById('agreement');
const subButton = document.getElementById('submit-btn');
const texto = document.getElementById('textarea');
const contador = document.getElementById('counter');

function validarDados() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', validarDados);

// Site usado como base para elaborar botão: https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/#:~:text=A%20melhor%20maneira%20de%20fazer,alternar%20seu%20estado%20on%20%2F%20off%20.
subButton.disabled = true;

function habilitaBotao() {
  if (agree.checked === false) {
    subButton.disabled = true;
  } else {
    subButton.disabled = false;
  }
}
agree.addEventListener('click', habilitaBotao);


// Site usado como base para elaborar contador: https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea
function contaCaractere() {
  let quant = 500;
  const total = texto.value.length
  if (total <= quant) {
    let restante = quant - total;
    contador.innerHTML = restante;
  }else {
  }
}

texto.addEventListener('keyup', contaCaractere);


