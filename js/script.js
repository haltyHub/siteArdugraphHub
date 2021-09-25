"use strict";  

// let num = 20;

// function showFirstMassage(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMassage ('hallo');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(348644, 434756));


document.body.style.background = 'red';
setTimeout(() => document.body.style.background = '', 3000);



const calc = (a, b) => a + b;
console.log(calc(5, 2));


function calc2(a, b) {
    return (a + b);
}

console.log(calc2(1, 2));