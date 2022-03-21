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