"use strict";
var _a;
{
    //ternary operator
    // const isAdmin:boolean = true;
    const isAdmin = false;
    const message = isAdmin ? "welcome admin" : "welcome user";
    console.log(message);
    //optional chaining
    const data = {
        name: "sohel",
        address: "ctg,rangunia"
    };
    console.log(data);
    console.log(data.name);
    console.log((_a = data === null || data === void 0 ? void 0 : data.name) === null || _a === void 0 ? void 0 : _a.firstName);
}
