"use strict";
{
    // const numArray : number[] = [1,2,3,4,5,6,7,8];
    // const numArray : Array<number> = [1,2,3,4,5,6,7,8];
    const numArray = [1, 2, 3, 4, 5, 6, 7, 8];
    // const stringArray : string[] = ["sohel","sumi","adil","tuhin"];
    // const stringArray : Array<string> = ["sohel","sumi","adil","tuhin"];
    const stringArray = ["sohel", "sumi", "adil", "tuhin"];
    // const boolArray : boolean[] = [true,false,true,true,false,true]
    // const boolArray : Array<boolean> = [true,false,true,true,false,true]
    const boolArray = [true, false, true, true, false, true];
    // const person:IPerson={
    // const person:IPerson<string>={
    // const person:IPerson<number>={
    const person = {
        name: "shahid",
        age: 35,
        // isProgrammer:true,
        isProgrammer: "Yes",
        salary: 500000,
        // id:"so123"
        // id:123
        id: true
    };
    console.log(person);
    //use generic in function
    // const messageType=(msg:string)=>{
    // const messageType=(msg:any)=>{
    // const messageType=<msgT>(msg:msgT)=>{
    const messageType = (msg1, msg2, msg3) => {
        // return msg;
        return { msg1, msg2, msg3 };
    };
    // console.log(messageType("hello,sumi"));
    // console.log(messageType(222333));
    // console.log(messageType<string>("how r u?"));
    console.log(messageType(true, "how r u?", person));
}
