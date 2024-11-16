{
    //generic

    //generic--->type k dynamic korakei generic bole
    
    //use generic in array
    type dynamicArrayType<param>=Array<param>
    // const numArray : number[] = [1,2,3,4,5,6,7,8];
    // const numArray : Array<number> = [1,2,3,4,5,6,7,8];
    const numArray : dynamicArrayType<number> = [1,2,3,4,5,6,7,8];

    // const stringArray : string[] = ["sohel","sumi","adil","tuhin"];
    // const stringArray : Array<string> = ["sohel","sumi","adil","tuhin"];
    const stringArray :dynamicArrayType<string> = ["sohel","sumi","adil","tuhin"];

    // const boolArray : boolean[] = [true,false,true,true,false,true]
    // const boolArray : Array<boolean> = [true,false,true,true,false,true]
    const boolArray : dynamicArrayType<boolean> = [true,false,true,true,false,true]


    //use generic in object || interface
    // interface IPerson {
    // interface IPerson<dynamicParam> {
    interface IPerson<dynamicParam,param2> {
        name:string;
        age:number;
        // isProgrammer:boolean;
        isProgrammer:param2;
        salary:number;
        // id:string|number|boolean|null|undefined
        id:dynamicParam
    }
    // const person:IPerson={
    // const person:IPerson<string>={
    // const person:IPerson<number>={
    const person:IPerson<boolean,string>={
        name:"shahid",
        age:35,
        // isProgrammer:true,
        isProgrammer:"Yes",
        salary:500000,
        // id:"so123"
        // id:123
        id:true
    }
    console.log(person)


    //use generic in function

    // const messageType=(msg:string)=>{
    // const messageType=(msg:any)=>{
    // const messageType=<msgT>(msg:msgT)=>{
    const messageType=<msgT1,msgT2,IPerson>(msg1:msgT1,msg2:msgT2,msg3:IPerson)=>{
        // return msg;
        return {msg1,msg2,msg3};
    }
    // console.log(messageType("hello,sumi"));
    // console.log(messageType(222333));
    // console.log(messageType<string>("how r u?"));
    console.log(messageType<boolean,string,IPerson<boolean,string>>(true,"how r u?",person));









}