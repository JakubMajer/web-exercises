'use strict'

const expenses = [
    {name:'petr',
    item: 'toilet paper',
    amount: 70,
    },
    {
    name:'jade',
    item: 'flour',
    amount: 25,
    },
    {
    name:'anna',
    item: 'soap' ,
    amount: 80,
    },
    {
    name:'vit',
    item: 'beers' ,
    amount: 120,
    }

];


const expense = {
    name: 'peter',
    item: 'toilet paper',
    amount: 70,
};


const course = {
    title: 'JavaScript',
    duration: 80,
    price: 2000,
    discPrice: 12,
    lessons: [
        {
            topic: 'Instruction',
            teaser: 'Basics'
        },
        {
            topic: 'Valuables',
            teaser: 'Drawers'
        },
       ]
};


const list = [
    'apples',

];

const listElm = document.querySelector('shoppingList');

list.forEach((item) = document.innerHTML