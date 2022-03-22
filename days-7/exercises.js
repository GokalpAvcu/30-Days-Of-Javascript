//Declare a function fullName and it print out your full name.
function fullName(){
    console.log("Mario Gomez")
}
fullName()

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName,lastName){
    return `${firstName} ${lastName}`;
}
console.log(fullName("Gökalp", "Avcu"));

//Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(x,y){
    return x + y;
}
console.log(addNumbers(2,5))
