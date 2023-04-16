let person=[
{
Uganda:"Kampala",
Kenya:"Nairobi"

},
{
    Uganda:"Entebbe",
    Kenya:"Nairobi"
}
];
for(i=0; i<person.length; i++){
    console.log(person[i].Uganda);

}
for (let persons of person) {
   
    console.log(persons.Kenya);
}
person.forEach(element => {
    console.log(element.Uganda);
});
const thisarry=person.map(function(persons){
return persons.Kenya
})
console.log(thisarry);

let anotherone= person.filter(function(persons){
    return persons.Uganda
}


)
console.log(anotherone);
//ternary Operators
let x=11
const color=x>20? "red":"blue";
console.log(color);
//switch statments
switch (color) {
    case "red":
       console.log("its red"); 
        break;
    case "blue":
        console.log("its blue"); 
         break;
    default:
        console.log("non");
        break;
}

//JAVASCRIPT OBJECTS

let details={
    firstName:["Bella","Shaturah"],
    lastName:"Kabonge",
    age:10,
    eyecolor:"Black"
    }
    for (const me in details) {
    //   console.log(details[me]);

      console.log(`Hi there my ${me} is ${details[me]}`);
    }

console.log(details.eyecolor);
console.log(details.lastName);
console.log(details.firstName);
details.name="Rayan"
console.log(details);
console.log();

//2
const persons = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
  };
  persons.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };
  console.log();

  








