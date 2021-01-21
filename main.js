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
  tens <= 9 ? (tensTime.innerHTML = "0" + tens) : (tensTime.innerHTML = tens);
  if (tens > 99) {
    seconds++;
    tens = "00";
  }
  seconds <= 9
    ? (secondsTime.innerHTML = "0" + seconds)
    : (secondsTime.innerHTML = seconds);
}

let seconds1 = document.getElementById("sec1");
let mins1 = document.getElementById("min1");
let hour1 = document.getElementById("hour1");
let startButton1 = document.querySelector("#start1");
let stopButton1 = document.querySelector("#stop1");
let resetButton1 = document.querySelector("#reset1");
let hrTime = document.getElementById("hours");
let minTime = document.getElementById("minutes");
let secTime = document.getElementById("seconds1");
let setTimer = document.getElementById("submit");
let interval1;

setTimer.addEventListener("click", (e) => {
  e.preventDefault();
  if (hour1.value != "" && mins1.value != "" && seconds1.value != "") {
    hrTime.innerHTML =
      parseInt(hour1.value) < 10
        ? "0" + parseInt(hour1.value)
        : hour1.value.toString();
    minTime.innerText =
      mins1.value < 10 ? "0" + parseInt(mins1.value) : mins1.value.toString();
    secTime.innerText =
      seconds1.value < 10
        ? "0" + parseInt(seconds1.value)
        : seconds1.value.toString();
    console.log(hour1.value, mins1.value, seconds1.value);
    stopButton1.onclick = () => {
      clearInterval(interval1);
    };
    resetButton1.onclick = () => {
      clearInterval(interval1);
      hrTime.innerHTML =
        parseInt(hour1.value) < 10
          ? "0" + parseInt(hour1.value)
          : hour1.value.toString();
      minTime.innerText =
        mins1.value < 10 ? "0" + parseInt(mins1.value) : mins1.value.toString();
      secTime.innerText =
        seconds1.value < 10
          ? "0" + parseInt(seconds1.value)
          : seconds1.value.toString();
    };
    startButton1.onclick = () => {
      clearInterval(interval1);
      interval1 = setInterval(startTimer, 1000);
    };
    let hr = parseInt(hour1.value);
    let min = parseInt(mins1.value);
    let sec = parseInt(seconds1.value);
    console.log(hr, min, sec);
    let startTimer = () => {
      sec--;
      if (sec < 0) {
        sec = 59;
        min--;
      }
      if (min < 0) {
        min = 59;
        hr--;
      }
      if(hr<=0&&min<=0&&sec<=0){
        clearInterval(interval);
        alert("Time is up");
        stopButton1.onclick();
      }
      secTime.innerText = sec < 10 ? "0" + sec.toString() : sec.toString();
      minTime.innerText = min < 10 ? "0" + min.toString() : min.toString();
      hrTime.innerText = hr < 10 ? "0" + hr.toString() : hr.toString();
    };
  }else{
    document.getElementById('message').innerHTML=`<b style="font-size:1rem">Fill all blanks</b>`
    document.getElementById('message').className='alert alert-danger';
    setTimeout(()=>{
      document.getElementById('message').innerHTML=``
    document.getElementById('message').className='';
    },1000)
  }
});
