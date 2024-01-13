// Importando a biblioteca:
const readline = require('readline-sync');

let numbers = [];

const numbersQuantity = readline.question("Quantos números deseja testar?");

console.log(`Maneiro! Você escolher inserir ${numbersQuantity} :D`);

for (let index = 0;index < numbersQuantity;index++) {
  let newNumber = readline.question(`Digite o número da posição ${index}:`)
  numbers.push(newNumber);
}

console.log(`Os números inseridos foram: ${numbers}`);

const sortNumbers = numbers.sort((a, b) => a - b);
console.log("A ordenação dos números é:", sortNumbers);
