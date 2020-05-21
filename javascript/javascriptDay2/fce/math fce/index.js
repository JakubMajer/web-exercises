'use strict'

const square = (number) =>  (number*number);
console.log(square(6));

const hypotenuse = (jakub,richard)=> Math.sqrt(square(jakub*jakub) + square(richard*richard))
console.log(hypotenuse(3,4));


const abs = (number) => {
    if (number >= 0) {
        return number;
    } else {
        return -number;
    }
};

console.log(abs(2));



