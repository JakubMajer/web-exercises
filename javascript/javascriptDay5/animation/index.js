'use strict'
const handleKeyUp = (event) => {
    console.log(event);
    const boxElm = document.querySelector('.box');

    if (event.code === 'KeyK') {
        boxElm.classList.toggle('on');
    } else {
        boxElm.classList.remove('on')
    }
}

const add = (num1, num2) => {
    const result = num1 + num2;
    const result2 = num1 - num2;
    // return {'sum': result, 'diff': result2};
}

document.addEventListener('keyup', handleKeyUp);


const priklad = 3+4;
console.log(priklad);