{
    //constraint
    
    // function getLength<typppp>(msg:typppp){
    // function getLength<typppp>(msg:typppp){
    function getLength<typppp extends {length:number}>(msg:typppp){

        //ai j akhane jor kore extends use kora hoyeche length k add korar jonno atkei bola hoi constraint

        // return msg
        return msg.length;
        // return (msg as string).length;
    }

    // console.log(getLength("hello dunia"))
    console.log(getLength<string>("hello dunia"))
    // console.log(getLength<number>("hello dunia"))






}