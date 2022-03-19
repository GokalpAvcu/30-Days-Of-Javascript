// DAY 3 - EXERCİSES

//area of a triangle (ücgenin alanı)
const baseValue = Number(prompt("enter base of the triangle"));
const heightValue = Number(prompt("enter height of the triangle"));
const areaValue = (baseValue * heightValue ) / 2;
console.log(`the area of the triangle is ${areaValue}`); 

//perimeter of a triangle (ücgenin cevresi)
const sideA = Number(prompt("enter side A of the triangle:"));
const sideB = Number(prompt("enter side B of the triangle:"));
const sideC = Number(prompt("enter side C of the triangle:"));
const perimeter = ( sideA + sideB + sideC)
console.log(`the perimeter of the triangle is ${perimeter}`);

//area and perimeter of a rectangle (dikdörtgenin alanı ve cevresi)
const length = Number(prompt("enter length of the rectangle"))
const width = Number(prompt("enter width of the rectangle"))
const areaOfRectangle = length * width
console.log(`Dikdörtgenin alanı: ${perimeterValue}`) 

// Compare your first name length and your family name length and you should get this output.

let firstName = prompt("İsminizi giriniz")
let lastName = prompt("Soy isminizi giriniz")

firstName.length > lastName.length ? 
console.log(`Your first name, ${firstName} is longer than your last name, ${lastName}`): 
console.log(`Your first name, ${firstName} is shorter than your last name, ${lastName}`) 

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 42
let yourAge = 23
let difference = Math.abs(myAge - yourAge)
myAge > yourAge ? console.log(`I am ${difference} years older than you.`): 
console.log(`I am ${difference} years younger than you.`) 

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.




// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years




// Create a human readable time format using the Date time object