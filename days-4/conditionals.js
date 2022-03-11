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

// switch 
// Switch, if else if else için bir alternatiftir . switch ifadesi, bir switch anahtar sözcüğü ile başlar, ardından bir parantez ve kod bloğu gelir. Kod bloğunun içinde farklı durumlarımız olacak. 
// Vaka bloğu, switch ifadesi parantezindeki değer vaka değeriyle eşleşirse çalışır.
// Break ifadesi, koşul yerine getirildikten sonra kod yürütmesinin düşmemesi için yürütmeyi sonlandırmak içindir. 
// Varsayılan blok, tüm durumlar koşulu karşılamıyorsa çalışır.

/*switch(caseValue){
    case 1:
      // code
      break
    case 2:
     // code
     break
    case 3:
     // code
     break
    default:
     // code
  } */

  let weatherr = 'cloudy'
  switch (weatherr) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}


// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

//Examples to use conditions in the cases

let nums = prompt('Enter number');
switch (true) {
  case nums > 0:
    console.log('Number is positive');
    break;
  case nums == 0:
    console.log('Numbers is zero');
    break;
  case nums < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}

// Ternary Operators (üçlü koşullar) 
// eger daha az koşul varsa bu kullanılabilir

let isCloudy = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')