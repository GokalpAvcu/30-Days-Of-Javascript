let numOne = "Gokalp"
let numTwo = "Gokalp"
console.log(numOne == numTwo) // ""=="" true döner (string,number,boolean,null,undefined)

let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]
console.log( nums1 == nums2) // false döner cünkü (array,object,function) karsilastirilmaz, cünkü referanslara göre karsilastirma yapildigi icin.


let lightOff = false;
let lightOn = true;

let nums = [1, "prototurk", 3]

// nums[0] // 1
// nums[1] // prototurk
// nums[2] // 3

nums[1] = 2 // dizinin birinci elemanı prototurk'u 2 olarak degistik ve consolda bize [1,2,3] yazdırdı
console.log(nums)


//let name = "Gökalp"
//let surName = "Avcu"
//let fullName = name + " " + surName // "+" ile birleştirme işlemi daha eski bir yöntemdir güncel olan "$" ile birleştirme işlemidir
//console.log(fullName)

let num1 = 5
let num2 = 5.5
let total = num1 + num2
console.log(total)


console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break \n asagi satira gecer
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// TEMPLATE LİTERALS (backtick ve dolar isareti kullanılarak yazılır)

let name = "Gökalp"
let surName = "Avcu"
let a = 10
let b = 20
let fullName = `${name}

${a} + ${b} = ${a + b}

${surName}` // en güncel birlestirme islemidir 

console.log(fullName)

// String Methods

// length: dize uzunluğu yöntemi, boş alan içeren bir dizedeki karakter sayısını döndürür.
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8

// Bir dizideki karakterlere erişme : Dizindeki her karaktere dizinini kullanarak erişebiliriz. Programlamada, sayma 0'dan başlar. Dizinin ilk dizini sıfırdır ve son dizin, dizinin uzunluğu eksi birdir.
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

// toUpperCase() : bu yöntem, dizeyi büyük harflere değiştirir.

// let string = 'JavaScript' 
// console.log let string = 'JavaScript'
// console.log(string.toUpperCase())     // JAVASCRIPT
// let firstName = 'Asabeneh'
// console.log(firstName.toUpperCase())  // ASABENEH
// let country = 'Finland'
// console.log(country.toUpperCase())    // FINLAND


// split() : split yöntemi, bir dizeyi belirtilen bir yerde böler.

// let string = '30 Days Of JavaScript'
//console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
//console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

//let firstName = 'Asabeneh'
//console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
//console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

//let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

//console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
//console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

