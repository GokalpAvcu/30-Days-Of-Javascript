function sayHello(){
    console.log("hello!")
}
sayHello(); // burda yazdigim fonksiyonu cagirmazsam icindeki hicbir zaman gözükmez

//**************************************************************************************************************************************** */

let msg = "merhaba dünya" // bu fonksiyonun icerisine ulasamaz cunku global scope iceride tanimli degil

function sayHi(){
    let msg = "hello world"
    console.log(msg)
}
sayHi()

function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total
}
console.log(addTwoNumbers())

//****************************************************************************************************************************************************/

function multiply(num1, num2){ // parametre değerlerini girdik
    return num1 * num2 // return ile geriye döndürdük
}
let total = multiply(5,2)
console.log("Toplam", total) // Toplam 10

// Function with two parameters
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(printFullName('Asabeneh', 'Yetayeh')) // Asabeneh Yetayeh


 function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  
  console.log(sumTwoNumbers(10, 20)) // 30

//Function with many parameters

function sumArrayValues(array){
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

let dizi =[2, 4, 6, 8, 10, 20]
//calling a function
console.log("Toplam", sumArrayValues(dizi)) // Toplam 50


const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
  }
console.log(areaOfCircle(10))

//Arguments
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function declaration
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// Function expression
const square = function(n) {
    return n * n
  }
  console.log(square(2)) // -> 4

//Self Invoking Functions
(function(n) {
    console.log(n * n)
  })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  let squaredNum = (function(n) {
    return n * n
  })(10)
  
  console.log(squaredNum)

//Arrow Function