let setAlarm = document.getElementById("button");
function startClock() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";
  if (hours >= 12) {
    hours = hours - 12;
    session = "PM";
  }
  let time =
    (hours <= 9 ? "0" + hours : hours) +
    ":" +
    (mins <= 9 ? "0" + mins : mins) +
    ":" +
    (seconds <= 9 ? "0" + seconds : seconds) +
    " " +
    session;
  document.querySelector("#clock").innerText = time;
  setTimeout(startClock, 1000);
}
startClock();

let seconds = 0;
let tens = 0;
let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let resetButton = document.querySelector("#reset");
let tensTime = document.querySelector("#tens");
let secondsTime = document.querySelector("#seconds");
let interval;
startButton.onclick = () => {
  clearInterval(interval);
  interval = setInterval(startWatch, 10);
};
stopButton.onclick = () => {
  clearInterval(interval);
};
resetButton.onclick = () => {
  clearInterval(interval);
  seconds = "00";
  tens = "00";
  tensTime.innerText = tens;
  secondsTime.innerText = seconds;
};
function startWatch() {
  tens++;
  if (tens <= 9) {
    tensTime.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    tensTime.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    tens = "00";
  }
  if (seconds <= 9 && seconds > 0) {
    secondsTime.innerHTML = "0" + seconds;
  }
  if (seconds > 9) {
    secondsTime.innerHTML = seconds;
  }
}
