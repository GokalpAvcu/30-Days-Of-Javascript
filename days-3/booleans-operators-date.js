let a = 4
let b = 10

console.log( a += b) // a ile b'yi toplar a degerini 14'e eşitler

let c = 10
let d = 5

console.log( c-=d) // c'den d'yi cikarir ve c'nin yeni degerini 5'e esitler

const PI = 3.14
const boilingPoint = 100

console.log(`PI sayısının değeri ${PI} suyun kaynama sıcaklığı ${boilingPoint}'dir`)


// Comparison Operators (Karşılaştırma Operatörleri)

// let x = 5 (tek eşittir atama değeri yapar)
// x == y (iki eşittir sadece DEĞER (VALUE) eşitliğini kontrol eder)
// x === y (üç eşittir de ise hem DEĞER (VALUE) hem de VERİ TÜRÜNÜN (TYPE) aynı olup olmadığını kontrolü yapar)

// 5 == "5" // true
// 5 === "5" // false döner hem değer hem veri türü tipine bakar birisi int birisi string

"ahmet".length !== "mehmet".length

// Logical Operators (Mantıksal operatörler)

// && ampersand operator example (ve operatörü)

//const check = 4 > 3 && 10 > 5         // true && true -> true
//const check = 4 > 3 && 10 < 5         // true && false -> false
//const check = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example (or operatörü)

//const check = 4 > 3 || 10 > 5         // true  || true -> true döner
//const check = 4 > 3 || 10 < 5         // true  || false -> true döner
//const check = 4 < 3 || 10 < 5         // false || false -> false döner

//! Negation examples

//let check = 4 > 3                     // true
//let check = !(4 > 3)                  //  false
//let isLightOn = true
//let isLightOff = !isLightOn           // false
//let isMarried = !false                // true

/* Increment Operator (Arttırma operatörü)

// Pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

// Post-increment 
// Genel olarak bunu kullanırız
let count = 0
console.log(count++)        // 0
console.log(count)          // 1

//Decrement Operator (Azaltma operatörü)

// Pre-decrement
let count = 0
console.log(--count) // -1
console.log(count)  // -1

// Post-decrement
let count = 0
console.log(count--) // 0
console.log(count)   // -1 */

// Ternary Operators (Üçlü operatör) koşul durumu

// KOŞUL ? TRUE : FALSE
let isRaining = true // true olma koşulu
isRaining
? console.log("You need a rain coat.") // true ise bunu yaz
: console.log("No need for a rain coat.") // false ise bunu yaz

// false olma koşulu
isRaining = false
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

let number = 55
number > 0
? console.log(`${number} is a positive number`)
: console.log(`${number} is a negative number`)

// Window alert() method
// En başta gördüğünüz gibi alert() metodu, belirtilen bir mesaj ve bir OK butonu ile bir uyarı kutusu görüntüler. Yerleşik bir yöntemdir ve argüman alır.
// Yıkıcı ve sinir bozucu olduğu için çok fazla uyarı kullanmayın, sadece test etmek için kullanın.
// alert(message)
// alert('Welcome to my Youtube channel')

// Window prompt() method 
// Kullanıcıdan bir input almak istediğimde kullanılabilir
/*prompt('required text', 'optional text')
let num = prompt('Enter number', 'number goes here')
console.log(number)*/

// Window confirm() method 
// Pencere Onay Yöntemi

let isDelete = confirm("Silmek istediğine emin misin? ")

isDelete ? "Silme işlemi başarılı" : "Silme işlemi iptal"
console.log()


