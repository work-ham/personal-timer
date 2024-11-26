const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const stopBtn = document.getElementById("stop-btn");
const alarmSound = document.getElementById("alarm-sound");

const hoursInput = document.getElementById("hours-input");
const minutesInput = document.getElementById("minutes-input");
const secondsInput = document.getElementById("seconds-input");

let startTime = null;
let timerDuration = 0;
let timerInterval = null;
let alarmInterval = null;
let isPaused = false;

// Start the timer
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
stopBtn.addEventListener("click", stopAlarm);

// Add event listeners to the preset buttons
const presetButtons = document.querySelectorAll('.preset-btn');
presetButtons.forEach(button => {
  button.addEventListener('click', () => {
    const presetMinutes = parseInt(button.getAttribute('data-time'));
    hoursInput.value = 0;
    minutesInput.value = presetMinutes;
    secondsInput.value = 0;
    startTimer(); // Automatically start with the preset
  });
});

// Timer functions
function startTimer() {
  if (!isPaused) {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    timerDuration = (hours * 3600 + minutes * 60 + seconds) * 1000;
    startTime = Date.now();
    isPaused = false;
  } else {
    startTime = Date.now() - (timerDuration - (Date.now() - startTime));
  }

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(updateTimer, 100);
}

function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    isPaused = true;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerDuration = 0;
  startTime = null;
  timerDisplay.textContent = "00:00:00";
  document.title = "Personal Timer"; // Reset the title when the timer is reset
  stopAlarm(); // Also stop the alarm when resetting
}

function updateTimer() {
  const elapsed = Date.now() - startTime;
  const timeRemaining = Math.max(timerDuration - elapsed, 0);

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    startAlarm(); // Start the alarm when time reaches zero
    document.title = "Time's up!"; // Set title to show when time is up
    timerDisplay.textContent = "00:00:00";
    return;
  }

  const hours = Math.floor(timeRemaining / 3600000);
  const minutes = Math.floor((timeRemaining % 3600000) / 60000);
  const seconds = Math.floor((timeRemaining % 60000) / 1000);

  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  timerDisplay.textContent = formattedTime;

  // Update the tab title with the remaining time
  document.title = `Timer: ${formattedTime}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

// Function to start the repeating alarm sound
function startAlarm() {
  alarmSound.play();
  alarmInterval = setInterval(() => {
    alarmSound.currentTime = 0;
    alarmSound.play();
  }, 61000); // Repeat the alarm every 1 minute 1 seconds
}

// Function to stop the repeating alarm
function stopAlarm() {
  clearInterval(alarmInterval);
  alarmSound.pause();
  alarmSound.currentTime = 0; // Reset the alarm sound to the start
}
