const email = document.getElementById('emailLogin');
const senha = document.getElementById('input-senha');
const button = document.getElementById('button');
const agree = document.getElementById('agreement');
const subButton = document.getElementById('submit-btn');
const texto = document.getElementById('textarea');
const contador = document.getElementById('counter');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const casas = document.getElementById('house');
const familias = document.getElementsByName('family');
const conteudos = document.getElementsByClassName('subject');
const avaliar = document.getElementsByName('rate');
const form = document.getElementById('evaluation-form');


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
};
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
};
texto.addEventListener('keyup', contaCaractere);

function getNomeESobrenome() {
  let valueNomeSobrenome = nome.value + " " + sobrenome.value
  return valueNomeSobrenome;
};

function getEmail() {
  let valueEmail = emailForm.value;
  return valueEmail;
};

function getCasas() {
  let valueCasas = casas.options[casas.selectedIndex].value;
  return valueCasas;
};

function getFamilias() {
  for (let i =0; i < familias.length; i += 1) {
    if(familias[i]:checked) {
    return familias[i].value;
    }
  }
};

function getConteudo() {
  let valueConteudos = [];
  for (i = 0; i < conteudos.length; i += 1) {
    if (conteudos[i]:checked) {
      valueConteudos.push(conteudos[i].value);
    }
  }
  return valueConteudos.join(', ');
};

function getAvaliar() {
  for (let i =0; i < avaliar.length; i += 1) {
    if(avaliar[i]:checked) {
    return avaliar[i].value;
    }
  }
};

function getTextArea() {
  let valueTexto = texto.value;
  return valueTexto;
};

function todosTextos() {
  let arrayValues = [];
  arrayValues.push('Nome:' + ' ' + getNomeESobrenome());
  arrayValues.push('Email:' + ' ' + getEmail());
  arrayValues.push('Casa:' + ' ' + getCasas());
  arrayValues.push('Família:' + ' ' + getFamilias());
  arrayValues.push('Matérias:' + ' ' + getConteudo());
  arrayValues.push('Avaliação:' + ' ' + getAvaliar());
  arrayValues.push('Observações:' + ' ' + getTextArea());
  return arrayValues;
};

  function createP() {
    form.innerHTML = '';
    for (let i = 0; i < todosTextos().length; i += 1) {
      const p = document.createElement('p');
      p.innerText = todosTextos()[i];
      form.appendChild(p);
    }
  }
  subButton.addEventListener('click', createP);
  