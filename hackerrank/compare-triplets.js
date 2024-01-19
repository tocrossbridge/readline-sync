const readline = require('readline-sync');
//
// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
//
// Alice and Bob each created one problem for HackerRank.
// A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories:
// problem clarity, originality, and difficulty.
//
// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]),
// and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
//
// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
//
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.
//
// Given a and b, determine their respective comparison points.

// Variável para armazenar valores:
var alice = [];
var bob = [];
// Para teste:
// var alice = [5, 6, 7];
// var bob = [3, 6, 10];
// Resultado esperado: [1, 1]

// Função de comparação:
function compareTriplets(alice, bob) {
  var pontosAlice = 0;
  var pontosBob = 0;

  for (let i = 0;i < alice.length && i < bob.length;i++) {
    if (alice[i] > bob[i]) {
      pontosAlice += 1;
    } else if (alice[i] < bob[i]) {
      pontosBob += 1;
    }
  }

  return [pontosAlice, pontosBob];
}

const alice = readline.question('Digite os valores da Alice:');
const bob = readline.question('Digite os valores do Bob:');

const resultado = compareTriplets(alice, bob);
console.log(`O resultado dos pontos é ${resultado}`)