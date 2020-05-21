'use strict'


const lock = document.querySelector('#lock');
const text = document.querySelector('#text');

const mousein = () => {
    text.classList.remove('color1');
    text.classList.add('color2');
    console.log('hi')
}

lock.addEventListener('mouseenter', mousein); 



const mouseout = () => {

    text.classList.add('color1');
    text.classList.remove('color2');
    console.log('bi');


}

lock.addEventListener('mouseleave', mouseout)


// same code in here!!!!

// lock.addEventListener('mouseenter', () => {
//         text.classList.remove('color1');
//         text.classList.add('color2');
//         console.log('hi');
// });
   
// lock.addEventListener('mouseleave', () => {
//         text.classList.add('color1');
//         text.classList.remove('color2');
//         console.log('bi');

// });



