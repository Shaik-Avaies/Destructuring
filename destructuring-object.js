'use strict';

let toybox = { item1: 'car', item2: 'ball', item3: 'frisbee' };

let {item1 : avaies} = toybox;
let {item1,item2} = toybox;

console.log(avaies);
console.log(item2);