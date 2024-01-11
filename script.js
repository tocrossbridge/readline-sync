const readline = require('readline-sync');

const nome = readline.question('Qual o seu nome?\n');

console.log(`Seu nome é ${nome}`);

const sobrenome = readline.question('Qual o seu sobrenome?\n');

const nomeCompleto = `${nome} ${sobrenome}`;

console.log(`Seu nome completo é ${nomeCompleto} :D`);