let score = 33;
let crscore = "25";

console.log(typeof score);  // check the type of value
console.log(typeof crscore);


let valueInNumber = Number(crscore); // convert into number
console.log("show the type of crscore is,", typeof valueInNumber);

// notes
// basic conversion
// "33" => 33
// "34ABD" => NaN => not a number
// true => 1; false => 0


let isLogedIn  = 1

let booleanIsLogedIn = Boolean(isLogedIn) // convert into boolean
console.log(booleanIsLogedIn);

// notes
// 1 => true; 0 => false
// "" => false 
// "nauman" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
