AOS.init();

const dataDoEvento = new Date("Aug 23, 2025 12:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diasAteEvento = Math.floor(distanciaAteEvento / (1000*60*60*24));
    const horasAteEvento = Math.floor((distanciaAteEvento % (1000*60*60*24))/(1000*60*60));
    const minutosAteEvento = Math.floor((distanciaAteEvento % (1000*60*60))/(1000*60));
    const segundosAteEvento = Math.floor((distanciaAteEvento % (1000*60))/1000);
    console.log(diasAteEvento, horasAteEvento, minutosAteEvento, segundosAteEvento);

    document.getElementById('contador').innerHTML = `${diasAteEvento} dias, ${horasAteEvento} horas, ${minutosAteEvento} minutos e ${segundosAteEvento} segundos </br>`;

    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento expirado!`
    }
}, 1000);