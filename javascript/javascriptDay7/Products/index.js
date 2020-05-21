'use strict'

class Product {
    constructor(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

sell() {
    return `${this.name} ${this.price} ${this.quantity}`
}

};


const Products = [
    new Product ('bike', 2000, 1),
    new Product ('helmet', 100, 1),
    new Product ('lock', 50, 1),
    new Product ('lights', 100, 1),
    new Product ('pump', 80, 1),
    new Product ('tools', 20, 1),
    new Product ('tires', 100, 1),
];


Products.forEach((product) => {
    console.log(product.sell());
  });