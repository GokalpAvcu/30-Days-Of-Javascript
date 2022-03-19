// DAY 3 - EXERCİSES

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

const baseValue = prompt("Üçgenin taban uzunluğunun değerini giriniz");
const heightValue = prompt("Üçgenin yükseklik değerini giriniz");
const areaValue = (baseValue * heightValue ) / 2;
console.log(`Üçgenin alanı ${areaValue}`); 

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

const number1 = Number(prompt("A kenarının uzunluğunu giriniz:"));
const number2 = Number(prompt("B kenarının uzunluğunu giriniz:"));
const number3 = Number(prompt("C kenarınının uzunluğunu giriniz:"));

const perimeterValue = ( number1 + number2 + number3)

console.log(`Üçgenin Çevresi: ${perimeterValue}`);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

const number1 = Number(prompt("Dikdörtgenin uzun kenarının değerini giriniz!"))
const number2 = Number(prompt("Dikdörtgenin kısa kenarının değerini giriniz!"))

const perimeterValue = (number1 + number2) * 2
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