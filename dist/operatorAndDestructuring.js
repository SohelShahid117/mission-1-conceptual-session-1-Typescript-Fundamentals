"use strict";
{
    //spread operator,rest operator & destructuring
    console.log("spread operator,rest operator & destructuring");
    const rolls = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //spread operator
    const allRools = [...rolls, 11, 12, 13];
    console.log(allRools);
    const Person = {
        name: "shahid",
        //   age: 35,
        age: "35",
        designation: "problem solver",
        isActiveInCoding: true,
        company: "JS Enterprise",
    };
    //spread operator
    const AllInfoOfPerson = Object.assign(Object.assign({}, Person), { salary: 500000 });
    console.log(AllInfoOfPerson);
    //rest operator & destructuring
    const [firstElement, ...restElement] = [4, 5, 6, 7, 8, 9, 1, 2, 3, 44, 55, 66, 88];
    console.log("first : " + firstElement);
    console.log("rest is : " + restElement);
    //destructuring from an object
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50
    };
    let { firstName, lastName } = person;
    console.log(firstName);
    console.log(lastName);
}
