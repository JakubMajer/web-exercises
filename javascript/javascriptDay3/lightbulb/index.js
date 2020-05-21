'use strict'

let change = () => {
    let On = document.querySelector ('#bulb');

    if (On.className ==='on') {
        On.className = 'off';
    } else {
        On.className = 'on';
    }
}
