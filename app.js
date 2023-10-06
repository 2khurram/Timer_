// script.js
let timerInterval;
let timeInSeconds = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeInSeconds++;
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    document.getElementById('timer').innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    timeInSeconds = 0;
    document.getElementById('timer').innerText = '00:00:00';
    clearInterval(timerInterval);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
}