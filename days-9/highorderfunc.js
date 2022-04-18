// callback
const fonksiyon = number => number ** 2

function cube(cb, number){
    return cb(number) * number
}

// console.log(cube(fonksiyon,3))


// Higher order functions return function as a value​
const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}

//console.log(a(5)(10)(20))

// Let us see were we use call back functions. For instance the forEach method uses call back.
const numbers = [1,3,5,7,9]
let total = 0
let calculate = number => total += number
numbers.forEach(calculate)

//console.log(total)

/*Setting time
In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

setInterval
setTimeout */

function sayHello() {
    console.log("Hello")
}
// setInterval(sayHello,3000) // her 3 saniyede bir sayHello yazmaya devam eder

// Gelecekte ki zaman diliminde bir kod blogunu calistirmak icin
// setTimeout kullanırız

function sayHello(){
    console.log("Hello")
}
//setTimeout(sayHello,5000)

//clearInterval 
//clearTimeout

const interval = setInterval(sayHello,1000)
const timeout = setTimeout(() => {
    clearInterval(interval)
    console.log("interval işlemi iptal edildi")
},5000)

setTimeout(() => {
    clearTimeout(timeout)
    console.log("timeout işlemi iptal edildi, interval devam edecek...")
},3000)

// Functional Programming

// forEach

let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => console.log(num))
console.log(sum)

// Output: 1,2,3,4,5

/*let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)

console.log(sum)
Output: 15 */

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

// Output: FINLAND DENMARK SWEDEN NORWAY ICELAND