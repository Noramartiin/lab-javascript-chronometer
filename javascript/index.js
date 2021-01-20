const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {

}

function printMinutes() {

  let minutes= cronometer.twoDigitsNumber(chronometer.getMinutes())
  minUni.innerText= minutes[1]
  minDec.innerText= minutes[0]
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());

  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
// ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {

}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {

}

function setResetBtn() {
  // ... your code goes here
}


// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  switch (btnLeft.innerText) {
    case 'START':
      btnLeft.innerText = 'STOP';
      btnLeft.className = 'btn stop';
      break;
    case 'STOP':
      btnLeft.innerText = 'START';
      btnLeft.className = 'btn start';
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  switch (btnRight.innerText) {
    case 'RESET':
      btnRight.innerText = 'SPLIT';
      btnRight.className = 'btn split';
      break;
    case 'SPLIT':
      btnRight.innerText = 'RESET';
      btnRight.className = 'btn reset';
  }
});






