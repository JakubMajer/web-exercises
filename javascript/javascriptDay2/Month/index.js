'use strict'

const month= Number(prompt('enter month'));

if (month === 1 || month === 3 || month === 5)  {
    document.write('this month have 31 days');

} else if (month === 4 || month === 6) {
    document.write(' this month have 30 days');

} else if (month === 2) {
    document.write(' this month have 28 days');
}