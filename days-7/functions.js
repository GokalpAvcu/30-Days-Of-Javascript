function sayHello(){
    console.log("hello!")
}
sayHello(); // burda yazdigim fonksiyonu cagirmazsam icindeki hicbir zaman gözükmez

// let msg = "merhaba dünya" => bu fonksiyonun icerisine ulasamaz cunku global scope iceride tanimli degil

function sayHi(){
    let msg = "hello world"
    console.log(msg)
}
//****************************************************************************************************************************************************/
sayHello()

function multiply(num1, num2){ // parametre değerlerini girdik
    return num1 * num2 // return ile geriye döndürdük
}

let total = multiply(5,2)
console.log("Toplam", total)

//********************************************************************************************************************************************************/

function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(printFullName('Asabeneh', 'Yetayeh'))

//************************************************************************************************************************************************/

 function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  
  console.log(sumTwoNumbers(10, 20))

//**************************************************************************************************************************************************/

function sumArrayValues(array){
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

let dizi =[2, 4, 6, 8, 10, 20]
console.log("Toplam", sumArrayValues(dizi))