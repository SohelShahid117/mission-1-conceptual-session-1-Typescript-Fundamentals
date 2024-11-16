"use strict";
{
    const Person = {
        name: "shahid",
        age: 35,
        address: "ctg",
        isProgrammer: true,
        salary: 500000,
    };
    //object teke destructuring korle {} bracket r array teke hole [] bracket use hobe
    //   const {name:string,salary:number} = Person;
    const { name, salary } = Person;
    console.log(name);
    console.log(salary);
}
