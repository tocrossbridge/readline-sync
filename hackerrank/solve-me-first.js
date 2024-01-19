// https://www.hackerrank.com/challenges/solve-me-first/
//
// Complete the function solveMeFirst to compute the sum of two integers.
//
// Example:
// int a: the first value
// int b: the second value
// ReturnsW
//   - int: the sum of a and b

const readline = require('readline-sync');

function solveMeFirst(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

const num1 = readline.question('Digite o primeiro valor:\n');
const num2 = readline.question('Digite o segundo valor:\n');

const result = solveMeFirst(num1, num2);

console.log(`O resultado da soma dos números é ${result}`);