{
  console.log("spread operator,rest operator & destructuring");

  const rolls: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //spread operator
  const allRools: number[] = [...rolls, 11, 12, 13];
  console.log(allRools);

  type PersonType = {
    name: string;
    age: number | string;
    designation: string;
    isActiveInCoding: boolean;
    company: string;
    salary?: number;
  };
  const Person: PersonType = {
    name: "shahid",
    //   age: 35,
    age: "35",
    designation: "problem solver",
    isActiveInCoding: true,
    company: "JS Enterprise",
  };

  //spread operator
  const AllInfoOfPerson: PersonType = {
    ...Person,
    salary: 500000,
  };
  console.log(AllInfoOfPerson);

  //rest operator & destructuring

  const [firstElement,...restElement]=[4,5,6,7,8,9,1,2,3,44,55,66,88];
  console.log("first : "+firstElement)
  console.log("rest is : "+restElement)

  //destructuring from an object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };

  let {firstName, lastName} = person;
  console.log(firstName)
  console.log(lastName)
}
