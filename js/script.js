window.addEventListener('load', start);

var redRange = document.querySelector('#red-color');
var greenRange = document.querySelector('#green-color');
var blueRange = document.querySelector('#blue-color');

var inputRed = document.querySelector('#red-value');
var inputGreen = document.querySelector('#green-value');
var inputBlue = document.querySelector('#blue-value');

var square = document.getElementById('square');

function start() {
  addColorOnInput();
  addColorOnSquare();
  // render();
  // inputRed.value + ', ' + inputGreen.value + ', ' + inputBlue.value;
}

function addColorOnInput() {
  inputRed.value = redRange.value;
  inputGreen.value = greenRange.value;
  inputBlue.value = blueRange.value;
  addColorOnSquare();
  colorRange();
  // render();
}

function colorRange() {
  redRange.addEventListener('input', addColorOnInput);
  greenRange.addEventListener('input', addColorOnInput);
  blueRange.addEventListener('input', addColorOnInput);
  // square.addEventListener('click', colorRange);
  // render();
}

function addColorOnSquare() {
  // square.addEventListener('click', colorRange);
  square.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value}`;
  console.log(square.style.backgroundColor);
  // render();
}

// function render() {
//   square.addEventListener('change', addColorOnSquare);
// }

// style.backgroundColor
