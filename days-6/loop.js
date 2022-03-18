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