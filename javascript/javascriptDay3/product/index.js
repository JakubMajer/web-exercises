'use strict'


const handleLoad = () => {
    let btn = document.querySelector('#buy');
    btn.classList.add('color2');

}

const handleClick = () => {

    let btn = document.querySelector('#buy');
    btn.classList.add('color1');
    btn.classList.remove('color2');
    let piecesString = document.querySelector('#pieces').value;
    let piecesInCart = Number(piecesString);
    if (!isNaN(piecesString)) {
        btn.textContent= "pieces in cart " + Math.round(piecesString)
    } else {
        alert("jsi debil. " + piecesString + " neni cislo");
    }
};


