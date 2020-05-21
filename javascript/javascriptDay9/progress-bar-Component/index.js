'use strict';

const app = document.querySelector('#app');

const bar1 = new ProgressBar(5, 17, 'red');
bar1.mount(app);

const bar2 = new ProgressBar(10, 17, 'green');
bar2.mount(app);

const bar3 = new ProgressBar(15, 17, 'blue');
bar3.mount(app);



const button = document.querySelector('.show-color')

button.addEventListener('click', () => { 
    console.log(bar1.color)
    const color = `rgb(${bar1.value*15}, ${bar2.value*15}, ${bar3.value*15})
    `
    console.log(color,'color')

   button.style.backgroundColor = color;
});