//Declare a function fullName and it print out your full name.
function fullName1(){
    console.log("Sergen Yalçın")
}
fullName1()

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName,lastName){
    return `${firstName} ${lastName}`;
}
console.log(fullName("Gökalp", "Avcu"));

//Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(x,y){
    return x + y;
}
console.log(addNumbers(2,5))

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle

function areaOfRectangle (length, width){
    let area = length * width
    return area
}
console.log(areaOfRectangle(3,5))

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width){
    let area = (length + width) * 2
    return area
}
console.log(perimeterOfRectangle(10,12))

// alternatif çözüm 2

/*perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length * width);
    return perimeter;
}
perimeterOfRectangle(3, 5); */

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

volumeOfRectPrism = (length, width, height) => {
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism(2, 3, 4));

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

AreaOfCircle = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
}
console.log(AreaOfCircle(7));

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

circumOfCircle = (r) => {
    const PI = 3.14;
    return PI * r
}
console.log(circumOfCircle(6));



