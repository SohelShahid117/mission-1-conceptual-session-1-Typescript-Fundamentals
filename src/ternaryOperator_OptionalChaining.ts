{
    //ternary operator
    // const isAdmin:boolean = true;
    const isAdmin:boolean = false;
    const message:string = isAdmin?"welcome admin" : "welcome user";
    console.log(message)

    
    
    //optional chaining
    const data:{
        name:string
        address:string
    } = {
        name:"sohel",
        address:"ctg,rangunia"
    }
    console.log(data)
    console.log(data.name)
    console.log(data?.name?.firstName)
}