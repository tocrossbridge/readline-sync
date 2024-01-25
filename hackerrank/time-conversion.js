const readline = require('readline-sync');

// Formato aceito: '18:05:45PM';
// const horario = readline.question('Digite hora 12 horas para converter em 24 horas:');
const horario = "12:40:22AM"

// regex validação input:
const regexHorario = /\d{0,2}:\d{0,2}:\d{0,2}(AM|PM)$/i;

if (regexHorario.test(horario)) {
  const [horas, minutos, segundos, periodo] = horario.match(/(\d{2}):(\d{2}):(\d{2})([APMapm]{2})/).slice(1);

  const novaData = new Date();
  novaData.setHours(
    periodo.toLowerCase() === 'pm' && parseInt(horas, 10) !== 12
      ? (parseInt(horas, 10) + 12) % 24
      : parseInt(horas, 10) % 12
  );

  novaData.setMinutes(parseInt(minutos, 10));
  novaData.setSeconds(parseInt(segundos, 10));

  const resultado = novaData.toLocaleTimeString([], { hour12: false });

  console.log(resultado)
}

// ABORDAGEM SEM USAR O NEW DATE:
function timeConversion(horario) {
  const [horas, minutos, segundos, periodo] = horario.match(/(\d{2}):(\d{2}):(\d{2})([APMapm]{2})/).slice(1);

  var hora24 = parseInt(horas, 10) % 12;

  if (periodo.toLowerCase() === 'pm' && horas !== 12) {
    hora24 += 12
  } else if (periodo.toLowerCase() === 'am' && horas == 12) {
    hora24 = '00'
  }

  hora24 = hora24.toString().padStart(2, '0');

  return `${hora24}:${minutos}:${segundos}`
}