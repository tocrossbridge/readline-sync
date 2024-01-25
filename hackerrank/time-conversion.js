const readline = require('readline-sync');

// Formato aceito: '18:05:45PM';
const horario = readline.question('Digite hora 12 horas para converter em 24 horas:');

// regex validação input:
const regexHorario = /\d{0,2}:\d{0,2}:\d{0,2}(AM|PM)$/i;

if (regexHorario.test(horario)) {
  const [horas, minutos, segundos] = horario.split(/:|(?=[AMPMampm])/);

  const ehPM = horas <= 12;

  const novaData = new Date();
  novaData.setHours(ehPM ? parseInt(horas, 10) + 12 : parseInt(horas, 10));
  novaData.setMinutes(parseInt(minutos, 10));
  novaData.setSeconds(parseInt(segundos, 10));

  const resultado = novaData.toLocaleTimeString([], { hour12: false });

  console.log(`A hora convertida é ${resultado}`);
} else {
  console.log('Formato inválido :(\nTente novamente :)')
}
