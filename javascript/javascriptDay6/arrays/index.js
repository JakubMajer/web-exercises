'use strict'

const users = ['sam', 'joe', 'alex', 'tayler', 'michal'];
const logged = [true, false, false, true, false];


const numbers = [[1, 3, 5], [4, 2, 6],  [8, 7, 9]];


const marks = [5, 4, 2, 1, 3];

for (let i = 0; i < marks.length; i += 2) {
    console.log(marks[i]);
}


const num = [9, 5, 3, 1, 12, 7, 8, 4, 6];

for (let i = 0; i > num.length -1 ; i += 1) {
    if (num[i] % 2 ===0) {
        console.log(num[i])
    }
}

const num = [9, 5, 3, 1, 12, 7, 8, 4, 6];

let s = 0;

for (let i = 0; i < num.length -1 ; i += 1) {
   s += nums[i];
   
}

console.log(s);


