'use strict'

const email = '@codeboot.com';
const emailFromLogin = (name) => name+email;
console.log(emailFromLogin('jakub'));



const loginFromName = (name,surname) => name.slice(0,5).toLowerCase()+'.'+surname.slice(0,3).toLowerCase();
console.log(loginFromName('first','last'));


const emailFromName = (name,surname) => {
    let stepOne = loginFromName(name,surname);
    let stepTwo = emailFromLogin(stepOne);
    return stepTwo;
}

console.log(emailFromName ('petr','babak'));