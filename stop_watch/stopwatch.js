// Variables for buttons
let startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero
let leadingSeconds = "00";
let leadingMinutes = "00";
let leadingHours = "00";

// Variables for set interval and timer status
let timerInterval = null;
let timerStatus = "stopped";

// Stopwatch function
function stopwatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    leadingSeconds = (seconds < 10) ? "0" + seconds : seconds;
    leadingMinutes = (minutes < 10) ? "0" + minutes : minutes;
    leadingHours = (hours < 10) ? "0" + hours : hours;

    document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

startStopBtn.addEventListener('click', function () {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopwatch, 1000);
        document.getElementById("startStopBtn").innerHTML = '&#9208;';
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '&#9658;';
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function () {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
    document.getElementById('startStopBtn').innerHTML = '&#9658;';
    timerStatus = "stopped";
});
