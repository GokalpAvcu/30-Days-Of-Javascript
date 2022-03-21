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
const perimeterOfRectangle = (length + width) * 2;
console.log(`the area of the rectangle is ${areaOfRectangle} while the perimeter is ${perimeterOfRectangle}`) 

//area and circumference of a circle (bir dairenin alanı ve cevresi)
const pi = 3.14
const radius = Number(prompt("Enter radius of a circle"));
const areaOfCircle = pi * radius * radius;
const circumference = 2 * pi * radius;
console.log(`the area of the circle is ${areaOfCircle} while the circumference is ${circumference}`)

//pay of a person
const hours = Number(prompt("enter your hours"));
const rate = Number(prompt("enter your rate"));
const pay = hours * rate;
console.log(`your pay is ${pay}`)

// Compare your first name length and your family name length and you should get this output.
let firstName = prompt("enter the first name")
let lastName = prompt("enter the last name")

firstName.length > lastName.length ? 
console.log(`Your first name, ${firstName} is longer than your last name, ${lastName}`): 
console.log(`Your first name, ${firstName} is shorter than your last name, ${lastName}`) 

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 42
let yourAge = 23
let difference = Math.abs(myAge - yourAge)
myAge > yourAge ? console.log(`Ben senden ${difference} yaş kadar daha büyüğüm.`): 
console.log(`Ben senden ${difference} yaş kadar daha küçüğüm.`) 

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.




// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years




// Create a human readable time format using the Date time object