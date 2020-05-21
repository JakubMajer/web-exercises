'use strict'

const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];

const results = document.querySelector('#results');

items.forEach((departures) => {
    results.innerHTML += `<li>${departures}</li>`;
});

for(let i = 0; i < departures.length; i++) {
    console.log(Math.floor(departures[i]) / 60 );

}