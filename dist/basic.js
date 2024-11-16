"use strict";
console.log("hello");
console.log("hi");
const age = 35;
const myName = "shahid";
const isBoolean = true;
//Array:array is the collection of same type data
const numbers = [1, 2, 3, 5, 6, 8];
console.log(numbers);
const info = ["sumi", "sohel", 35, 33, true, null, undefined]; //in javascript-->array
const info2 = [
    "sumi",
    "sohel",
    35,
    33,
    true,
    null,
    undefined,
]; //in TS--->tuple
console.log(info);
console.log(info2);
const Person = {
    name: "shahid",
    //   age: 35,
    age: "35",
    designation: "problem solver",
    isActiveInCoding: true,
    company: "JS Enterprise",
};
//normal function
function multifly(num1, num2) {
    // function multifly(num1:any,num2:number){
    const result = num1 * num2;
    return result;
}
// const multiplyResult = multifly(4,5);
const multiplyResult = multifly(41, 5);
console.log("multiplication result is : " + multiplyResult);
const sum = (a, b) => {
    return a + b;
};
const sumResult = sum(7, 8);
console.log(sumResult);
