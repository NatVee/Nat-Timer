const countDownEl = document.getElementById("countdown-id");
const buttonEl = document.querySelector("button");
const daysEl = document.getElementById("days");
const inputEl = document.querySelector('input'); 
var time = NaN;


buttonEl.addEventListener('click', function(){
    time = inputEl.value;
    setInterval(updateCountdown, 1000);
});

function updateCountdown(){
    let days = Math.floor(time / (3600 * 24));
    let t = time % (3600 * 24)
    let hours = Math.floor(t / (3600));
    t %= (3600)   
    let minutes = Math.floor(t / 60);
    let seconds = t % 60;
    hours = hours < 10 ? "0" + hours: hours;
    minutes = minutes < 10 ? "0" + minutes: minutes;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    daysEl.innerHTML = `days: ${days}`;
    countDownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
    time--;
}
