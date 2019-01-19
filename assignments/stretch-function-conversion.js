"use strict";

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax
// Hmmmm, this looks a lot like this week's coding challenge

// let myFunction = function () {};
const myFunction = () => {};

console.log(myFunction());


// let anotherFunction = function (param) {
//   return param;
// };
const anotherFunction = (param) => param;

console.log(anotherFunction(42));


// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
const add = (param1, param2) => param1 + param2;

console.log(add(1, 2));


// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
const subtract = (param1, param2) => param1 - param2;

console.log(subtract(1, 2));


// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const exampleArray = [1, 2, 3, 4];

const triple = exampleArray.map(x => x * 3);

console.log(triple);

