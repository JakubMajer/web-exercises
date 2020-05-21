'use strict'


class Lightbulb {
    constructor(on) {
        this.on = on;
    }



render() {

    const lightbulb = document.createElement('div');
    lightbulb.className = 'off';

    
    lightbulb.addEventListener('click', () => {

        if (this.on === true) {
            this.on = false;
    
        } else {
            this.on = true;
        }
        this.update()
    });

    return lightbulb;

}



mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  };


  update = () => {

    if (this.on === true) {
        this.element.className = 'on';

    } else {
        this.element.className = 'off';
    }
   
  }
   
};





const bulbs = document.querySelector('#bulbs');

const bulb1 = new Lightbulb(true);
bulb1.mount(bulbs);


const bulb2 = new Lightbulb(false);
bulb2.mount(bulbs);