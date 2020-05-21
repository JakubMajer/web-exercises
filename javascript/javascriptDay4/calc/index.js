'use strict'

const count = () => {
    const input1 = Number(document.querySelector('.firstInput').value);
    const input2 = Number(document.querySelector('.secondInput').value);
    const count = input1+input2;

    document.querySelector('.answer').textContent = count;
    input1.focus()

}