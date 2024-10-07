const valorMax = document.getElementById("valor_max");
const alturaTotal = document.getElementById("altura_total");
const alturaInterna = document.getElementById("altura_interna");
const urlWeb = document.getElementById("url");

valorMax.textContent = Number.MAX_VALUE;
alturaTotal.textContent = screen.height;
alturaInterna.textContent = window.innerHeight;
urlWeb.textContent = document.URL;

//---------PART 2----------------------//

let totalSeconds = 0;
let setIntervalCode = null;
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let changeMinutes = document.getElementById("change-minutes");
let changeSeconds = document.getElementById("change-seconds");

const btnStartTimer = document.getElementById("start-timer");
const btnStopTimer = document.getElementById("stop-timer");

// view time
function viewTime() {
  if (totalSeconds == 0) {
    document.getElementById("music").play();
    clearInterval(setIntervalCode);
    setIntervalCode = null;
    totalSeconds = 0;
  }
  minutes.textContent = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, 0);
  seconds.textContent = Math.floor(totalSeconds % 60)
    .toFixed(0)
    .toString()
    .padStart(2, 0);
}

// Set and start timer
btnStartTimer.addEventListener("click", () => {
  if (setIntervalCode !== null) {
    clearInterval(setIntervalCode);
  }

  totalSeconds = +changeMinutes.value * 60 + +changeSeconds.value;

  viewTime();

  setIntervalCode = setInterval(() => {
    totalSeconds--;
    viewTime();
  }, 1000);
});

// Stop timer & reset
btnStopTimer.addEventListener("click", () => {
  if (setIntervalCode !== null) {
    clearInterval(setIntervalCode);
    setIntervalCode = null;
    totalSeconds = 0;
    viewTime();
  }
});
