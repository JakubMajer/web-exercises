'use strict'


const number = document.querySelector('.rating__value');
const stars = document.querySelectorAll('.rating__star')

let value = 3;


// number.forEach(value => {
//     number.textContent = value;
// });

stars[0].addEventListener('click', () => {
    
    value = 1

    number.textContent= value;

    stars[0].classList.add('rating__star--on')
    stars[1].classList.remove('rating__star--on')
    stars[2].classList.remove('rating__star--on')
    stars[3].classList.remove('rating__star--on')
    stars[4].classList.remove('rating__star--on')



    

});
  
  stars[1].addEventListener('click', () => {
 
  
    value = 2

    number.textContent= value;

    stars[0].classList.add('rating__star--on')
    stars[1].classList.add('rating__star--on')
    stars[2].classList.remove('rating__star--on')
    stars[3].classList.remove('rating__star--on')
    stars[4].classList.remove('rating__star--on')

  });


  stars[2].addEventListener('click', () => {
 
  
    value = 3
    
    number.textContent= value;

    stars[0].classList.add('rating__star--on')
    stars[1].classList.add('rating__star--on')
    stars[2].classList.add('rating__star--on')
    stars[3].classList.remove('rating__star--on')
    stars[4].classList.remove('rating__star--on')


  });

  stars[3].addEventListener('click', () => {
 
  
    value = 4
    
    number.textContent= value;

    stars[0].classList.add('rating__star--on')
    stars[1].classList.add('rating__star--on')
    stars[2].classList.add('rating__star--on')
    stars[3].classList.add('rating__star--on')
    stars[4].classList.remove('rating__star--on')


  });

  stars[4].addEventListener('click', () => {
 
  
    value = 5
    
    number.textContent= value;

    stars[0].classList.add('rating__star--on')
    stars[1].classList.add('rating__star--on')
    stars[2].classList.add('rating__star--on')
    stars[3].classList.add('rating__star--on')
    stars[4].classList.add('rating__star--on')


  });
