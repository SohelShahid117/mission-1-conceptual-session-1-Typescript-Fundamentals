{
//jokon ami typescript er cheye beshi bojbo tokon type assertion use korbo

// const msg:unknown ="hello shahid bhai.u r best"
// const msg:unknown =9999
const msg:unknown ="9999"
// const messageLength = msg.length
const messageLength = (msg as string).length  //aikhane as string use koratai holo type assertion as use korai porber error t chole gelo

console.log(msg) 
// console.log(msg.length) 
console.log( messageLength ) 









}