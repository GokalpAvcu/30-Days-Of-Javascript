// DAY 4- EXERCİSES

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/*const age = Number(prompt("Enter your age:"))
if (age >= 18) {
    console.log("You are old enough to drive")
}else{   
console.log(`You will have to wait ${18 - age} years`)
} */

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

const myAge = 23;
const yourAge =Number(prompt("Yaşınızı giriniz:"))

if (yourAge < 23){
    console.log(`Benden ${myAge - yourAge} yaş küçüksünüz.`)
}else{
    console.log(`Benden ${yourAge - myAge} yaş büyüksünüz.`)
}