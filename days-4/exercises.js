// DAY 3 - EXERCİSES

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

const baseValue = prompt("Üçgenin taban uzunluğunun değerini giriniz");
const heightValue = prompt("Üçgenin yükseklik değerini giriniz");

const areaValue = (baseValue * heightValue ) / 2;

console.log(`Üçgenin alanı ${areaValue}`);