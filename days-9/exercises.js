// 1- Explain the difference between forEach, map, filter, and reduce.
/*Foreach ,map,filter,reduce fonksiyonları arraylerde(diziler) kullanılan fonksiyonlardır. 
Kullanıldığı array’in orjinalinde değişkliğe sebep olmadıkları için immutable(mutasyona uğratmayan) fonksiyonlardır. 
Her biri, çalışırken içinde bir fonksiyon çalıştırır. Bu ayrı fonksiyona ise call back function denir. */

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//Use forEach to console.log each country in the countries array.
countries.forEach((country) => {
  console.log(country);
});

//Use forEach to console.log each name in the names array.
names.forEach((name) => {
  console.log(name);
});

//Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => {
    console.log(number)
});
