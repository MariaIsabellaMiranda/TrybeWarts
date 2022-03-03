const email = document.querySelector('#emailLogin');
const senha = document.querySelector('#input-senha');
const button = document.querySelector('#button');
const agree = document.querySelector('#agreement');
const subButton = document.querySelector('#submit-btn');
const texto = document.querySelector('#textarea');
const contador = document.querySelector('#counter');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const emailForm = document.querySelector('#input-email');
const casas = document.querySelector('#house');
const familias = document.querySelectorAll('.family');
const conteudos = document.querySelectorAll('.subject');
const avaliar = document.querySelectorAll('.rate');
const form = document.querySelector('#evaluation-form');

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
  const quant = 500;
  const total = texto.value.length;
  if (total <= quant) {
    const restante = quant - total;
    contador.innerHTML = restante;
  }
}
texto.addEventListener('keyup', contaCaractere);

function getNomeESobrenome() {
  const valueNomeSobrenome = `${nome.value} ${sobrenome.value}`;
  return valueNomeSobrenome;
}

function getEmail() {
  const valueEmail = emailForm.value;
  return valueEmail;
}

function getCasas() {
  const valueCasas = casas.options[casas.selectedIndex].value;
  return valueCasas;
}

function getFamilias() {
  for (let i = 0; i < familias.length; i += 1) {
    if (familias[i].checked) {
      return familias[i].value;
    }
  }
}

function getConteudo() {
  const valueConteudos = [];
  for (let i = 0; i < conteudos.length; i += 1) {
    if (conteudos[i].checked) {
      valueConteudos.push(conteudos[i].value);
    }
  }
  return valueConteudos.join(', ');
}

function getAvaliar() {
  for (let i = 0; i < avaliar.length; i += 1) {
    if (avaliar[i].checked) {
      return avaliar[i].value;
    }
  }
}

function getTextArea() {
  const valueTexto = texto.value;
  return valueTexto;
}

function todosTextos() {
  const arrayValues = [];
  arrayValues.push(`Nome: ${getNomeESobrenome()}`);
  arrayValues.push(`Email: ${getEmail()}`);
  arrayValues.push(`Casa: ${getCasas()}`);
  arrayValues.push(`Família: ${getFamilias()}`);
  arrayValues.push(`Matérias: ${getConteudo()}`);
  arrayValues.push(`Avaliação: ${getAvaliar()}`);
  arrayValues.push(`Observações: ${getTextArea()}`);
  return arrayValues;
}

function createP() {
  form.innerHTML = '';
  for (let i = 0; i < todosTextos().length; i += 1) {
    const p = document.createElement('p');
    p.innerText = todosTextos()[i];
    form.appendChild(p);
  }
}
subButton.addEventListener('click', createP);
