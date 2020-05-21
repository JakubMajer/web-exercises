'use strict'

// const greet = (name) => {
//     return 'Hello ' + name;
// };

// const apply = (fn, x) => {
//     return fn(x);
// };

// console.log(
//     apply(greet, 'Sue')
// );


// const func = (x) => x * x;

// const bar = (fn) => {
//     return fn(6);
// }

// console.log(
//     bar((bedonkadonk) => bedonkadonk / 2)
//     );

    
    const bar = (fn,s) => {
        return fn(s) + fn(s * 2);
    };

    console.log(
        bar((squiggly) => squiggly + 3, 5)
    );

    const greet = () => {
        console.log('bedonkadonk');
    };

    setTimeout(greet, 5000);

    setTimeout(() => {
        console.log('bedonkadonk');
    }, 5000);

    let count = 0;
    
    const timerId = setInterval(() => {
        count += 1;
        console.log(count + ':bedonkadonk');
    }, 2000);

    const stop = () => {
        clearInterval(timerId)
    }