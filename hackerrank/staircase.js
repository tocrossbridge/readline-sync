const readline = require('readline-sync');

// https://www.hackerrank.com/challenges/staircase

function retornaHash(quantidadeEspaco, quantidadeHash) {
  return ' '.repeat(quantidadeEspaco) + '#'.repeat(quantidadeHash);
}

function staircase(n) {
  let result = [];

  for (let i = 1;i <= n;i++) {
    let quantidadeHashtag = i;
    let quantidadeEspacos = n - i;
    let linha = retornaHash(quantidadeEspacos, quantidadeHashtag);
    result += `${linha}${i !== n ? '\n' : ''}`;
  }

  return result;
}

function verificaValor(valorInput) {
  return isNaN(valorInput) || valorInput <= 0;
}

const input = readline.question('Digite um número');
const valorInput = parseInt(input);

const inputValido = verificaValor(valorInput);
const mensagemErro = "Uepaaa! Digite um número positivo";

const resultado = inputValido ? mensagemErro : staircase(valorInput);

console.log(resultado);