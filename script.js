// Tabela de correspondência entre letras e palavras em Língua das Cobras
const tabelaCorrespondencia = {
  'a': 'apar',
  'b': 'bexi',
  'c': 'carfi',
  'd': 'daxi',
  'e': 'epli',
  'f': 'fuzi',
  'g': 'grix',
  'h': 'hefi',
  'i': 'ixim',
  'j': 'jexi',
  'k': 'kaxi',
  'l': 'lufi',
  'm': 'maxi',
  'n': 'naxi',
  'o': 'opli',
  'p': 'pufi',
  'q': 'qaxi',
  'r': 'rixi',
  's': 'sefi',
  't': 'taxi',
  'u': 'upli',
  'v': 'vexi',
  'w': 'wufi',
  'x': 'xaxi',
  'y': 'yexi',
  'z': 'zixi',
};

// Função para criptografar um texto usando Língua das Cobras
function criptografar(texto) {
  let textoCriptografado = '';
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase();
    if (tabelaCorrespondencia.hasOwnProperty(letra)) {
      textoCriptografado += tabelaCorrespondencia[letra] + ' ';
    } else {
      textoCriptografado += letra;
    }
  }
  return textoCriptografado.trim();
}

// Função para descriptografar um texto em Língua das Cobras
function descriptografar(textoCriptografado) {
  let textoDescriptografado = '';
  const palavrasCriptografadas = textoCriptografado.split(' ');
  for (let i = 0; i < palavrasCriptografadas.length; i++) {
    const palavra = palavrasCriptografadas[i];
    const letraDescriptografada = Object.keys(tabelaCorrespondencia).find(
      (letra) => tabelaCorrespondencia[letra] === palavra
    );
    if (letraDescriptografada) {
      textoDescriptografado += letraDescriptografada;
    } else {
      textoDescriptografado += palavra;
    }
  }
  return textoDescriptografado;
}

// Função para copiar o texto descriptografado
function copiarTexto() {
  const textoDigitado = document.querySelector('.digitado');
  textoDigitado.select();
  document.execCommand('copy');
}

// Obter elementos HTML relevantes
const textareaDigite = document.querySelector('.digite');
const textareaDigitado = document.querySelector('.digitado');
const botaoCriptografar = document.querySelector('.criptografar');
const botaoDescriptografar = document.querySelector('.descriptografar');
const botaoCopiar = document.querySelector('.btn-copiar');

// Criptografar o texto ao clicar no botão Criptografar
botaoCriptografar.addEventListener('click', () => {
  const textoParaCriptografar = textareaDigite.value;
  const textoCriptografado = criptografar(textoParaCriptografar);
  textareaDigitado.value = textoCriptografado;
});

// Descriptografar o texto ao clicar no botão Descriptografar
botaoDescriptografar.addEventListener('click', () => {
  const textoCriptografado = textareaDigitado.value;
  const textoDescriptografado = descriptografar(textoCriptografado);
  textareaDigitado.value = textoDescriptografado;
});

// Copiar o texto descriptografado ao clicar no botão Copiar
botaoCopiar.addEventListener('click', () => {
  copiarTexto();
});
