let time = document.getElementById("time");
let tempoRestante = 30;
setTimeout(setInterval(displayTime, 1000),5000);

function displayTime(){
    if (tempoRestante>=1)(tempoRestante--);
    time.innerHTML=tempoRestante;
}