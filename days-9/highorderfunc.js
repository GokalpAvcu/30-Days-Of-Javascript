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

