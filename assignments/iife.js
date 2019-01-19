"use strict";

/*
From MDN:

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(function () {
    statements
})();

*/

(() => console.log('Hello, World!'))();


// use iife to create a counter

const counter = (() => {let count = 0; return () => ++count;})();

console.log(counter());
console.log(counter());
console.log(counter());

// okay, that kind of makes my head hurt!
