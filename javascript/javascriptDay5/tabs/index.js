'use strict'

// let button1 = document.querySelector('#button1');
// let text1 = document.querySelector('#text1')
// let button2 = document.querySelector('#button2');
// let text2 = document.querySelector('#text2')
// let button3 = document.querySelector('#button3');
// let text3 = document.querySelector('#text3');

const buttons = document.querySelectorAll('.item');
const texts = document.querySelectorAll('.text');

const reset = () => {
    for (let i = buttons.length - 1; i >= 0; i--) {
        console.log(i);
        buttons[i].classList.remove('active');
        texts[i].classList.add('hidden');
    }
    // button1.classList.remove('active');
    // button2.classList.remove('active');
    // button3.classList.remove('active');
    // text1.classList.add('hidden')
    // text2.classList.add('hidden');
    // text3.classList.add('hidden');
}

const change = (index) => {
    reset();
    buttons[index].classList.add('active');
    texts[index].classList.remove('hidden');
};



// const change2 = () => {
//     let button2 = document.querySelector('#button2');
//     let text2 = document.querySelector('#text2')
//     button2.classList.add('active');
//     button1.classList.remove('active');
//     button3.classList.remove('active');
//     text2.classList.remove('hidden');
//     text1.classList.add('hidden');
//     text3.classList.add('hidden');
// };


// const change3 = () => {
//     let button3 = document.querySelector('#button3');
//     let text3 = document.querySelector('#text3')
//     button3.classList.add('active');
//     button1.classList.remove('active');
//     button2.classList.remove('active');
//     text3.classList.remove('hidden');
//     text2.classList.add('hidden');
//     text1.classList.add('hidden');
// };





// const changetext1 = () => {
//     let text = 

// }