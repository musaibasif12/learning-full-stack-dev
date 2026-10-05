// //Practice Q1

// let arr = ["Google", "Amazon", "Microsoft", "Habib Bank"];

// let newArr = arr.splice(2, 1, "Faisal Bank");
// console.log(newArr);

// console.log(arr);

// //Array.length();

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;//return the length

// //The length property can also be used to set the length of an array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruits.length = 2;

// //------------------------------------------------------

// //Array.toString()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let myList = fruits.toString();//return the converted the array to string || every object in js has toString method

// //-------------------------------------------------------

// //Array.at()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);//return the element on this index

// //------------------------------------------------------

// //Array.join

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newFruits= fruits.join(" * ");//join the array

// //-----------------------------------------------------------

// //Array.pop()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();//return the popped out elemnet from the end of the array

// //-----------------------------------------------------------

// //Array.join

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");//add this in the end and return the new array length

// //-----------------------------------------------------------

// //Array.shift()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();//return the shifted out elemnet from the start of the array

// //-----------------------------------------------------------

// //Array.unshift()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Kiwi");//add this in the start and return the new array length

// //-----------------------------------------------------------

// //Array1.concat(Array2)

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);//return the concated new array and not change the orignal array; || can take any number of arguments

// //----------------------------------------------------------

// //Array.splice()

// const myGirls = ["Banana", "Orange", "Apple", "Mango"];

// Array.splice(1,1,"musaib");//The splice() method returns an array with the deleted items and change the existing array

// //----------------------------------------------------------

// //Array.toSpliced()

// const myGirls = ["Banana", "Orange", "Apple", "Mango"];

// Array.toSpliced(1,1,"musaib");//The toSpliced() method returns an array with the deleted items and also return new array

// //----------------------------------------------------------

// //Array.slice()

// const myGirls = ["Banana", "Orange", "Apple", "Mango"];

// Array.slice(1,3);//The splice() method returns an array with the deleted items

// //----------------------------------------------------------

// Array.filter

// let numbers = [5, 12, 18, 25, 30, 7];

// console.log(numbers.filter((num) => num > 10))

// let numbers = [5, 12, 18, 25, 30, 7];
// console.log(numbers.map((num) => num ** 2));

// let ages = [12, 18, 25, 15, 30, 16];
// console.log(ages.filter((age) => age >= 18));

// let names = ["ali", "ahmed", "usman"];
// console.log(names.map((name) => name.toUpperCase()));

// let products = [
//     { name: "Laptop", price: 100000 },
//     { name: "Mouse", price: 2000 },
//     { name: "Keyboard", price: 5000 },
//     { name: "Phone", price: 80000 }
// ];

// const newArray = products.filter((obj) => obj.price > 50000);

// const result = newArray.map((obj) => obj.name)
// console.log(result);
// let users = [
//   { name: "Ali", age: 22, active: true },
//   { name: "Ahmed", age: 17, active: false },
//   { name: "Usman", age: 25, active: true },
//   { name: "Hamza", age: 16, active: true },
//   { name: "Bilal", age: 30, active: false },
// ];

// let active = users.filter((user) => user.active === true);
// console.log(active);
// let ageCondition = active.filter((user) => user.age > 18);
// console.log(ageCondition);

// const result = ageCondition.map((obj) => obj.name);
// console.log(result);

// let products = [
//     { name: "Laptop", price: 120000 },
//     { name: "Mouse", price: 2000 },
//     { name: "Phone", price: 80000 },
//     { name: "Keyboard", price: 5000 },
//     { name: "Monitor", price: 45000 }
// ];

// let priceFilter = products.filter((obj) => obj.price > 10000)
// console.log(priceFilter)

// let names = priceFilter.map((obj) => obj.name);
// console.log(names);

// let users = [
//   {
//     name: "Ali",
//     age: 22,
//     orders: [
//       { product: "Laptop", price: 120000 },
//       { product: "Mouse", price: 3000 },
//     ],
//   },
//   {
//     name: "Ahmed",
//     age: 17,
//     orders: [{ product: "Phone", price: 80000 }],
//   },
//   {
//     name: "Usman",
//     age: 25,
//     orders: [
//       { product: "Monitor", price: 45000 },
//       { product: "Keyboard", price: 7000 },
//     ],
//   },
// ];

// let ageFilter = users.filter((obj) => obj.age > 18);
// console.log(ageFilter);

// let priceSum = ageFilter.map((obj) => {
//   let cart = obj.orders;
//   //   let total = 0;
//   //   for (let i = 0; i < cart.length; i++) {
//   //     total += cart[i].price;
//   //   }
//   let total = cart.reduce((prev, curr) => {
//     return prev + curr.price;
//   }, 0);
//   return {
//     name: obj.name,
//     total: total,
//   };
// });
// console.log(priceSum);

let products = [
  { name: "Laptop", price: 40000, stock: 5 },
  { name: "Mouse", price: 2500, stock: 0 },
  { name: "Keyboard", price: 5000, stock: 10 },
  { name: "Monitor", price: 99999999, stock: 3 },
  { name: "Headphones", price: 8000, stock: 0 },
];

const inStockItems = products.filter((item) => item.stock > 0);
console.log(inStockItems);
const inStockItemsNames = inStockItems.map((item) => item.name);
console.log(inStockItemsNames);
const highPrice = products.find((item) => item.price = 40000);
console.log(highPrice);
