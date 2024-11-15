console.log("hello");
console.log("hi");

const age: number = 35;
const myName: string = "shahid";
const isBoolean: boolean = true;

//Array:array is the collection of same type data
const numbers: number[] = [1, 2, 3, 5, 6, 8];
console.log(numbers);

const info = ["sumi", "sohel", 35, 33, true, null, undefined]; //in javascript-->array
const info2: [string, string, number, number, boolean, null, undefined] = [
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

//in array store only same type data but in tuple store can different type data

//15 min done


type PersonType = {
    name:string; 
    age: number | string;
    designation: string;
    isActiveInCoding: boolean;
    company: string;
  }
const Person: PersonType = {
  name: "shahid",
//   age: 35,
  age: "35",
  designation: "problem solver",
  isActiveInCoding: true,
  company: "JS Enterprise",
};

//normal function
function multifly(num1:number,num2:number):number{
// function multifly(num1:any,num2:number){
    const result = num1*num2;
    return result;
}
// const multiplyResult = multifly(4,5);
const multiplyResult = multifly(41,5);
console.log("multiplication result is : "+multiplyResult)

const sum=(a:number,b:number):number=>{
    return a+b;
}
const sumResult = sum(7,8);
console.log(sumResult)
