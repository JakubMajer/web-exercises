'use strict'

const area = (width,height) => width * height;
const roll = () => Math.floor(Math.random() * 6) +1;


const abs = (number) => {
    if (number >= 0) {
        return number;
    } else {
        return -number;
    }
};