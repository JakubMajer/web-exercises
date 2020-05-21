'use strict'

const groceryItems = [
    'apples',
    'bananas',
    'chocolate',
    'bread',
]

const listOfItems = document.querySelector('#list');

groceryItems.forEach((listOfItems) => {
  
  listOfItems.innerHTML += `<li>${groceryItems}</li>`;
});