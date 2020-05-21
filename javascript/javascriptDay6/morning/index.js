'use strict'

const navbar = document.querySelector('.navbar');
let timedId = null;

navbar.addEventListener('mouseenter', () => {
    clearTimeout(timerId);
    navbar.classList.remove('navbarclosed');
});

navbar.addEventListener('mouseleave', () => {
    timerId = setInterval
    navbar.classList.add('navbarclosed');
    
});