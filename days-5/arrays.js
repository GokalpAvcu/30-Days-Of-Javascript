// bir dizi sayesinde birden fazla değer taşıyabiliriz. 
// bir dizi tanımlarken const let'e göre daha fazla kullanılır.

// boş bir dizi oluşturmak için
let names = []
console.log(names)

let names2 = ["Gökalp" , 23, 1999, "Avcu"]
names2[0] = "Ahmet" // sıfırıncı eleman Ahmet olarak değişir

console.log(names2.length) // kaç tane elemanımın olduğunu verir

// **************************************************************************************************************************************************************

/*const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Diziyi ve uzunluğunu yazdırın

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)*/

// Dizi, farklı veri türlerinde öğelere sahip olabilir
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'GraphQL'] }
] // farklı veri türleri iceren dizi
console.log(arr)

// Split kullanarak bir dizi oluşturma
// Daha önceki bölümde gördüğümüz gibi, bir diziyi farklı konumlara bölebilir ve bir diziye değiştirebiliriz. Aşağıdaki örnekleri görelim.

let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies)

// ***************************************************************************************************************************************************

/*const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index
console.log(firstFruit) // banana */

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

// let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] // List of web technologies
  
  console.log(webTechs)        // all the array items
  console.log(webTechs.length) // => to know the size of the array, which is 7
  console.log(webTechs[0])     //  -> HTML
  console.log(webTechs[6])     //  -> MongoDB
  
 // let lastIndex = webTechs.length - 1
  console.log(webTechs[lastIndex]) // -> MongoDB

  // Dizi öğesini değiştirme
  // Bir dizi değiştirilebilir (değiştirilebilir). Bir dizi oluşturulduktan sonra dizi öğelerinin içeriğini değiştirebiliriz.

const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing 2 at index 1 to 20

console.log(numbers) // [10, 20, 3, 4, 5]


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
  let lastIndex = countries.length - 1
  countries[lastIndex] = 'Korea' // Replacing Kenya by Korea
  
  console.log(countries)

//Diziyi işleme yöntemleri
//Bir diziyi işlemek için farklı yöntemler vardır. 
//Dizilerle başa çıkmak için mevcut yöntemlerden bazıları şunlardır: 
//Array, length, concat, indexOf, dilim, splice, join, toString, include, lastIndexOf, isArray, fill, push, pop, shift, unshift

// Array:Bir dizi oluşturmak için
/*const arr = Array() // creates an an empty array
console.log(arr)*/


//Creating static values with fill
//fill: Fill all the array elements with a static value
const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]


// concat: İki diziyi birleştirmek için.
/*const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

console.log(fruitsAndVegetables) */

//indexOf: Bir dizide bir öğenin olup olmadığını kontrol etmek için. Varsa dizini döndürür, aksi takdirde -1 döndürür.
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1

// Dizimin içinde "banana" ögesinin olup olmadigini kontrol etmek icin
const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here (ternany operatoru ile)
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// let us check if a avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array
