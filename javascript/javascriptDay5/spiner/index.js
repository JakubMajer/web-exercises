'use strict'


const change = () => {
    let spinner = document.querySelector('#spinner');
    let img = document.querySelector('#image');
    img.classList.add('imageOn');
    spinner.classList.add('spinnerOff');
};

setTimeout(change, 4000);