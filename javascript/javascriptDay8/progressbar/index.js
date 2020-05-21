'use strict'

document.addEventListener('DOMContentLoaded', () => {
  console.log('It works');
});

const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');

const line = document.querySelector('#knob');
  
const number = document.querySelector('#counter');


let value = 4;
let maxValue = 10;
const maxNumber = document.querySelector('#maximum')
maxNumber.textContent = maxValue

plus.addEventListener('click', () => {
  if (value < maxValue) {
    value += 1
  }
  number.textContent=value
  line.style.width = value * math(maxValue) + '%'

});

minus.addEventListener('click', () => {
  if (value > 0) {
    value -= 1
  }

  number.textContent=value
  line.style.width = value * math(maxValue) + '%'

});

const math = (number) => {
  return 100/number
}


// for (i = 0; i < number.length; i++) {
//   onclick(plus) = (number + 1);
// };

// for (i = 0; i < number.length; i++) {
//   onclick(minus) = (number - 1);
// };
