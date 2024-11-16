{

    //generic--->type k dynamic kora
    
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









}