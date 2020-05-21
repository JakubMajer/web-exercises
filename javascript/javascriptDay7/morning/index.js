const name = 'anna';
const age = 24;

const msg = 'our friend' + name + 'turned' + age + 'today'

const msg2 = `our firend ${name} turned ${age} today`


const items = [
    'apples',
    'milk',
    'flour',
    'suger',
    'butter',
    'eggs',
  ];

const shoppingListElm = document.querySelector('.shopping-list');

items.forEach((item) => {
    shoppingListElm.innerHTML += `<li>${item}</li>`;
});
