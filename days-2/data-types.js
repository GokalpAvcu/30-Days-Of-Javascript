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


let name = "Gökalp"
let surName = "Avcu"

//let fullName = name + " " + surName // "+" ile birleştirme işlemi daha eski bir yöntemdir güncel olan "$" ile birleştirme işlemidir
//console.log(fullName)

// TEMPLATE LİTERALS (backtick ve dolar isareti kullanılarak yazılır)

let fullName = `${name} ${surName}`

console.log(fullName)


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

