const date = new Date() // tarih işlemleri için date sınıfımı başlattım

let year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDay(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        dayName = date.getDay()

// aylar için bir dizi oluşturdum      
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

let humanReadableDate = `${day}`
        console.log(months.length)
        console.log(months[0])