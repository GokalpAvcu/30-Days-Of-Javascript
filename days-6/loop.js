// LOOPS

// for Loop

/*for(let i=0; i <= 5; i++){
    console.log(i)
} // 0 1 2 3 4 5

for(let i=5; i >= 0; i--){
    console.log(i)
} // 5 4 3 2 1 0

for (let i=0; i <= 100; i++){
    console.log("i", i)
} */

for(let i=0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`) 
} 
/* 0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25 */

/*const names = ["Emre", "Ali", "Ahmet", "Gökhan", "Oğuzhan"]

for (let i = 0; i <= 4; i++){
    console.log(names[i])
} */

const names = ["Emre", "Ali", "Ahmet", "Gökhan", "Oğuzhan", "Ozan"]

for (let i = 0; i < names.length; i++){
    console.log(names[i])
} // dizimin uzunlugu dinamik oldugu icin names.length yaptim sonradan birinin eklenmesi ihtimaline karsin

// Adding all elements in the array

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
    sum = sum  + numbers[i]
}
console.log(sum)


let numberss = [5, 10, 15]
let summ = 0

for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}

console.log("Toplam", sum)

// while loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
// 0 1 2 3 4 5

// BREAK

for(let i = 0; i <= 5; i++){
    if(i == 3){
        break
    }
    console.log(i)
} // yukaridaki islemde 3'ü buldugun an durdur

for(let name of names){
    if ( name === "Gökhan"){
        console.log(`${name} bulundu.`)
        break
    }
    console.log("Ad", name)
}

for(let i=1; i<=7; i++){
    for(let x=1; x<=i; x++){
        console.log("#");
    }
}


