// Conditionals (Koşullar)
// if
/*if (KOŞUL) {
      // kodlarınız çalışmaya başlar
} */

let isRaining = true
if (isRaining){
    console.log("Git şemsiye al!")
}

//if-else
let num = 3
if (num > 5){
    console.log(`${num} is a greater than 5`)
}else{
    console.log(`${num} is less than 5`)
}

let isSunny = false
if(isSunny) {
    console.log("Şemsiye almana gerek yok.")
}else{
    console.log("Hava yağışlı, şemsiye alman gerekir.")
}

let result = prompt("2 + 5 kaç yapar?")

if(result === "7"){
    console.log("Doğru cevabi verdin!")
}else {
    console.log("Hatalı cevap!")
}

// If Else if Else

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}