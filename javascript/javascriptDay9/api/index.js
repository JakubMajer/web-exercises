'use strict'

fetch('https://api.abalin.net/today')
.then((resp) => resp.json())
.then((json) => { 
    const title = document.querySelector('h1');
    console.log(json.data)
    title.textContent = `Today is ${json.data.namedays.cz}'s nameday`;
});