{
    //interface
//interface use kora hoi Object Oriented Programming er khetre r type use kora hoi functional programming er khetre

 //type
  type PersonType = {
    name: string;
    age: number;
    address: string;
    isProgrammer: boolean;
    salary: number;
  };

  const Person:PersonType = {
    name: "shahid",
    age: 35,
    address: "ctg",
    isProgrammer: true,
    salary: 500000,
  };

  //object teke destructuring korle {} bracket r array teke hole [] bracket use hobe
  //  const {name:string,salary:number} = Person;
  const {name,salary} = Person;
  console.log(name)
  console.log(salary)

  //interface
  interface IPerson {
    readonly name: string;
    age: number;
    address: string;
    isProgrammer: boolean;
    // salary: number;
  }

  interface IPerson{
    salary: number;
  }

  const Person2:IPerson={
    name: "sumi",
    age: 33,
    address: "isakhali",
    isProgrammer: false,
    salary: 50000
  }
//   Person2.name = "shamim"--->due to given readonly we can't change the name
//readonly deyar mane holo amra only read korte parbo but write korte parbona
Person2.age=45;
  console.log(Person2)







}
