let time = 3600;
const countDownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown(){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    //countDownEl.innerHTML = `${minutes}:${seconds}`;
    countDownEl.innerHTML = 'lol';
    time--;
}
