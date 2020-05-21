'use strict'

const nums = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

// let sum = 0;
// nums.forEach((x, index) => sum += x);

// nums.forEach((x, index) => {
//     console.log('x: ' + x + ', index: ' + index) 

// });

// const printIfSeven = (x, index) => {
//     if (x === 8) {
//         console.log(index);
//     }
// }
// nums.forEach(printIfSeven);











const numbers = nums

for(let i = 0; i < 5; i = i + 1) {
    console.log(numbers[i]);
}

2

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] ** 2);
}

3

for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0){
        console.log(numbers[i])
    }
}

4

for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0){
        console.log(-numbers[i]);

    } else {
        console.log(numbers[i]);
    }
}

5


for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] === -10){
        console.log(i);
    } 
}

6


for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] %2  === 0) {
        console.log(numbers[i]);
    }
};










// for(let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

// for(let i = 0; i < numbers.length; i++) {
//     console.log(5 - numbers[i]);
// }

// for(let i = 0; i < numbers.length; i++) {
//     console.log((5 - numbers[i]) ** 2); 
// }