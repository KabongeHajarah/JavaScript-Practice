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
  console.log((this.firstName + " " + this.lastName).toUpperCase());

  };
persons.name();

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfAcircle= radius=>{
   
    return Math.PI*radius*radius
    
}
console.log(areaOfAcircle(10));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumference= radius=>{
   
    return (2*(Math.PI*radius))
    
}
console.log(circumference(10));



// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density= (mass,volume)=>{
   
    return (mass/volume)
    
}
console.log(density(10,20));
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const speed= (distance,time)=>{
   
    return (distance/time)
    
}
console.log(speed(10,2));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight= (mass,gravity)=>{
   
    return (mass *gravity)
    
}
console.log(weight(10,2));
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const temp= (oC)=>{
   
    return ((oC * 9/5) + 32)
    
}
console.log(temp(70));
  








