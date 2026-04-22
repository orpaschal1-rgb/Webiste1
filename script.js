
let h1 = document.getElementById("myH1");
let mdiv = document.getElementById("container");

let disdiv = document.getElementById("display");

let condiv = document.getElementById("controls");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

console.log(`API = 6759u4jsh`)
name = "Nikitas"
console.log(`${name} is very very stupid`)

start.onclick = function () {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

stop.onclick = function () {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

reset.onclick = function () {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
    startTime = 0;
    elapsedTime = 0;
    disdiv.textContent = "00:00:00.00";
}



function update() {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor(elapsedTime / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    disdiv.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
}