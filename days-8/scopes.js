/*ad = "Gökalp" // window scope

//Window Global Object

a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible */

//Global scope

/*let a = 'JavaScript' // küresel bir kapsamdır, bu dosyanın herhangi bir yerinde bulunacaktır
let b = 10 // küresel bir kapsamdır, bu dosyanın herhangi bir yerinde bulunacaktır
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python' // a ve b degiskeni bu blok icerisinde tanimli
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b) // bu kod yukarıda tanımlanmış a = "Javascript" b = 10'yi etkiler
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible */

let name = "Gökalp"
let surname = "Avcu"

function letsLearnScope(){
    console.log(name,surname)
    if(true){
        let name = "Anderson"
        let surname = "Patrick"
        console.log(name,surname)
    }
    console.log(name,surname)
}
letsLearnScope()
console.log(name,surname)