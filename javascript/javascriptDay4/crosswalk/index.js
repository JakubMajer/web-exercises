'use strict'

const reset = () => {
    let stopdiv = document.querySelector('#stopdiv');
    stopdiv.classList.add('stop-on');
    stopdiv.classList.remove('stop-off');

    let walkdiv = document.querySelector('#walkdiv');
    walkdiv.classList.add('walk-off');
    walkdiv.classList.remove('walk-on');
}

const cross = () => {
    let stopdiv = document.querySelector('#stopdiv');
    stopdiv.classList.add('stop-off');
    stopdiv.classList.remove('stop-on');

    let walkdiv = document.querySelector('#walkdiv');
    walkdiv.classList.add('walk-on');
    walkdiv.classList.remove('walk-off');
   
    setTimeout(reset, 1000);
}
