// DAY 4- EXERCİSES

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const age = Number(prompt("Enter your age:"))
if (age >= 18) {
    console.log("You are old enough to drive")
}else{   
console.log(`You will have to wait ${18 - age} years`)
} 

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
const myAge = 23;
const yourAge =Number(prompt("Yaşınızı giriniz:"))

if (yourAge < myAge){
    console.log(`Benden ${myAge - yourAge} yaş küçüksünüz.`)
}else if(yourAge > myAge){
    console.log(`Benden ${yourAge - myAge} yaş büyüksünüz.`)
}else{
console.log("Yaşlarımız eşit.")
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else 
let a = 4;
let b = 3;
if (a>b){
    console.log("a is greater than b");
}else{
    console.log("a is less than b");
}
// ternary operator
(a > b) ? console.log("a is greater than b"): console.log("a is less than b");

// Write a code which can give grades to students according to theirs scores
let score = Number(prompt("enter your score"));
switch(true){
    case score > 80:
       console.log("A");
       break;
    case score > 70:
        console.log("B");
        break;
    case score > 60:
        console.log("C");
        break;
    case score > 50:
        console.log("D");
        break;
    case score(score < 50):
        console.log("F");
        break;
    default:
        console.log("no score assigned")

}


