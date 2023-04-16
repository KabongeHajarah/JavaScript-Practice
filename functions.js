
//function which takes in unlimited number of arguments
      //regular-expression
function sumAllNums() {
    let sum=0
    for (let i = 0; i < arguments.length; i++) {
    
        sum+= arguments[i];
        
    } return sum

}
console.log(sumAllNums(14,3,5,67,8,9,0,45,10));

//arrow-function

 //we use the spread operator tp pass in many arguments
const sumAllNum=(...arr)=>{  
   let sum=0
   for (const item of arr) {
    sum+=item
   }
   return sum
    
}
console.log(sumAllNum(14,3,5,67,8,9,0,45,10))

//anonymous function
const anonymousFun=function() {
    console.log("I am anonymous function and my value is stored in an anonymous function");
}
//expresiion function.
const square = function(n) {
    return n * n
  }
  
  console.log(square(2)) //u call the variable si as to return the value

  //more arrow
  const changeToUppercase= thisArry=>{
    const newArr=[]
    for (const element of thisArry) {
       newArr.push(element.toUpperCase()) 
    }
    return newArr
  }
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUppercase(countries))


//example2
const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName('Asabeneh', 'Yetayeh'))

  //default values
  function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))

  
  
                             //Exercises

  //Declare a function fullName and it print out your full name.
  function fullname(firstName,secondName) {
    console.log(`My name is ${firstName} ${secondName}`)
  }
  fullname('Hajarah','Kabonge')

  //An area of a rectangle is calculated as follows: area = length x width.
  // Write a function which calculates areaOfRectangle.
  function areaOfAtriangle(length,width) {
   let area = length *width
   return area
  }
console.log(areaOfAtriangle(10,20));

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
//Write a function which calculates bmi. 
//BMI is used to broadly define different weight groups in adults 20 years old or older.
//Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function BMI (height,weight){
 let bmi=weight/(height*height)

 if (bmi <18.5) {
    console.log('Underweight')
 } else if (bmi >= 18.5 && bmi <= 24.9){
    console.log('Normal weight');
 }else if(bmi >=25 && bmi <= 29.9){
console.log("Overweight");
 }
 else {
    console.log("Obese");
 }

}

BMI(1.40,90)
BMI(16.5,60)
BMI(1.0,70)

//Declare a function name userIdGenerator. When this function is called it generates seven character id. 
//The function return the id.
function userIdGenerator() {
   let characters="56679878" ;
   let userId=""
   for (let i = 0; i< 7; i++) {
   let randomIndex=Math.floor(Math.random()* characters.length);
    userId+=characters[randomIndex]
   }
return userId;

}
console.log(userIdGenerator());
