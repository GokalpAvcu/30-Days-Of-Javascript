const date = new Date() // tarih işlemleri için date sınıfımı başlattım

let year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        dayNumber = date.getDay()

// aylar için bir dizi oluşturdum      
// months[month]
// $[months[month]]
let months = [
     "Ocak",
     "Şubat",
     "Mart",
     "Nisan",
     "Mayıs",
     "Haziran",
     "Temmuz",
     "Ağustos",
     "Eylül",
     "Ekim",
     "Kasım",
    "Aralık"
        ]
let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
]

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second}`
// 12 Mart, 2022, Cuma,
console.log(humanReadableDate)
//console.log(months.length)
//console.log(months[0])