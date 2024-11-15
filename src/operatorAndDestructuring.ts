{
  console.log("spread operator,rest operator & destructuring");
  const rolls: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const allRools: number[] = [...rolls, 11, 12, 13];
  console.log(allRools);

  type PersonType = {
    name: string;
    age: number | string;
    designation: string;
    isActiveInCoding: boolean;
    company: string;
    salary?:number;
  };
  const Person: PersonType = {
    name: "shahid",
    //   age: 35,
    age: "35",
    designation: "problem solver",
    isActiveInCoding: true,
    company: "JS Enterprise",
  };

  const AllInfoOfPerson:PersonType={
    ...Person,
    salary:500000
  }
  console.log(AllInfoOfPerson)


  //10 min done






}
