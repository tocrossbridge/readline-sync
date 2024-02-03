const readline = require('readline-sync'); var fraseNova = ''

var indexAlvo = 0;

function check(frase, alvo) {
  for (let i = 0;i < frase.length;i++) {
    if (frase[i] === alvo[indexAlvo]) {
      fraseNova += frase[i]
      indexAlvo++
    }

    if (indexAlvo === alvo.length) {
      return 'YES'
    }
  }
  return 'NO'
}

var alvo = 'hackerrank'
var frase = readline.question("Digite uma palavra para testar se contém hackerrank escondido:")

var result = check(frase, alvo)
console.log(result)