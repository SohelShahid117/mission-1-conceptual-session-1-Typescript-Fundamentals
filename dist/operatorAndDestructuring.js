"use strict";
{
    console.log("spread operator,rest operator & destructuring");
    const rolls = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    const AllInfoOfPerson = Object.assign(Object.assign({}, Person), { salary: 500000 });
    console.log(AllInfoOfPerson);
    //10 min done
}
