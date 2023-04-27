function is_Leap_Year(year){

if(year%4===0){
    return  `${year}:Is a leap year` 
}
else if(year%4==0 && year%100 !==0){
return `${year}:Is a leap year` 
}
else {
    return  (`${year}:Is not leap year`)
}


}

console.log((is_Leap_Year(2021)));

// Write a javascript function named is_integer which
//  checks if the passed argument is an integer. You can use any mathematical
//  operator or functions defined in the Math object.
function checkInteger(num) {
    if( Number.isInteger(num)){ //checks if the number is an int
return " Is a number"
    }
    else{
        return "Not a number" 
    }
    
}
console.log(checkInteger(10));

// Using the forEach function defined for an array, 
// find the sum of the array of numbers.
 function add_all(arr) {
    let sum= 0;
  arr.forEach(num=> {

    sum+=num
  
  });  
  return sum
}
let arr=[4,6];
console.log(add_all(arr));

// Write a JavaScript program to convert temperatures to and from celsius,
//  fahrenheit. 
// [ Use the formula : c/5 = (f-32)/9, 
// where c = temperature in celsius and f = temperature in fahrenheit]

// Function to convert Celsius to Fahrenheit
function celsius_to_fahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheit_to_celsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  
  
  console.log(celsius_to_fahrenheit(20)); 
  console.log(fahrenheit_to_celsius(68)); 


//   Write a factorial function 
// that returns the factorial of a given number, n. 
// Make sure you return the calculated value and not just print it. 
function factorial(n){
if(n===0){
    return 1;
}
else {
    return factorial(n-1)*n
}


}
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(5));

// Write a javascript function that converts a given amount of money 
// into coins of denominations (1, 2, 5, 10 and 25). 
// [function convert_to_coins(amount) {...}].
//  You may choose to print the coin denominations used on the console. E.g. convert_to_coins(87)
//  should print 25 25 25 10 2.



function convert_to_coins(amount) {
  // Define an array of coin denominations in descending order
  const denominations = [25, 10, 5, 2, 1];
  // Initialize an empty array to store the coins
  const coins = [];
  // Iterate over the denominations
  for (let i = 0; i < denominations.length; i++) {
    // Divide the amount by the current denomination, and round down to the nearest integer
    const count = Math.floor(amount / denominations[i]);
    // Add the count of coins to the coins array
    for (let j = 0; j < count; j++) {
      coins.push(denominations[i]);
    }
    // Subtract the total value of the coins from the amount
    amount -= count * denominations[i];
  }
  // Print the coins array to the console
  console.log(coins);
}






  

